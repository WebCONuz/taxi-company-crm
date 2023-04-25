function ChartTitle(props) {
  return (
    <div className="flex items-center justify-between pb-6">
      <h1 className="text-2xl text-center text-yellow-400 font-bold">
        {props.title}
      </h1>
      <p className="text-2xl font-bold text-blue-500 flex items-center">
        Total: <i className="bx bx-dollar"></i>
        {props.price}
      </p>
    </div>
  );
}
export default ChartTitle;
