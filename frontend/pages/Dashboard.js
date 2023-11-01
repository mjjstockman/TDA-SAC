
import Calendar from "@/components/Calendar";
import Table from "@/components/Table";

const Dashboard = () => {



  return (
    <div>
      <div className="text-2xl">
        Your Bookings
        <div className="py-4">
          <Table/> 
        </div>
      </div>
      <div className="text-2xl">
        Upcoming . . .
        <div>
          <Calendar/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
