import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DoughnutChart from "../components/Chart/Doughnut";
import ChartTitle from "../ui/ChartTitle";
import { inputs, outputs, orders } from "../data";
import DateMaker from "../helpers/dateMaker";
import Average from "../helpers/average";
import CityMap from "../components/Map/Map";

function Dashboard() {
  // States
  const [startDate, setStartDate] = useState(new Date());
  const [inputData, setInputData] = useState(null);
  const [orderStartDate, setOrderStartDate] = useState(new Date());
  const [orderData, setOrderData] = useState(null);
  const [outputDate, setOutputDate] = useState(new Date());
  const [outputData, setOutputData] = useState(null);

  // Kunlik Tushumlar
  const getInputsDataByDate = () => {
    if (startDate) {
      const time = DateMaker(startDate);
      const info = inputs.filter((item) => item.date == time);
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
    getInputsDataByDate();
  }, [startDate]);

  // Kunlik Buyurtmalar
  const getOrderDataByDate = () => {
    if (orderStartDate) {
      const time = DateMaker(orderStartDate);
      const info = orders.filter((item) => item.date == time);
      if (info.length === 0) {
        setOrderData(null);
      } else if (info.length === 1) {
        const dayData = {
          data: [
            info[0].taxi_services,
            info[0].repair_services,
            info[0].delivery,
            info[0].other,
          ],
          label: ["Taxi service", "Repair services", "delivery", "other"],
          color: ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
        };
        setOrderData(dayData);
      } else {
        const ts = [],
          rs = [],
          dl = [],
          oth = [];
        info.forEach((item) => {
          ts.push(item.taxi_services);
          rs.push(item.repair_services);
          dl.push(item.delivery);
          oth.push(item.other);
        });
        const dayData = {
          data: [Average(ts), Average(rs), Average(dl), Average(oth)],
          label: ["Taxi service", "Repair services", "delivery", "other"],
          color: ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
        };
        setOrderData(dayData);
      }
    } else {
      console.log("Date kiriting");
    }
  };
  useEffect(() => {
    getOrderDataByDate();
  }, [orderStartDate]);

  // Kunlik Chiqimlar
  const getOutputsDataByDate = () => {
    if (outputDate) {
      const time = DateMaker(outputDate);
      const info = outputs.filter((item) => item.date == time);
      if (info.length === 0) {
        setOutputData(null);
      } else if (info.length === 1) {
        const dayData = {
          data: [
            info[0].accidents,
            info[0].repair_services,
            info[0].tax,
            info[0].other,
          ],
          label: ["Accidents", "Repair service", "tax", "other"],
          color: ["#FB923C", "#FDBA74", "#FED7AA", "#F97316"],
        };
        setOutputData(dayData);
      } else {
        const ac = [],
          rs = [],
          tax = [],
          oth = [];
        info.forEach((item) => {
          ac.push(item.accidents);
          rs.push(item.repair_services);
          tax.push(item.tax);
          oth.push(item.other);
        });
        const dayData = {
          data: [Average(ac), Average(rs), Average(tax), Average(oth)],
          label: ["Accidents", "Repair service", "tax", "other"],
          color: ["#FB923C", "#FDBA74", "#FED7AA", "#F97316"],
        };
        setOutputData(dayData);
      }
    } else {
      console.log("Date kiriting");
    }
  };
  useEffect(() => {
    getOutputsDataByDate();
  }, [outputDate]);

  return (
    <>
      <section className="flex flex-wrap justify-between">
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <ChartTitle title="Tushumlar" />
          <div className="mb-4">
            <span className="mb-2 block font-semibold">Kunlik</span>
            <DatePicker
              className="border border-gray-300 py-[6px] px-2 rounded outline-none w-[90%]"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
                getInputsDataByDate();
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
            "Bu kunda tushumlar mavjud emas"
          )}
        </div>
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <ChartTitle title="Buyurtmalar" />
          <div className="mb-4">
            <span className="mb-2 block font-semibold">Kunlik</span>
            <DatePicker
              className="border border-gray-300 py-[6px] px-2 rounded outline-none w-[90%]"
              selected={startDate}
              onChange={(date) => {
                setOrderStartDate(date);
                getOrderDataByDate();
              }}
              isClearable={true}
            />
          </div>
          {orderData ? (
            <DoughnutChart
              data={orderData.data}
              label={orderData.label}
              color={orderData.color}
            />
          ) : (
            "Bu kunda buyurtmalar mavjud emas"
          )}
        </div>
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <ChartTitle title="Chiqimlar" />
          <div className="mb-4">
            <span className="mb-2 block font-semibold">Kunlik</span>
            <DatePicker
              className="border border-gray-300 py-[6px] px-2 rounded outline-none w-[90%]"
              selected={outputDate}
              onChange={(date) => {
                setOutputDate(date);
                getOutputsDataByDate();
              }}
              isClearable={true}
            />
          </div>
          {outputData ? (
            <DoughnutChart
              data={outputData.data}
              label={outputData.label}
              color={outputData.color}
            />
          ) : (
            "Bu kunda buyurtmalar mavjud emas"
          )}
        </div>
        <div className="w-[49%] p-6 border border-gray-300 rounded-lg mb-6">
          <CityMap />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
