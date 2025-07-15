"use server";

import clientPromise from "./db";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";

export async function addGuest(name, partySize) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const guests = db.collection("guests");
    const timeAdded = new Date();

    await guests.insertOne({ name, partySize, timeAdded, status: "waiting" });
    revalidatePath("/waitlist");
  } catch (error) {
    console.error("AddGuest error:", error);
    throw new Error("Failed to add guest");
  }
}

export async function seatGuest(id) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const guests = db.collection("guests");

    await guests.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: "seated", seatedAt: new Date() } }
    );

    revalidatePath("/waitlist");
    revalidatePath("/seated");
  } catch (error) {
    console.error("SeatGuest error:", error);
    throw new Error("Failed to seat guest");
  }
}

export async function removeGuest(id) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const guests = db.collection("guests");

    await guests.deleteOne({ _id: new ObjectId(id) });

    revalidatePath("/waitlist");
  } catch (error) {
    console.error("RemoveGuest error:", error);
    throw new Error("Failed to remove guest");
  }
}

export async function getWaitlist() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const guests = db.collection("guests");

    const data = await guests
      .find({ status: "waiting" })
      .sort()
      .toArray();

    return data.map((guest) => ({
      ...guest,
      _id: guest._id.toString(),
    }));
  } catch (error) {
    console.error("GetWaitlist error:", error?.message || error);
    return [];
  }
}

export async function getSeatedGuests() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const guests = db.collection("guests");

    const data = await guests
      .find({ status: "seated" })
      .sort()
      .toArray();

    return data.map((guest) => ({
      ...guest,
      _id: guest._id.toString(),
    }));
  } catch (error) {
    console.error("GetWaitlist error:", error?.message || error);
    return [];
  }
}
