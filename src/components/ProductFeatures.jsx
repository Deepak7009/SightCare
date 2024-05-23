import React from "react";
import organicIngredients from "../images/organic-ingredients.svg";
import noChemicals from "../images/no-chemicals.svg";
import glutenFree from "../images/gluten-free.svg";
import gmoFree from "../images/gmo-free.svg";
import bpaFree from "../images/chemicals.svg";

const ProductFeatures = () => {
  const features = [
    {
      src: organicIngredients,
      alt: "Organic Ingredients",
      label: "Organic Ingredients",
    },
    {
      src: noChemicals,
      alt: "No Added Chemicals",
      label: "No Added Chemicals",
    },
    { src: glutenFree, alt: "Gluten Free", label: "Gluten Free" },
    { src: gmoFree, alt: "GMO Free", label: "GMO Free" },
    { src: bpaFree, alt: "BPA Free", label: "BPA Free" },
  ];

  return (
    <section className="product-is-features px-4 my-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-primary text-center grid grid-cols-[1fr,auto,1fr] gap-4 items-center before:h-0.5 before:w-full before:bg-primary/25 after:h-0.5 after:w-full after:bg-primary/25">
        <span>SightCare Is</span>
      </h1>
      <ul className="flex flex-wrap md:flex-nowrap justify-center my-12 gap-5 md:gap-4">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-lg max-w-[200px] min-w-[150px] text-center flex flex-col flex-auto basis-1/3 md:basis-1/5 items-center text-primary"
          >
            <img
              className="w-12 h-12"
              src={feature.src}
              alt={feature.alt}
              width="48"
              height="48"
            />
            <b className="leading-tight mt-4 text-primary-dark">
              {feature.label}
            </b>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductFeatures;
