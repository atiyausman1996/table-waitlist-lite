"use client";
import { seatGuest, removeGuest } from "@/lib/actions";

export default function GuestList({ guests }) {
  return (
    <ul className="space-y-4">
      {guests.length === 0 && <p>No guests yet</p>}
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
              onClick={async () => {
                await seatGuest(guest._id);
              }}
              className="bg-green-500 text-white px-3 py-1"
            >
              Seat
            </button>
            <button
              onClick={async () => {
                await removeGuest(guest._id);
              }}
              className="bg-red-500 text-white px-3 py-1"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
