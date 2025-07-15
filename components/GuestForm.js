"use client";

import { useState } from "react";
import { addGuest } from "@/lib/actions";
import toast from "react-hot-toast";

export default function GuestForm() {
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name || !partySize) {
      toast.error("Please fill in both fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      await addGuest(name, Number(partySize));
      toast.success("Guest added!");

      setName("");
      setPartySize("");
    } catch (error) {
      console.error("Failed to add guest:", error);
      toast.error("Failed to add guest");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 w-full"
        disabled={isSubmitting}
      />
      <input
        type="number"
        value={partySize}
        onChange={(e) => setPartySize(e.target.value)}
        placeholder="Party Size"
        className="border p-2 w-full"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-4 py-2 rounded text-white ${
          isSubmitting ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "Adding..." : "Add Guest"}
      </button>
    </form>
  );
}
