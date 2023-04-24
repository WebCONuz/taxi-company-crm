import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Calculation from "./views/Calculation.jsx";
import Settings from "./views/Settings.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="content" className="flex h-screen w-screen">
          <aside className="sidebar w-[20%] border-r border-gray-500 h-full p-4">
            <h2 className="text-center text-orange-400 text-2xl mb-4 font-bold">
              Taxi company CRM
            </h2>
            <ul>
              <li className="mb-2">
                <Link
                  className="flex items-center text-lg font-medium py-3 px-6 bg-orange-100 text-gray-800 rounded-md"
                  to="/"
                >
                  <i class="bx bxs-dashboard text-2xl mr-1"></i>
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="flex items-center text-lg font-medium py-3 px-6 bg-orange-100 text-gray-800 rounded-md"
                  to="/report"
                >
                  <i class="bx bxs-report text-2xl mr-1"></i>
                  Report
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="flex items-center text-lg font-medium py-3 px-6 bg-orange-100 text-gray-800 rounded-md"
                  to="/settings"
                >
                  <i class="bx bxs-cog text-2xl mr-1"></i>
                  Settings
                </Link>
              </li>
            </ul>
          </aside>
          <main className="main h-full overflow-x-hidden overflow-hidden px-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/report" element={<Calculation />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
