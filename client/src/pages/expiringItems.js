import React, { useState, useEffect } from "react";
import Headerclone from "./headerclone";
import axios from "axios";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const ExpireTable = () => {
  //map function
  //map items to table
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/ingredient/expire");
      setItems(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div className=" flex justify-center items-center overflow-x-auto relative ">
          <table className="w-half text-sm text-left text-gray-500 dark:text-gray-400 bg-opacity-10 mt-11">
            <thead className="text-l text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Ingredient name
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Purchase Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Expected Exp. Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Quantity
                </th>
                <th scope="col" className="py-3 px-6">
                  Unit Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Donate
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
                  <td className="py-4 px-6">{item.category}</td>
                  <td className="py-4 px-6 "> {item.purchaseDate}</td>
                  <td className="py-4 px-6">{item.expiryDate}</td>
                  <td className="py-4 px-6">{item.quantity}</td>
                  <td className="py-4 px-6">{item.unitPrice}</td>
                  <td className="py-4 px-6 text-center">
                    <Link to="/ngodetails">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Donate
                      </button>
                    </Link>
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

export default ExpireTable;
