import React, { useState } from "react";
import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import he from "he";
import Form from "./Form";
import Header from "./Bootstrap/Header";
import Split from "react-split";
import Code from "./Code";
import Preview from "./Preview";
import { Link, useNavigate } from "react-router-dom";

const PortfolioCard = () => {
  const Navigate = useNavigate();

  const data = {
    Dark: true,
    FormData: {
      FirstName: "",
      LastName: "",
      Thubmnail: "",
      URL: "",
      Description: "",
      Keywords: "",
      Address: "",
      Phone: "",
      Email: "",
      Colour: "#5538BC",
      Socials: {
        Facebook: "xyz",
        WhatsApp: "xyz",
        Instagram: "xyz",
        Twitter: "xyz",
        LinkedIn: "xyz",
        GitHub: "xyz",
        StackOverflow: "xyz",
      },
    },
    fileDownloadUrl: null,
    PreviewMode: false,
  };
  const [initialState, setInitialState] = useState(data);
  const toggleHeader = () => {
    setInitialState((prevState) => {
      return {
        ...prevState,
        Dark: !initialState.Dark,
      };
    });
  };

  const handleChange = (e) => {
    setInitialState((prevState) => {
      return {
        ...prevState,
        FormData: {
          ...initialState.FormData,
          [e.target.name]: e.target.value,
        },
        PreviewMode: false,
      };
    });
  };

  const clickHandler = async () => {
    Navigate("/main");
  };

  const download = async () => {
    try {
      let output = he.decode(
        document.getElementsByClassName("codefile")[0].innerHTML
      );
      const blob = new Blob([output]);
      const fileDownloadUrl2 = URL.createObjectURL(blob);

      setInitialState((prevState) => {
        return {
          ...prevState,
          fileDownloadUrl: fileDownloadUrl2,
        };
      });

      const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
      // Show a success toast and wait for it to close
      await toast.promise(resolveAfter3Sec, {
        pending: "Downloading...",
        success: "File downloaded successfully!",
        error: "An error occurred while downloading.",
        position: "top-right",
        autoClose: 3100, // Adjust the duration as needed
      });
    } catch (error) {
      // Handle any errors that occur during the download process
      console.error("Download error:", error);
    }
  };
  return (
    <div className="App w-full">
      <Header
        className={`bg-${
          initialState.Dark ? "white border-b-2" : "black"
        } text-${
          initialState.Dark ? "black" : "white"
        } flex justify-center h-12 items-center mb-8`}
      >
        <h1 className="text-2xl text-center inline mx-6 my-0">
          Portfolio Generator
        </h1>
        <button
          className={`btn btn-sm btn-outline-${
            initialState.Dark ? "primary" : "secondary"
          } rounded-full`}
          onClick={toggleHeader}
        >
          <i
            className={`fa fa-${
              initialState.Dark ? "sun" : "moon"
            }-o text-xl m-0`}
          ></i>
        </button>
      </Header>
      <Link
        className="pl-4 text-xl font-medium text-blue-500 cursor-pointer"
        to={"/"}
      >
        Home
      </Link>
      <div className="container pl-12 my-4">
        <div className="flex flex-row">
          <div className="p-3 w-1/2">
            <Form
              FormData={{
                FullName: `${initialState.FormData.FirstName} ${initialState.FormData.LastName}`,
                ...initialState.FormData,
              }}
              onChange={handleChange}
            />
            <a
              className="text-xl cursor-pointer"
              download={"portfolio.html"}
              href={initialState.fileDownloadUrl}
            >
              <button
                className={`btn btn-${
                  initialState.Dark ? "success" : "primary"
                } bg-green-700 text-white mx-2 p-3`}
                onClick={() => {
                  download();
                }}
                download={"portfolio.html"}
                href={initialState.fileDownloadUrl}
                disabled={initialState.PreviewMode}
                title="Go to the Code View to download."
              >
                Download
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme= {initialState.Dark ? "dark" : "light"}
              />
            </a>
          </div>
          <div className="p-3 w-1/2">
            <ul className="flex">
              <li className="mr-2">
                <span
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${
                    !initialState.PreviewMode
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setInitialState((prevState) => {
                      return {
                        ...prevState,
                        PreviewMode: false,
                      };
                    });
                  }}
                >
                  Code
                </span>
              </li>
              <li>
                <span
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${
                    initialState.PreviewMode
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setInitialState((prevState) => {
                      return {
                        ...prevState,
                        PreviewMode: true,
                      };
                    });
                  }}
                >
                  Preview
                </span>
              </li>
            </ul>
            {initialState.PreviewMode ? (
              <Preview
                {...initialState.FormData}
                FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
              />
            ) : (
              <Code
                {...initialState.FormData}
                FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;
