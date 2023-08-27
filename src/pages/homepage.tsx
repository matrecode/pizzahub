import Heading from "@/components/Home/Heading/Heading";
import ItemCard from "@/components/Home/ItemCard/ItemCard";
import React from "react";
import { pizzadata } from "@/utils/Data";
import Cart from "@/components/Home/Cart/Cart";

const Homepage = () => {
  const maxLength = 65;
  const desc = pizzadata.map((item) => {
    if (item.description.length > maxLength) {
      return item.description.substring(0, maxLength) + "...";
    }
    return item.description;
  });

  return (
    <header className="max-w-container mx-auto">
      <div className="flex m-auto overflow-auto p-1 gap-3">
        <div className="flex flex-col max-w-[1000px]">
          <Heading heading="bestsellers" />
          <div className="flex flex-wrap gap-5">
            {pizzadata.map((pizza, index) => (
              <ItemCard
                key={pizza.name}
                name={pizza.name}
                img={pizza.img}
                description={desc[index]}
                category={pizza.veg}
                price={pizza.price}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 fixed right-0 m-14">
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Homepage;
