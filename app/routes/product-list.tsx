import AdminProductListTable from "~/components/ui/adminProductTable/AdminProductListTable";
import RevenueCard from "~/components/ui/revenueCard/RevenueCard";

const App: React.FC = () => {
  return (
    <div className="px-12">
      <div className="flex flex-wrap gap-[20px] py-[30px]">
        <RevenueCard revenue="45,000.00" change="+20% from last month" />
        <RevenueCard revenue="45,000.00" change="+20% from last month" />
        <RevenueCard revenue="45,000.00" change="+20% from last month" />
      </div>
      <AdminProductListTable />
    </div>
  );
};

export default App;
