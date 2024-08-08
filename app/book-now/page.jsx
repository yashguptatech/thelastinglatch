"use client";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { contact } from "@/constants";
const EngageWithUs = () => {
  async function onSubmitHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://23.21.208.224/api/v1/payments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ social_media_handle: "testing", sku_id: "6470173b-c2bd-49a3-b60e-1ba6155ca0e6" }),
      });
      const redirectResp = await response.json();
      console.log(redirectResp);
      if (redirectResp?.checkout_url) {
        window.open(redirectResp?.checkout_url, "_parent");
      } else {
        alert('Something went wrong. Please contact administrator.')
      }
    } catch (e) {
      alert('Something went wrong. Please contact administrator.')
    }
  }
  return (
    <>
      <div className="w-full px-5 lg:px-10 py-10">
        <TransitionEffect />
        <div className="flex flex-col items-center justify-center gap-3 ml-auto pr-6">
          <h3>Book Hours</h3>
          {/* <p>Let&apos;s have a chat</p> */}
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 ">
            <form onSubmit={onSubmitHandler} className="flex flex-col gap-6 items-center ml-auto pr-20 ml-auto pr-8 absolute left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col gap-3 items-center w-full">
                <label htmlFor="name" className="text-center ml-auto pr-10 absolute left-1/2 transform -translate-x-1/2 w-full">Add Hours</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter amount here"
                  className="border p-2 w-full mt-8 border-secondary ring-current bg-transparent rounded-lg p-3 w-full ml-auto pr-20"
                />
              </div>

              {/* <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border border-secondary bg-transparent rounded-lg p-3"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="tel">Phone Number</label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="border border-secondary bg-transparent rounded-lg p-3"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  typeof="text"
                  className="border border-secondary  bg-transparent rounded-lg p-3 h-32  resize-none "
                />
              </div> */}
              <div className="w-full flex justify-center">
                <button className="bg-secondary py-3 px-6 text-background rounded-lg border border-secondary hover:text-heading duration-300 ease-out hover:bg-background">
                  Buy Now
                </button>
              </div>
            </form>

            <div className="flex flex-col-reverse  gap-2  ">
              {contact.map((list, index) => (
                <div
                  key={index}
                  className="flex z-10 flex-col mx-auto w-[250px]  shadow-secondary shadow-inner bg-blend-saturation  items-center gap-3 border border-secondary rounded-lg p-6"
                >
                  <p className="text-4xl text-secondary">{list.icon}</p>
                  <p className="text-xl font-bold">{list.label}</p>
                  <p className="text-xl font-bold">{list.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngageWithUs;
