import DoughnutChart from "../components/Chart/Doughnut";
import ChartTitle from "../ui/ChartTitle";
function Dashboard() {
  const inputData = [55, 25, 15, 5];
  const inputLabel = ["Taxi service", "clients", "delivery", "other service"];
  const inputColor = ["#22C55E", "#4ADE80", "#86EFAC", "#BBF7D0"];

  const orderData = [45, 35, 18, 2];
  const orderLabel = ["Taxi service", "clients", "delivery", "other service"];
  const orderColor = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

  const outputData = [60, 35, 5];
  const outputLabel = ["Tamirlash", "soliqlar", "other outputs"];
  const outputColor = ["#FB923C", "#FDBA74", "#FED7AA"];
  return (
    <>
      <div className="py-4">
        <input type="text" />
      </div>

      <section className="flex flex-wrap justify-between">
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <div className="w-10 h-10 bg-orange-200"></div>
          <div className="w-10 h-10 bg-orange-300"></div>
          <div className="w-10 h-10 bg-orange-400"></div>
          <div className="w-10 h-10 bg-orange-500"></div>
        </div>
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <ChartTitle title="Tushumlar" price="810" />
          <DoughnutChart
            data={inputData}
            label={inputLabel}
            color={inputColor}
          />
        </div>
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <ChartTitle title="Buyurtmalar" price="853" />
          <DoughnutChart
            data={orderData}
            label={orderLabel}
            color={orderColor}
          />
        </div>
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <ChartTitle title="Chiqimlar" price="800" />
          <DoughnutChart
            data={outputData}
            label={outputLabel}
            color={outputColor}
          />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
