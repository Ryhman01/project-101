import React from "react";
import { MdPaid } from "react-icons/md";
import TableClient from "../components/TableCllient";
import TableDashboard from "../components/TableDashboard";

const Dashboard = () => {
  return (
    <main className="mb-2 mt-20 mx-5">
      <h1 className="text-2xl font-medium">Dashboard Page</h1>
      <div className="my-10">
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          <div className="static card bg-blue-500 text-primary-content">
            <div className="card-body">
              <div className="flex justify-between">
                <div className="w-full">
                  <h1 className="font-light">Income</h1>
                  <h2 className="card-title mb-3 text-3xl sm:text-xl">
                    Rp.123.000K
                  </h2>
                  <span className="text-xs font-extralight text-white/70">
                    Increase Rp.12.000.000 since last month
                  </span>
                </div>
                <MdPaid size={50} />
              </div>
            </div>
          </div>

          <div className="static card w-full bg-red-500 text-primary-content">
            <div className="card-body">
              <div className="flex justify-between">
                <div className="w-full">
                  <h1 className="font-light">Not Started Project</h1>
                  <h2 className="card-title mb-3 text-3xl">5 Project</h2>
                  <span className="text-xs font-extralight text-white/70">
                    Increase 1 Project since last month
                  </span>
                </div>
                <MdPaid size={50} />
              </div>
            </div>
          </div>

          <div className="static card w-full bg-yellow-500 text-primary-content">
            <div className="card-body">
              <div className="flex justify-between">
                <div className="w-full">
                  <h1 className="font-light">On Progress Project</h1>
                  <h2 className="card-title mb-3 text-3xl">5 Project</h2>
                  <span className="text-xs font-extralight text-white/70">
                    Increase 0 Project since last month
                  </span>
                </div>
                <MdPaid size={50} />
              </div>
            </div>
          </div>

          <div className="static card w-full bg-green-500 text-primary-content">
            <div className="card-body">
              <div className="flex justify-between">
                <div className="w-full">
                  <h1 className="font-light">Completed Project</h1>
                  <h2 className="card-title mb-3 text-3xl">5 Project</h2>
                  <span className="text-xs font-extralight text-white/70">
                    Increase 2 since last month
                  </span>
                </div>
                <MdPaid size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="md:col-start-1 md:col-end-4">
          <TableDashboard />
        </div>
        <div className="md:col-start-4 md:col-end-6">
          <TableClient />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
