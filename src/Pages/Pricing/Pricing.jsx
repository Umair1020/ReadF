import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

import { baseurl } from "../../utils/BaseUrl";
import axios from "axios";
const Pricing = () => {
  const redirectToCheckout = async (price) => {
    try {
      const response = await axios.post(`${baseurl}/api/payment`, { price });
      console.log(response);
      console.log(response.url);
      window.location.href = response.data.url; // Use the URL directly from the session object
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const width = window.innerWidth;
  // const stripePromise = loadStripe(
  //   "pk_test_51NcpwQHT6HOzobq3nlg0thBBlggxmUHCFrjiKkajWe8VOCoDXbWteL7bfw3Klo9ce1IFYqvi9zp0GYZ27kTJbIFk002AWkbjky"
  // );
  return (
    <div style={{ backgroundColor: "#eaeaea" }}>
      <Header />
      {width > 600 ? (
        <h1 className="text-5xl text-center flex gap-2 justify-center mb-6 font-serif">
          <span className=" sm:block line-through text-gray-400 text-5xl">
            Our pricing
          </span>{" "}
          Your productivity hack
        </h1>
      ) : (
        <h1 class="text-5xl text-center flex gap-2 justify-center mb-6 font-serif">
          <span class="hidden sm:block line-through text-gray-400 text-5xl">
            Our pricing
          </span>{" "}
          Your productivity hack
        </h1>
      )}

      {width > 600 ? (
        <div className="m-20">
          <div
            className=" mt-16 lg:block"
            style={{ backgroundColor: "#eaeaea" }}
          >
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-8 pr-4"></th>
                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-semibold text-gray-900">
                      {" "}
                      Hobby{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold">$0</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      Free forever
                    </p>
                  </th>
                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-semibold text-gray-900">
                      {" "}
                      Pro{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold">$10</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      /month
                    </p>
                  </th>
                  <th className="px-4 py-8 text-center bg-gray-900 rounded-t-xl">
                    <span className="px-4 py-2 text-base font-medium text-gray-900 bg-[#faf9f6] rounded-lg">
                      {" "}
                      ✨ Ultimate{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold text-white">$20</p>
                    <p className="mt-2 text-base font-normal text-gray-200">
                      /user/month
                    </p>
                  </th>
                  <th className="px-4 py-8 text-center">
                    <span className="text-base font-semibold text-gray-900">
                      {" "}
                      Enterprise{" "}
                    </span>
                    <p className="mt-6 text-4xl font-bold">$50</p>
                    <p className="mt-2 text-base font-normal text-gray-500">
                      /user/month
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    PDF upload limit
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    1
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    100
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    Unlimited
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Monthly questions limit
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    500
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    5,000
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    Unlimited
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    Unlimited
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    OCR support
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Chrome extension
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Chat with all PDFs
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Max file size
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    10MB
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    50MB
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    50MB
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    50MB
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    GPT-4 (paid add-on)
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    White-labeled PDF embed
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    API access
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <button className="border-b-2 border-dotted border-gray-600 cursor-pointer text-white">
                      Limited non-commercial use
                    </button>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    Commercial use (
                    <button className="border-b-2 border-dotted border-gray-400 text-gray-600 cursor-pointer">
                      pay as you go
                    </button>
                    )
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Invite team members
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    <svg
                      className="w-5 h-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium border-b border-gray-200">
                    Customer support
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    -
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    Email
                  </td>
                  <td className="px-4 py-4 text-center text-white bg-gray-900 border-b border-white/20">
                    Email &amp; Chat
                  </td>
                  <td className="px-4 py-4 text-center border-b border-gray-200">
                    Email &amp; Chat with priority
                  </td>
                </tr>
                <tr>
                  <td className="py-6 pr-4"></td>
                  <td className="px-4 py-6 text-center">
                    <Link
                      className="inline-flex items-center font-semibold text-gray-800 hover:text-gray-900 px-3 py-2 border border-gray-800 rounded-lg"
                      to="/login"
                      // onClick={()=>{redirectToCheckout('')}}
                    >
                      Get Started
                    </Link>
                  </td>
                  <td className="px-4 py-6 text-center">
                    <a
                      onClick={() => {
                        redirectToCheckout("10");
                      }}
                      className="inline-flex items-center font-semibold text-gray-800 hover:text-gray-900 px-3 py-2 border border-gray-800 rounded-lg"
                    >
                      10 Get Started
                    </a>
                  </td>
                  <td className="flex items-center">
                    <a
                      className="flex justify-center items-center font-semibold px-4 py-6 text-center text-white bg-[#FF612E] w-full rounded-b-xl"
                      onClick={() => {
                        redirectToCheckout("20");
                      }}
                    >
                      20 Get Started
                    </a>
                  </td>
                  <td className="px-4 py-6 text-center">
                    <button
                      onClick={() => {
                        redirectToCheckout("50");
                      }}
                      className="inline-flex items-center font-semibold text-gray-800 px-3 py-2 border border-gray-800 rounded-lg disabled:text-gray-500 disabled:animate-pulse"
                    >
                      50 Get Started
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div class="block mt-12 border-t border-b border-gray-200 divide-y divide-gray-200 lg:hidden">
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">
              <span class="text-sm font-medium text-blue-600"> Hobby </span>
              <p class="mt-2 text-xl font-bold">$0</p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Free forever{" "}
              </span>
            </div>
            <div class="px-2 py-2">
              <span class="text-sm font-medium text-blue-600"> Pro </span>
              <p class="mt-2 text-xl font-bold">
                $10{" "}
                <span class="mt-1 text-sm font-normal text-gray-500">
                  /month{" "}
                </span>
              </p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Billed annually
              </span>
            </div>
            <div class="px-2 py-2">
              <span class="text-sm font-medium text-blue-600"> Ultimate </span>
              <p class="mt-2 text-xl font-bold">
                $20{" "}
                <span class="mt-1 text-sm font-normal text-gray-500">
                  /user/month{" "}
                </span>
              </p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Billed annually
              </span>
            </div>
            <div class="px-2 py-2">
              <span class="text-sm font-medium text-blue-600">
                {" "}
                Enterprise{" "}
              </span>
              <p class="mt-2 text-xl font-bold">
                $50{" "}
                <span class="mt-1 text-sm font-normal text-gray-500">
                  /user/month{" "}
                </span>
              </p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Monthly only
              </span>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Monthly upload limit</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">1</div>
            <div class="px-2 py-2">100</div>
            <div class="px-2 py-2">Unlimited</div>
            <div class="px-2 py-2">Unlimited</div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Monthly questions limit</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">500</div>
            <div class="px-2 py-2">5,000</div>
            <div class="px-2 py-2">Unlimited</div>
            <div class="px-2 py-2">Unlimited</div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">OCR support</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Chrome extension</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Chat with all PDFs</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Max file size</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">10MB</div>
            <div class="px-2 py-2">50MB</div>
            <div class="px-2 py-2">50MB</div>
            <div class="px-2 py-2">50MB</div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">GPT-4 (paid add-on)</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">White-labeled PDF embed </p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">API access</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">
              <button class="border-b-2 border-dotted border-gray-400 cursor-pointer text-gray-900">
                Limited non-commercial use
              </button>
            </div>
            <div class="px-2 py-2">
              Commercial use{" "}
              <button class="border-b-2 border-dotted border-gray-400 text-gray-900 cursor-pointer">
                (pay as you go)
              </button>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Invite team members</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="px-2 py-2">
              <svg
                class="w-5 h-5 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div class="px-2 py-4 sm:px-4">
            <p class="font-semibold">Customer support</p>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-2 py-2">-</div>
            <div class="px-2 py-2">Email</div>
            <div class="px-2 py-2">Email &amp; Chat</div>
            <div class="px-2 py-2">Email &amp; Chat with priority</div>
          </div>
          <div class="grid grid-cols-4 text-center divide-x divide-gray-200">
            <div class="px-1 py-2 sm:px-4">
              <span class="text-sm font-medium text-blue-600"> Hobby </span>
              <p class="mt-2 text-xl font-bold">$0</p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Free forever{" "}
              </span>
              <Link
                class="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-gray-900 transition-all duration-200 bg-white border border-gray-900 rounded-md hover:bg-gray-100"
                role="button"
                to="/login"
              >
                {" "}
                Get Started{" "}
              </Link>
            </div>
            <div class="px-1 py-2 sm:px-4">
              <span class="text-sm font-medium text-blue-600"> Pro </span>
              <p class="mt-2 text-xl font-bold">
                $10{" "}
                <span class="mt-1 text-sm font-normal text-gray-500">
                  /month{" "}
                </span>
              </p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Billed annually
              </span>
              <a
                class="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-gray-900 transition-all duration-200 bg-white border border-gray-900 rounded-md hover:bg-gray-100"
                role="button"
                onClick={() => {
                  redirectToCheckout("10");
                }}
              >
                {" "}
                Get Started{" "}
              </a>
            </div>
            <div class="px-1 py-2 sm:px-4">
              <span class="text-sm font-medium text-blue-600"> Ultimate </span>
              <p class="mt-2 text-xl font-bold">
                $20{" "}
                <span class="mt-1 text-sm font-normal text-gray-500">
                  /user/month{" "}
                </span>
              </p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Billed annually
              </span>
              <a
                class="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-white transition-all duration-200 bg-[#FF612E] border border-transparent rounded-md hover:bg-[#FF612E]/90"
                role="button"
                onClick={() => {
                  redirectToCheckout("20");
                }}
              >
                {" "}
                Get Started{" "}
              </a>
            </div>
            <div class="px-1 pt-2 pb-4 sm:px-4">
              <span class="text-sm font-medium text-blue-600">
                {" "}
                Enterprise{" "}
              </span>
              <p class="mt-2 text-xl font-bold">
                $50{" "}
                <span class="mt-1 text-sm font-normal text-gray-500">
                  /user/month{" "}
                </span>
              </p>
              <span class="mt-1 text-sm font-normal text-gray-500">
                Monthly only
              </span>
              <button
                onClick={() => {
                  redirectToCheckout("50");
                }}
                class="flex items-center justify-center w-full px-1 py-2 mt-5 text-xs text-gray-900 transition-all duration-200 bg-white border border-gray-900 rounded-md hover:bg-gray-100 disabled:text-gray-500 disabled:animate-pulse"
              >
                {" "}
                Get Started{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
