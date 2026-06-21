import EmptyState from "../../../components/ui/EmptyState";

export default function DashboardMessagesPage() {
  return (
    <main className="min-h-screen bg-black text-white p-24">
      <h1 className="text-5xl font-bold">
        User Messages
      </h1>
      <EmptyState
  icon="💬"
  title="No Messages Yet"
  description="User messages will appear here."
/>
    </main>
  );
}