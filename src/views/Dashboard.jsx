import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DoughnutChart from "../components/Chart/Doughnut";
import ChartTitle from "../ui/ChartTitle";
import { inputs, outputs, orders } from "../data";
import DateMaker from "../helpers/dateMaker";
import Average from "../helpers/average";

function Dashboard() {
  const [inputData, setInputData] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  const getDataByDate = () => {
    if (startDate) {
      const time = DateMaker(startDate);
      const info = inputs.filter((item) => item.date == time);
      console.log(info);
      if (info.length === 0) {
        setInputData(null);
      } else if (info.length === 1) {
        const dayData = {
          data: [
            info[0].taxi_services,
            info[0].clients,
            info[0].delivery,
            info[0].other,
          ],
          label: ["Taxi service", "clients", "delivery", "other"],
          color: ["#22C55E", "#4ADE80", "#86EFAC", "#BBF7D0"],
        };
        setInputData(dayData);
      } else {
        const ts = [],
          cl = [],
          dl = [],
          oth = [];
        info.forEach((item) => {
          ts.push(item.taxi_services);
          cl.push(item.clients);
          dl.push(item.delivery);
          oth.push(item.other);
        });
        const dayData = {
          data: [Average(ts), Average(cl), Average(dl), Average(oth)],
          label: ["Taxi service", "clients", "delivery", "other"],
          color: ["#22C55E", "#4ADE80", "#86EFAC", "#BBF7D0"],
        };
        setInputData(dayData);
      }
    } else {
      console.log("Date kiriting");
    }
  };

  useEffect(() => {
    getDataByDate();
  }, [startDate]);

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
          <ChartTitle title="Tushumlar" price="810" />
          <div className="mb-4">
            <span className="mb-2 block font-semibold">Kunlik</span>
            <DatePicker
              className="border border-gray-400 py-[6px] px-2 rounded outline-none w-[90%]"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                getDataByDate();
              }}
              isClearable={true}
            />
          </div>
          {inputData ? (
            <DoughnutChart
              data={inputData.data}
              label={inputData.label}
              color={inputData.color}
            />
          ) : (
            "Bu kunda ma'lumotlar mavjud emas"
          )}
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
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <div className="w-10 h-10 bg-orange-200"></div>
          <div className="w-10 h-10 bg-orange-300"></div>
          <div className="w-10 h-10 bg-orange-400"></div>
          <div className="w-10 h-10 bg-orange-500"></div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
