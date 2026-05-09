import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../store/UserSlice";

function AddressForm({ onClose }) {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    const address = { name, area, pin, city, state };
    dispatch(addAddress(address));

    setName("");
    setArea("");
    setPin("");
    setCity("");
    setState("");
    onClose();
  };

  return (
    <div className="flex flex-col w-full h-auto py-4 bg-main-bg text-main-text rounded-xl shadow shadow-gray-600">
      <h2 className="text-center text-xl font-semibold ">Add New Address</h2>
      <form onSubmit={submitHandle} className="flex flex-col items-center py-2">
        <input
          type="text"
          className="w-3/4 py-2 px-3 rounded bg-gray-200 dark:bg-gray-600 my-3 border-gray-400 border"
          placeholder="Add your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-3/4 py-2 px-3 rounded bg-gray-200 dark:bg-gray-600 mb-3 border-gray-400 border"
          placeholder="Add your Area..."
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-3/4 py-2 px-3 rounded bg-gray-200 dark:bg-gray-600 mb-3 border-gray-400 border"
          placeholder="Add your city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-3/4 py-2 px-3 rounded bg-gray-200 dark:bg-gray-600 mb-3 border-gray-400 border"
          placeholder="Add your state..."
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <input
          type="number"
          className="w-3/4 py-2 px-3 rounded bg-gray-200 dark:bg-gray-600 mb-3 border-gray-400 border"
          placeholder="Add your pin..."
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />
        <button
          type="submit"
          className="py-2 px-3 bg-blue-600 text-gray-800 rounded block hover:bg-blue-700 active:bg-blue-500 "
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
