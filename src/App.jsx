import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Dashboard from "./views/Dashboard.jsx";
import Calculation from "./views/Calculation.jsx";
import Settings from "./views/Settings.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="content" className="flex h-screen w-screen">
          <aside className="sidebar w-[20%] border-r-2 border-gray-300 h-full p-4">
            <h2 className="text-center text-yellow-400 text-2xl mb-6 mt-2 font-bold">
              Taxi company CRM
            </h2>
            <ul>
              <li className="mb-2">
                <NavLink
                  className="flex items-center text-lg font-medium py-3 px-6 bg-yellow-100 text-gray-800 rounded-md"
                  to="/"
                >
                  <i className="bx bxs-dashboard text-2xl mr-1"></i>
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  className="flex items-center text-lg font-medium py-3 px-6 bg-yellow-100 text-gray-800 rounded-md"
                  to="/report"
                >
                  <i className="bx bxs-report text-2xl mr-1"></i>
                  Report
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink
                  className="flex items-center text-lg font-medium py-3 px-6 bg-yellow-100 text-gray-800 rounded-md"
                  to="/settings"
                >
                  <i className="bx bxs-cog text-2xl mr-1"></i>
                  Settings
                </NavLink>
              </li>
            </ul>
          </aside>
          <main className="main flex-grow h-full overflow-x-hidden overflow-y-auto px-8 py-6">
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
