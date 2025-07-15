"use client";
import { useState } from "react";
import { addGuest } from "@/lib/actions";

export default function GuestForm() {
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addGuest(name, Number(partySize));
    setName("");
    setPartySize("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <input
        type="number"
        value={partySize}
        onChange={(e) => setPartySize(e.target.value)}
        placeholder="Party Size"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Guest
      </button>
    </form>
  );
}
