import React, { useState, useEffect } from "react";
import Headerclone from "./headerclone";
import axios from "axios";

const StatusTable = () => {
  //map function
  //map items to table
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/ingredient");
      setItems(result.data);
    };
    fetchData();
  }, []);

  //   const [items, setItems] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios.get("http://localhost:8080/ingredient");
  //       setItems(response.data);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div class=" flex justify-center items-center overflow-x-auto relative">
          <table class="w-half text-sm text-left text-gray-500 dark:text-gray-400 bg-opacity-10 mt-11 ">
            <thead class="text-l text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Ingredient name
                </th>
                <th scope="col" class="py-3 px-6">
                  Category
                </th>
                <th scope="col" class="py-3 px-6">
                  Purchase Date
                </th>
                <th scope="col" class="py-3 px-6">
                  Expected Exp. Date
                </th>
                <th scope="col" class="py-3 px-6">
                  Quantity
                </th>
                <th scope="col" class="py-3 px-6">
                  Unit Price
                </th>
              </tr>
            </thead>
            <tbody>
              {/* hightlight the row if the exp date is less than 3 days */}

              {items.map((item) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                    {item.name}
                  </td>
                  <td class="py-4 px-6">{item.category}</td>
                  <td class="py-4 px-6 "> {item.purchaseDate}</td>
                  <td class="py-4 px-6">{item.expiryDate}</td>
                  <td class="py-4 px-6">{item.quantity}</td>
                  <td class="py-4 px-6">{item.unitPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StatusTable;
