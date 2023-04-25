import React from "react";

const CalculationForm = (props) => {
  return (
    <>
      <div className="h-screen w-screen bg-[#000000ce] fixed top-0 left-0 z-10">
        <div
          className={`w-[400px] h-screen absolute top-0 py-4 px-6 ${
            props.show ? "right-0" : "-right-full"
          } z-10 bg-gray-200 duration-200 pt-16`}
        >
          <div className="close w-[45px] h-[45px] rounded-full flex items-center justify-center bg-gray-300 absolute top-6 right-6 border-2 border-gray-400">
            <i className="bx bx-x text-3xl text-gray-700"></i>
          </div>
          <h2 className="text-center font-bold text-blue-500 text-2xl mb-4 w-full">
            Kirim-Chiqim
          </h2>
          <form action="#" className="block w-full">
            <label htmlFor="summ" className="block mb-4">
              <p className="mb-2 text-lg font-normal">Pul miqdori:</p>
              <input
                type="text"
                className="w-full py-2 px-3 border border-gray-400 text-gray-700 outline-0 block rounded"
                id="summ"
              />
            </label>
            <label htmlFor="description" className="block mb-4">
              <p className="mb-2 text-lg font-normal">Sabab:</p>
              <input
                type="text"
                className="w-full py-2 px-3 border border-gray-400 text-gray-700 outline-0 block rounded"
                id="description"
              />
            </label>
            <label htmlFor="payment" className="block mb-6">
              <p className="mb-2 text-lg font-normal">To'lov turi:</p>
              <input
                type="text"
                className="w-full py-2 px-3 border border-gray-400 text-gray-700 outline-0 block rounded"
                id="payment"
              />
            </label>
            <div className="text-center">
              <button
                type="submit"
                className="py-2 px-5 rounded  font-bold mr-2 bg-green-500 text-white duration-200 active:bg-green-700"
              >
                Qo'shish
              </button>
              <button
                type="reset"
                className="py-2 px-5 rounded  font-bold bg-red-500 text-white duration-200 active:bg-red-700"
              >
                Tozalash
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default CalculationForm;
