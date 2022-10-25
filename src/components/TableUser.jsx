import React from "react";

const TableUser = () => {
  return (
    <div className="w-full mt-10 mb-10 rounded-2xl bg-white px-7 pb-7 relative z-0 shadow-md">
      <div className="bg-blue-600 rounded-2xl px-5 py-3 flex items-center justify-between relative -top-6 shadow-sm">
        <h1 className="text-white text-xl font-medium">User List</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="items-center w-full border-collapse">
          <thead>
            <tr>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                User ID
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Username
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Password
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Full Name
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Address
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Role
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                PID001
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                BRIVA Project
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Rp.12.000.000
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                6
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                54%
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                On Progress
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1">
                <button className="px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm">
                  Edit
                </button>
                <button className="px-3 py-1 rounded-full text-white font-medium block bg-red-500 text-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                PID001
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                BRIVA Project
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Rp.12.000.000
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                6
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                54%
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                On Progress
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1">
                <button className="px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm">
                  Edit
                </button>
                <button className="px-3 py-1 rounded-full text-white font-medium block bg-red-500 text-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                PID001
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                BRIVA Project
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Rp.12.000.000
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                6
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                54%
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                On Progress
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1">
                <button className="px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm">
                  Edit
                </button>
                <button className="px-3 py-1 rounded-full text-white font-medium block bg-red-500 text-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                PID001
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                BRIVA Project
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Rp.12.000.000
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                6
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                54%
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                On Progress
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1">
                <button className="px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm">
                  Edit
                </button>
                <button className="px-3 py-1 rounded-full text-white font-medium block bg-red-500 text-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                PID001
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                BRIVA Project
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                Rp.12.000.000
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                6
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                54%
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                On Progress
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center flex items-center justify-center gap-1">
                <button className="px-5 py-1 rounded-full text-white font-medium block bg-blue-500 text-sm">
                  Edit
                </button>
                <button className="px-3 py-1 rounded-full text-white font-medium block bg-red-500 text-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUser;
