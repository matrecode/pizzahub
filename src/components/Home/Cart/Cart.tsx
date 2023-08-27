/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card = () => {
    return (
        <>
        <div className="bg-white">
          <div className=" flex">
            <div className="flex gap-2">
              <div className="mt-[0.4rem] max-w-[25%]">
                <img
                  src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=550"
                  className="object-cover w-[100%] h-auto"
                  alt="pizza"
                />
              </div>
              <div className="flex flex-col">
                <p className="basis-auto text-[1rem] font-bold">
                  Tandoori Paneer
                </p>
                <p className="basis-auto text-xs text-[#7a7a7ade] mt-2 overflow-hidden">
                  Spiced paneeer, Onion,Green Capsicum & Red Paprika in Tandoori
                  Sauce Spiced paneee
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between my-6">
            <div className="flex items-center justify-center">
              <button className="border  rounded text-black w-[25px] h-[25px] flex justify-center items-center text-center ">
                -
              </button>
              <span className="border text-sm flex justify-center items-center w-[25px] h-[25px] text-center">
                1
              </span>
              <button className="border w-[25px] rounded text-black h-[25px] flex justify-center items-center text-center ">
                +
              </button>
            </div>
            <div>
              <span className="basis-auto text-[1rem] font-bold">$80.00</span>
            </div>
          </div>
        </div>
        <hr className="my-2"/>
        </>
    )
}

const Cart = () => {
  return (
    <div className="flex flex-col w-[375px] bg-white h-[600px] relative top-6 shadow-md border-t-4 rounded-lg border-green-500" >
      <div className="flex flex-col p-[0.8rem] h-[525px] overflow-x-hidden overflow-y-scroll ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      
      <div className="p-[0.8rem] flex absolute bottom-0 w-[375px] shadow-md bg-red-100 h-[75px]">
        Hwwlo
      </div>
    </div>
  );
};

export default Cart;
{
  /*
   */
}
