import React, { useState, useEffect } from "react";
import Headerclone from "./headerclone";
import axios from "axios";
import Footer from "../components/footer";
import ExpireTable from "./expiringItems";
const { ItemContext } = require("../ItemContext");

const NgoDetails = () => {
  const [items, setItems] = useState([]);
  const { itemName } = React.useContext(ItemContext);
  const [itemName1, setItemName] = itemName;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/ngo");
      setItems(result.data);
    };
    fetchData();
  }, []);
  //alert message function
  function alertMessage() {
    alert(itemName1 + "Thank you for your donation");
  }

  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div className=" flex justify-center items-center overflow-x-auto relative rounded-lg">
          <table className="w-half text-sm text-left text-gray-500 dark:text-gray-400 bg-opacity-10 mt-11 rounded-lg">
            <thead className="text-l text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 rounded-xl">
              <tr className="bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="col" className="py-3 px-6">
                  Name of Item
                </th>
                <th scope="col" className="py-3 px-6">
                  category
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-3 px-6">{itemName1}</td>
                <td className="py-3 px-6">Donating Food</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=" flex justify-center items-center overflow-x-auto relative">
          <table className="w-half text-sm text-left text-gray-500 dark:text-gray-400  mt-11 ">
            <thead class="text-l text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name of NGO
                </th>
                <th scope="col" className="py-3 px-6">
                  Address
                </th>
                <th scope="col" className="py-3 px-6">
                  Contact Number
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Select NGO
                </th>
              </tr>
            </thead>
            <tbody>
              {/* hightlight the row if the exp date is less than 3 days */}

              {items.map((item) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    {item.name}
                  </td>

                  <td className="py-4 px-6 ">{item.address}</td>
                  <td className="py-4 px-6">{item.mobile}</td>
                  <td className="py-4 px-6">{item.email}</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={alertMessage}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NgoDetails;
