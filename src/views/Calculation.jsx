function Calculation() {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <h1 className="text-2xl text-center text-yellow-400 font-bold">
          Kunlik tushumlar
        </h1>
        <p className="text-2xl font-bold text-blue-500">Total: $840</p>
      </div>
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-xs leading-normal">
            <th className="py-3 px-6 text-left">id</th>
            <th className="py-3 px-6 text-left">Driver name</th>
            <th className="py-3 px-6 text-center">phone</th>
            <th className="py-3 px-6 text-center">car_number</th>
            <th className="py-3 px-6 text-center">date</th>
            <th className="py-3 px-6 text-center">desctiption</th>
            <th className="py-3 px-6 text-center">Summa</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-medium">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-2 px-6 text-left whitespace-nowrap">1</td>
            <td className="py-2 px-6 text-left">Eshal Rosas</td>
            <td className="py-2 px-6 text-center">+998995426307</td>
            <td className="py-2 px-6 text-center text-blue-500">AC541DCA</td>
            <td className="py-2 px-6 text-center">24.04.2023 20:33</td>
            <td className="py-3 px-6 text-center">To'liq bajarildi</td>
            <td className="py-2 px-6 text-center">$25</td>
            <td className="py-2 px-6 text-center">
              <div className="flex items-center justify-center">
                <i class="bx bxs-trash text-xl mr-1"></i>
                <i class="bx bx-edit text-xl"></i>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-2 px-6 text-left whitespace-nowrap">2</td>
            <td className="py-2 px-6 text-left">Eshal Rosas</td>
            <td className="py-2 px-6 text-center">+998995426307</td>
            <td className="py-2 px-6 text-center text-blue-500">AC541DCA</td>
            <td className="py-2 px-6 text-center">24.04.2023 20:33</td>
            <td className="py-3 px-6 text-center">To'liq bajarildi</td>
            <td className="py-2 px-6 text-center">$25</td>
            <td className="py-2 px-6 text-center">
              <div className="flex items-center justify-center">
                <i class="bx bxs-trash text-xl mr-1"></i>
                <i class="bx bx-edit text-xl"></i>
              </div>
            </td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-2 px-6 text-left whitespace-nowrap">3</td>
            <td className="py-2 px-6 text-left">Eshal Rosas</td>
            <td className="py-2 px-6 text-center">+998995426307</td>
            <td className="py-2 px-6 text-center text-blue-500">AC541DCA</td>
            <td className="py-2 px-6 text-center">24.04.2023 20:33</td>
            <td className="py-3 px-6 text-center">To'liq bajarildi</td>
            <td className="py-2 px-6 text-center">$25</td>
            <td className="py-2 px-6 text-center">
              <div className="flex items-center justify-center">
                <i class="bx bxs-trash text-xl mr-1"></i>
                <i class="bx bx-edit text-xl"></i>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calculation;
