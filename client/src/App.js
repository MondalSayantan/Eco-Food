import React from "react";
import Header from "./components/header";
import Addingredients from "./pages/addingredients";
import ExpireTable from "./pages/expiringItems";
import Joinwithus from "./pages/joinwithus";
import NgoDetails from "./pages/ngodetails";
import StatusTable from "./pages/statusTable";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Addingredients /> */}
      <NgoDetails />
      {/* <Joinwithus /> */}
      {/* <StatusTable /> */}
      {/* <ExpireTable /> */}
    </div>
  );
};

export default App;
