import React, { useState } from "react";
import API from "../api/axios";
import { useDispatch } from "react-redux";
import { setAddresses } from "../store/UserSlice";

function AddressForm({ onClose }) {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const address = {
        name,
        area,
        pin,
        city,
        state,
      };

      const response = await API.post("/users/profile/address", address);
      console.log("Address added:", response.data);
      dispatch(setAddresses(response.data.addresses));

      alert("Address added successfully!");

      setName("");
      setArea("");
      setPin("");
      setCity("");
      setState("");

      onClose();
    } catch (error) {
      console.error(
        "Address adding failed:",
        error.response?.data?.message || error.message,
      );

      alert(error.response?.data?.message || "Failed to add address!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full h-auto py-4 bg-main-bg text-main-text rounded-xl shadow shadow-gray-600">
      <h2 className="text-center text-xl font-semibold">Add New Address</h2>

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
          placeholder="Add your City..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <input
          type="text"
          className="w-3/4 py-2 px-3 rounded bg-gray-200 dark:bg-gray-600 mb-3 border-gray-400 border"
          placeholder="Add your State..."
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />

        <input
          type="text"
          maxLength={6}
          pattern="[0-9]{6}"
          className="w-3/4 py-2 px-3 rounded bg-gray-200 dark:bg-gray-600 mb-3 border-gray-400 border"
          placeholder="Add your PIN code..."
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="py-2 px-3 bg-blue-600 text-white rounded block hover:bg-blue-700 active:bg-blue-500 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddressForm;
