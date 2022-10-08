import React, { useState, useEffect } from "react";
import Headerclone from "./headerclone";
import axios from "axios";
import Footer from "../components/footer";
import ExpireTable from "./expiringItems";
import { useSnackbar } from "notistack";

const { ItemContext } = require("../ItemContext");

const NgoDetails = () => {
  const [items, setItems] = useState([]);
  const { itemName } = React.useContext(ItemContext);
  const [itemName1, setItemName] = itemName;
  const { enqueueSnackbar } = useSnackbar();

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
        <div className="flex justify-center items-center overflow-x-auto relative rounded-lg">
          <div class="p-6 max-w-sm bg-white rounded-xl border border-yellow-500 border-4 shadow-md dark:bg-gray-800 dark:border-gray-700  mt-10">
            <div className="flex justify-center items-center">
              <img
                src="https://i.postimg.cc/pLcBbR7h/7590103571642251930-128.png"
                alt="donate"
                height={60}
                width={60}
              />
            </div>

            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white uppercase flex justify-center items-center mt-4">
              {itemName1}
            </h5>

            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">
              Donating to the needy is a noble cause. It is a way of giving back
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center overflow-x-auto relative">
          <table className="w-half text-sm text-left text-gray-500 dark:text-gray-400  mt-11 ">
            <thead class="text-lg text-gray-800 uppercase bg-yellow-500 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name of NGO
                </th>
                <th scope="col" className="py-3 px-6">
                  Address
                </th>
                <th scope="col" className="py-3 px-6">
                  Contact
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
                      className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => {
                        try {
                          const res = axios.post(
                            "http://localhost:8080/email",
                            {
                              name: itemName1,
                              email: item.email,
                            }
                          );
                          enqueueSnackbar("Email sent successfully", {
                            variant: "success",
                          });
                        } catch (error) {
                          enqueueSnackbar("Email not sent", {
                            variant: "error",
                          });
                        }
                      }}
                    >
                      Select & Confirm
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
