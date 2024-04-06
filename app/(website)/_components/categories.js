'use client'
import React from 'react';
import { FaCar, FaTruck, FaBus, FaMotorcycle, FaCaravan, FaPlane, FaShuttleVan } from "react-icons/fa";

const categories = [
  {
    label: 'Sedan',
    description: 'Comfortable and versatile',
    icon: <FaCar className="text-2xl" />,
  },
  {
    label: 'Truck',
    description: 'Powerful and reliable',
    icon: <FaTruck className="text-2xl" />,
  },
  {
    label: 'SUV',
    description: 'Spacious and adventurous',
    icon: <FaBus className="text-2xl" />,
  },
  {
    label: 'Van',
    description: 'Roomy and practical',
    icon: <FaShuttleVan className="text-2xl" />,
  },
  {
    label: 'Luxury',
    description: 'Elegant and prestigious',
    icon: <FaCaravan className="text-2xl" />,
  },
  {
    label: 'Sports',
    description: 'Sleek and exhilarating',
    icon: <FaMotorcycle className="text-2xl" />,
  },
];

const Categories = () => {
  return (
    <div className="
    pt-4
    flex 
    flex-row 
    items-center 
    justify-around
    overflow-x-auto
    max-w-screen-lg
    mx-auto
    ">
      {categories.map((category, index) => (
        <div key={index} className="
        flex 
        flex-col 
        items-center 
        justify-center 
        hover:text-neutral-800
        transition
        cursor-pointer
        ">
          <div className="flex items-center justify-center mb-2 text-gray-500">
            {category.icon}
          </div>
          <h3 className="font-medium text-sm">{category.label}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;
