import { calculation } from "../data";
import CalculationForm from "../components/Form/CalculationForm";
function Calculation() {
  return (
    <>
      <CalculationForm show="true" />
      <div className="flex items-center justify-start py-8">
        <h1 className="text-2xl text-center text-yellow-400 font-bold mr-8">
          Kunlik tushumlar
        </h1>
        <button className="py-2 px-5 rounded bg-green-200 text-green-500 font-bold mr-2 hover:bg-green-500 hover:text-white duration-200 active:bg-green-700">
          Kirim
        </button>
        <button className="py-2 px-5 rounded bg-red-200 text-red-500 font-bold hover:bg-red-500 hover:text-white duration-200 active:bg-red-700">
          Chiqim
        </button>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
            <th className="py-3 px-6 text-left">No</th>
            <th className="py-3 px-6 text-left">Hisobchi</th>
            <th className="py-3 px-6 text-center">Sana</th>
            <th className="py-3 px-6 text-center">Summa</th>
            <th className="py-3 px-6 text-center">Kirim / chiqim</th>
            <th className="py-3 px-6 text-center">sabab</th>
            <th className="py-3 px-6 text-center">To'lov turi</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-medium">
          {calculation.map((item) => {
            return (
              <tr
                className={`border-b border-gray-200  ${
                  item.is_input ? "bg-green-50" : "bg-red-50"
                }`}
                key={item.id}
              >
                <td className="py-2 px-6 text-left whitespace-nowrap">
                  {item.id}
                </td>
                <td className="py-2 px-6 text-left">{item.name}</td>
                <td className="py-2 px-6 text-center">{item.date}</td>
                <td className="py-2 px-6 text-center">{item.sum}</td>
                <td
                  className={`py-2 px-6 text-center text-base text-bold ${
                    item.is_input ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.is_input ? "Kirim" : "Chiqim"}
                </td>
                <td className="py-2 px-6 text-justify">{item.desctiption}</td>
                <td className="py-3 px-6 text-center">{item.payment_type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Calculation;
