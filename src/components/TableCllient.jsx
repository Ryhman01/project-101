import React from "react";

const TableClient = () => {
  return (
    <div className="w-full md:mt-10  mb-10 rounded-2xl bg-white px-7 pb-7 relative z-0 shadow-md">
      <div className="bg-blue-600 rounded-2xl px-5 py-3 flex items-center justify-between relative -top-6 shadow-sm">
        <h1 className="text-white text-xl font-medium">Our Client</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="items-center w-full border-collapse">
          <thead>
            <tr>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                No.
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Client
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Cooperation
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Total Project
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                1.
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Bank BRI
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                12x
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                24
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                1.
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Bank BRI
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                12x
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                24
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                1.
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Bank BRI
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                12x
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                24
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                1.
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Bank BRI
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                12x
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                24
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                1.
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Bank BRI
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                12x
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                24
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableClient;
