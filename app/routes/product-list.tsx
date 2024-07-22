import RevenueCard from "~/components/ui/revenueCard/RevenueCard";

const App: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[20px] py-[30px]">
      <RevenueCard revenue="45,000.00" change="+20% from last month" />
      <RevenueCard revenue="45,000.00" change="+20% from last month" />
      <RevenueCard revenue="45,000.00" change="+20% from last month" />
    </div>
  );
};

export default App;
