import React, { useState, useEffect } from "react";
import Footer from "../components/footer";
import Headerclone from "./headerclone";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Addingredients = () => {
  const [name, setName] = useState("");
  const [unitPrice, setUnitPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [purchaseDate, setpurchaseDate] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [category, setCategory] = useState("");

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = {
      name,
      unitPrice,
      quantity,
      purchaseDate,
      expiryDate,
      category,
    };
    //try catch block
    try {
      const response = await axios
        .post("http://localhost:8080/ingredient", data)
        .then((response) => {
          enqueueSnackbar("Ingredient added successfully", {
            variant: "success",
          });
        });
      navigate("/statustable");
    } catch (error) {
      enqueueSnackbar("Error occured", {
        variant: "error",
      });
    }
  };

  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div className="flex flex-col items-center justify-center m-10 bg-trasparent  max-w-full ">
          <form className="max-w-screen-lg w-full m-8 sticky">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="noi"
                >
                  Name of Item
                </label>
              </div>
              <div className="w-1/2">
                <input
                  className="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  placeholder="Name of the ingredient"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="quantity"
                >
                  Quantity of Item :
                </label>
              </div>
              <div className="w-1/2">
                <input
                  className="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="quantity"
                  type="weight"
                  placeholder="(In kgs)"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="category"
                >
                  Category of Item :
                </label>
              </div>
              <div className="w-1/2">
                <select
                  className="block appearance-none w-full border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Fruits</option>
                  <option>Dairy Products</option>
                  <option>Eggs / Breads</option>
                  <option>Hearbs And Spices</option>
                  <option>Rice / Wheat</option>
                  <option>Pulses</option>
                  <option>Grains And Nuts</option>
                  <option>Meat And Fish</option>
                  <option>Fat And Oil</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="purchaseDate"
                >
                  Date of purchase :
                </label>
              </div>
              <div className="w-1/2">
                <input
                  className="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="purchaseDate"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  onChange={(e) => setpurchaseDate(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="expiryDate"
                >
                  Expected Expiry Date :
                </label>
              </div>
              <div className="w-1/2">
                <input
                  className="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="expiryDate"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  onChange={(e) => setexpiryDate(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="unitprice"
                >
                  Unit price :
                </label>
              </div>
              <div className="w-1/2">
                <input
                  className="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="unitprice"
                  type="price"
                  placeholder="Per Unit Prize"
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-700 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Send me Copy of details </span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handleSubmit}
                >
                  Add Item
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white justify-end align-baseline mt-40 h-30">
          <Footer />
        </div>{" "}
      </div>
    </div>
  );
};
export default Addingredients;
