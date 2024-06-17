import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  function menuNavigate() {
    navigate("/Menu");
  }
  function homeNavigate() {
    navigate("/");
  }
  function locationNavigate() {
    navigate("/Location");
  }
  function aboutUsNavigate() {
    navigate("/AboutUs");
  }
  function homeNavigate() {
    navigate("/");
  }

  return (
    <div className="bg-peach p-4 flex justify-center space-x-4">
      <button className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
      onClick={homeNavigate}>
        Home
      </button>
      <button
        className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
        onClick={menuNavigate}
      >
        Menu
      </button>
      <button className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
      onClick={locationNavigate}>
        Location
      </button>
      <button className="bg-peach hover:bg-white text-black font-bold py-2 px-4 rounded"
      onClick={aboutUsNavigate}>
        About Us
      </button>
    </div>
  );
}
