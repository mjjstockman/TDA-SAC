import CalendarUI from "@/components/Calendar";
import DaysRemaining from "@/components/DaysRemaining";
import Table from "@/components/Table";
import Login from "./Login";

const Dashboard = () => {
  return (
    <div>
      <div className="text-2xl flex justify-between">
        Your Bookings
        <DaysRemaining />
      </div>
      <div className="px-20 py-10">
        <Table />
      </div>
      <div className="text-2xl">
        Upcoming . . .
        <div>
          <CalendarUI />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
