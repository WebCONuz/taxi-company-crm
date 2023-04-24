import Chart from "../components/Chart/Chart";
function Dashboard() {
  return (
    <>
      <div className="py-4">
        <input type="text" />
      </div>

      <div className="flex items-center justify-between py-8">
        <h1 className="text-2xl text-center text-yellow-400 font-bold">
          Kunlik Buyurtmalar
        </h1>
        <p className="text-2xl font-bold text-blue-500">Total: $840</p>
      </div>

      <Chart />
    </>
  );
}

export default Dashboard;
