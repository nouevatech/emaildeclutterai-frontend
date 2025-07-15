import DashboardHeader from "../components/DashboardHeader";
import InboxOverview from "../components/InboxOverview";
import DashboardSettings from "../components/DashboardSettings";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* <DashboardHeader /> */}
      <InboxOverview />
      <DashboardSettings />
    </div>
  );
}
