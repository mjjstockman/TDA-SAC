import Calendar from "@/components/Calendar";
import DaysRemaining from "@/components/DaysRemaining";
import Table from "@/components/Table";

const Dashboard = () => {
  return (
    <div>
      <div className="text-2xl flex justify-between">
        Your Bookings
        <DaysRemaining />
      </div>
      <div className="py-4">
        <Table />
      </div>
      <div className="text-2xl">
        Upcoming . . .
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
