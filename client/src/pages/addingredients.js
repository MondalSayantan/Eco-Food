import React from "react";
import Footer from "../components/footer";
import Headerclone from "./headerclone";

const Addingredients = () => {
  return (
    <div>
      <Headerclone />
      <div className="bg">
        <div className="flex flex-col items-center justify-center m-10 bg-trasparent  max-w-full ">
          <form class="max-w-screen-lg w-full m-8 sticky">
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="noi"
                >
                  Name of Item
                </label>
              </div>
              <div class="w-1/2">
                <input
                  class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="noi"
                  type="text"
                  placeholder="Name of the ingerdient"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Quantity of Item :
                </label>
              </div>
              <div class="w-1/2">
                <input
                  class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-password"
                  type="weight"
                  placeholder="(In kgs)"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Category of Item :
                </label>
              </div>
              <div class="w-1/2">
                <select
                  class="block appearance-none w-full border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Friuts</option>
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
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="dateofpurchase"
                >
                  Date of purchase :
                </label>
              </div>
              <div class="w-1/2">
                <input
                  class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="dateofpurchase"
                  type="date"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="dateofpurchase"
                >
                  Expected Expiry Date :
                </label>
              </div>
              <div class="w-1/2">
                <input
                  class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="dateofexpire"
                  type="date"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3">
                <label
                  class="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="unitprice"
                >
                  Unit price :
                </label>
              </div>
              <div class="w-1/2">
                <input
                  class="bg-white appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="unitprice"
                  type="price"
                  placeholder="Per Unit Prize"
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3"></div>
              <label class="md:w-2/3 block text-gray-700 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">Send me Copy of details </span>
              </label>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button
                  class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Add Item
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="bg-white justify-end align-baseline mt-40 h-30">
          <Footer />
        </div>{" "}
      </div>
    </div>
  );
};
export default Addingredients;
