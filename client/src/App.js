import React, { useState } from "react";
import Header from "./components/header";
import Addingredients from "./pages/addingredients";
import ExpireTable from "./pages/expiringItems";
import Joinwithus from "./pages/joinwithus";
import NgoDetails from "./pages/ngodetails";
import StatusTable from "./pages/statusTable";
import { Routes, Route } from "react-router-dom";
import { ItemContext } from "./ItemContext";

const App = () => {
  const [itemName, setItemName] = React.useState("");
  return (
    <ItemContext.Provider
      value={{
        itemName: [itemName, setItemName],
      }}
    >
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
    </ItemContext.Provider>
  );
};

export default App;
