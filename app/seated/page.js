import { getSeatedGuests } from "@/lib/actions";

export default async function SeatedPage() {
  const guests = await getSeatedGuests();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Seated Guests</h1>
      </div>
      {guests.length === 0 ? (
        <p>No one has been seated yet</p>
      ) : (
        <ul className="space-y-4">
          {guests.map((guest) => (
            <li key={guest._id} className="border p-4">
              <p>
                {guest.name} • Party {guest.partySize}
              </p>
              <small>
                Seated at {new Date(guest.seatedAt).toLocaleTimeString()}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
