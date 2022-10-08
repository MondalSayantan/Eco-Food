import React from "react";
import Header from "./components/header";
import Addingredients from "./pages/addingredients";
import ExpireTable from "./pages/expiringItems";
import Joinwithus from "./pages/joinwithus";
import NgoDetails from "./pages/ngodetails";
import StatusTable from "./pages/statusTable";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/addingredients" element={<Addingredients />} />
        <Route path="/ngodetails" element={<NgoDetails />} />
        <Route path="/joinwithus" element={<Joinwithus />} />
        <Route path="/statustable" element={<StatusTable />} />
        <Route path="/expiringitems" element={<ExpireTable />} />
      </Routes>
    </div>
  );
};

export default App;
