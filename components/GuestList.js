"use client";

import { useState } from "react";
import { seatGuest, removeGuest } from "@/lib/actions";
import toast from "react-hot-toast";

export default function GuestList({ guests }) {
  const [loadingId, setLoadingId] = useState(null);
  const [loadingAction, setLoadingAction] = useState(null);

  const handleSeatGuest = async (id) => {
    try {
      setLoadingId(id);
      setLoadingAction("seat");
      await seatGuest(id);
      toast.success("Guest seated!");
    } catch (error) {
      toast.error("Failed to seat guest");
    } finally {
      setLoadingId(null);
      setLoadingAction(null);
    }
  };

  const handleRemoveGuest = async (id) => {
    try {
      setLoadingId(id);
      setLoadingAction("remove");
      await removeGuest(id);
      toast.success("Guest removed!");
    } catch (error) {
      toast.error("Failed to remove guest");
    } finally {
      setLoadingId(null);
      setLoadingAction(null);
    }
  };

  if (!guests || guests.length === 0) {
    return <p className="text-gray-500 italic">No guests yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {guests.map((guest) => (
        <li
          key={guest._id}
          className="border p-4 flex justify-between items-center"
        >
          <div>
            <p>
              {guest.name} • Party {guest.partySize}
            </p>
            <small>{new Date(guest.timeAdded).toLocaleTimeString()}</small>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => handleSeatGuest(guest._id)}
              disabled={loadingId === guest._id}
              className={`px-3 py-1 text-white ${
                loadingId === guest._id && loadingAction === "seat"
                  ? "bg-green-300"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {loadingId === guest._id && loadingAction === "seat"
                ? "Seating..."
                : "Seat"}
            </button>
            <button
              onClick={() => handleRemoveGuest(guest._id)}
              disabled={loadingId === guest._id}
              className={`px-3 py-1 text-white ${
                loadingId === guest._id && loadingAction === "remove"
                  ? "bg-red-300"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {loadingId === guest._id && loadingAction === "remove"
                ? "Removing..."
                : "Remove"}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
