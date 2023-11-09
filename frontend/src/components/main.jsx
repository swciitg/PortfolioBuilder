import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import { useSearchParams } from "react-router-dom";
import Card from "./navigateCard";
import PortfolioDashboard from "./PortfolioDashboard";

const HomePage = () => {
  const { getToken, logOut, studInfo, setStudInfo } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const Navigate = useNavigate();

  const getItem = async () => {
    const code = searchParams.get("code");

    if (localStorage.getItem("studName") === null && code) await getToken(code);
  };

  const containerStyle = {
    display: "flex",
  };

  useEffect(() => {
    getItem();
    document.body.classList.add("disable-scrolling");
  }, []);

  setStudInfo({
    ...studInfo,
    name: localStorage.getItem("studName"),
    roll: localStorage.getItem("studRoll"),
    email: localStorage.getItem("studId"),
  });

  const clickHandler = async () => {
    Navigate("/portfolio");
  };

  const logOutHandler = async () => {
    localStorage.clear("studName", "studId", "studRoll", "studJob");
    await logOut();
  };

  return (
    <div>
      <div className="w-full">
        <div className="w-full h-48 bg-black text-white">
          <div className="text-end">
            <button
              className="bg-gray-700 text-white p-2 rounded-md hover:bg-gray-800 my-2 mr-5"
              onClick={logOutHandler}
            >
              Log Out
            </button>
          </div>
          <div className="p-2 m-4">
            <div className="text-3xl font-bold p-1">
              Welcome {studInfo.name} 👋
            </div>
            <div className="text-2xl font-semibold px-1 pt-1 pb-2">
              {studInfo.roll}
            </div>
          </div>
        </div>
        <div className="my-12 mx-12 ">
          <PortfolioDashboard />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
