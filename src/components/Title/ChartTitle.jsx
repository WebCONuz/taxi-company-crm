function ChartTitle(props) {
  return (
    <div className="flex items-center justify-between pb-4">
      <h1 className="text-2xl text-center text-yellow-400 font-bold">
        {props.title}
      </h1>
    </div>
  );
}
export default ChartTitle;
