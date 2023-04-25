function Calculation() {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <h1 className="text-2xl text-center text-yellow-400 font-bold">
          Kunlik tushumlar
        </h1>
        <div className="flex">
          <button className="py-2 px-5 rounded bg-gray-100 mr-2">Kirim</button>
          <button className="py-2 px-5 rounded bg-gray-100">Chiqim</button>
        </div>
      </div>
      <table className="min-w-max w-full table-auto">
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
          <tr className="border-b border-gray-200 hover:bg-gray-100 bg-green-100">
            <td className="py-2 px-6 text-left whitespace-nowrap">1</td>
            <td className="py-2 px-6 text-left">Eshal Rosas</td>
            <td className="py-2 px-6 text-center">24.04.2023 20:33</td>
            <td className="py-2 px-6 text-center">$25</td>
            <td className="py-2 px-6 text-center text-bold text-green-500">
              Kirim
            </td>
            <td className="py-2 px-6 text-center">Pul tushdi</td>
            <td className="py-3 px-6 text-center">karta</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100 bg-red-50">
            <td className="py-2 px-6 text-left whitespace-nowrap">2</td>
            <td className="py-2 px-6 text-left">Eshal Rosas</td>
            <td className="py-2 px-6 text-center">24.04.2023 20:33</td>
            <td className="py-2 px-6 text-center">$25</td>
            <td className="py-2 px-6 text-center text-bold text-red-500">
              Chiqim
            </td>
            <td className="py-2 px-6 text-center">Pul tushdi</td>
            <td className="py-3 px-6 text-center">karta</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calculation;
