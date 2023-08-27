/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./ItemCard.module.css";

interface ItemCardProp {
  img: string;
  price: number;
  name: string;
  description: string;
  category: boolean;
}

const ItemCard = (props: ItemCardProp) => {
  return (

    <div className="max-w-[313px] rounded-md bg-white shadow-md">
      <div className="w-[100%] rounded-md">
        <div className="min-w-[0] h-[11.5rem] relative overflow-hidden ">
          <img src={props.img} className=" object-contain" alt={props.name} />
        </div>
      </div>
      <div className=" m-[0.8rem] ">
        <div className="flex flex-col h-[6rem] border-b-[0.025rem] border-[#7a7a7ade]">
          <div className="flex gap-2">
            <span className="basis-auto text-[1rem] font-bold">
              {props.name}{" "}
            </span>
            <span
              className={
                props.category ? styles.categoryVeg : styles.categoryNonVeg 
              }
            ></span>
          </div>
          <span className="basis-auto text-xs text-[#7a7a7ade] mt-2 w-[90%] overflow-hidden">
            {props.description}
          </span>
        </div>
        <div className="flex justify-between flex-row mt-3 relative">
          <span className="basis-auto text-[1rem] font-bold">
              ${props.price}.00
            </span>
          <button className="cursor-pointer py-[0.1rem] px-[0.433rem] border border-green-500 text-green-500 bg-white">
            <span className=" text-[0.68rem] font-semibold">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
