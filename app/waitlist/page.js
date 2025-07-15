import { getWaitlist } from "@/lib/actions";
import GuestForm from "@/components/GuestForm";
import GuestList from "@/components/GuestList";

export default async function WaitlistPage() {
  const guests = await getWaitlist();

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Waitlist</h1>
      </div>
      <GuestForm />
      <GuestList guests={guests} />
    </div>
  );
}
