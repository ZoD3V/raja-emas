"use client";
import React from "react";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";
import Image from "next/image";
import { contacts } from "@/data/customerService";
import { FiMessageCircle } from "react-icons/fi";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Chat Button */}
      <div
        className="float flex items-center justify-center cursor-pointer"
        onClick={() => togglePopup()}
      >
        {isOpen ? (
          <HiOutlineXMark className="text-white" aria-hidden="true" />
        ) : (
          <BsWhatsapp className="fa fa-whatsapp my-float" aria-hidden="true" />
        )}
      </div>
      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-72 bg-white rounded-lg shadow-lg z-50">
          <div className="flex justify-between items-center mb-2 bg-green-500 p-3 rounded-t-lg">
            <div className="flex mr-2">
              <Image
                src="/images/customer-service/cs_rajaemas_baru.webp"
                alt=""
                width={100}
                height={100}
              />
            </div>

            <h3 className="font-extrabold text-white text-right">
              Customer Service
            </h3>
            {/* <button onClick={() => togglePopup()} className="text-white">
              <HiOutlineXMark />
            </button> */}
          </div>
          <div className="h-72 overflow-y-auto px-2 flex flex-col gap-2 mb-2">
            {contacts.map((item, index) => (
              <a
                className="bg-gray-100 rounded-lg p-3 flex items-start gap-2 hover:border-l-2 hover:border-green-500 transition-all duration-300"
                key={index}
                href={item.linkWhatsapp}
              >
                <Image
                  className="border-2 rounded-full h-10 w-10"
                  src={item.image}
                  alt=""
                  width={25}
                  height={25}
                />
                <div className="flex flex-col items-start w-full">
                  <p className="text-sm font-bold">{item.heading}</p>
                  <p className="text-xs font-medium">{item.subHeading}</p>
                  <p className="text-xs py-[2px] px-2 bg-green-500 rounded-full text-white mt-1">
                    Online
                  </p>

                  <div className="text-xs py-[2px] px-2 bg-green-500 rounded-full text-white mt-1 self-end flex items-center gap-1">
                    <FiMessageCircle />
                    Mulai Chat
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
