import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/car-details/${car._id}`);
        scrollTo(0, 0);
      }}
      className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer"
    >
      {/* ! IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt="car image"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {car.isAvaliable && (
          <p className="absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5  py-1 rounded-full">
            Available Now
          </p>
        )}
        {/* ! */}
        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg">
          <span className="font-semibold">
            {currency}
            {car.pricePerDay}
          </span>
          <span className="text-sm text-white/80"> / day</span>
        </div>
      </div>
      {/* ! Details */}
      <div className="p-4 sm:p-5">
        {/* ! CARS NAME MODEL */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium">
            {car.brand} {car.model}
          </h3>
          <p className="text-muted-foreground text-sm">
            {car.category} . {car.year}
          </p>
        </div>
        {/* !Car More Details */}
        <div className="mt-4 grid grid-cols-2 gap-y-2 text-gray-600">
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.users_icon} className="h-4 mr-2" />
            <span>{car.seating_capacity} Seats</span>
          </div>
          {/* ! FUEL ICON */}
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.fuel_icon} className="h-4 mr-2" />
            <span>{car.fuel_icon} Seats</span>
          </div>
          {/* ! CAR ICON */}
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.carIcon} className="h-4 mr-2" />
            <span>{car.transmission} Seats</span>
          </div>
          {/* ! CAR Location */}
          <div className="flex items-center text-sm text-muted-foreground">
            <img src={assets.location_icon} className="h-4 mr-2" />
            <span>{car.location} Seats</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
