import React, { useState } from 'react';

const Host = () => {
  const [car, setCar] = useState({
    name: '',
    nameOnRC: '',
    brand: '',
    model: '',
    year: '',
    available: true,
    pricePerDay: '',
    seats: '',
    fuelType: '',
    transmission: '',
    image: null, // Change from array to single image
    availableDates: { from: '', to: '' },
    location: '', // New field for location
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file only
    if (file) {
      setCar({ ...car, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Car Data Submitted:', car);
    // Submit data logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark p-12">
      <div className="bg-white p-8 shadow-md w-full max-w-3xl h-screen lg:h-auto overflow-y-auto lg:overflow-visible">
        <h2 className="text-3xl font-bold mb-8">Car Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Car Name */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">CAR NAME</label>
            <input
              type="text"
              name="name"
              value={car.name}
              onChange={handleChange}
              placeholder="Enter car name"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Name on RC */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">NAME ON RC</label>
            <input
              type="text"
              name="nameOnRC"
              value={car.nameOnRC}
              onChange={handleChange}
              placeholder="Enter name on RC"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">BRAND</label>
            <input
              type="text"
              name="brand"
              value={car.brand}
              onChange={handleChange}
              placeholder="Enter car brand"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Model */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">MODEL</label>
            <input
              type="text"
              name="model"
              value={car.model}
              onChange={handleChange}
              placeholder="Enter car model"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">YEAR</label>
            <input
              type="number"
              name="year"
              value={car.year}
              onChange={handleChange}
              placeholder="Enter manufacturing year"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* License Plate */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">LOCATION</label>
            <input
              type="text"
              name="location"
              value={car.location}
              onChange={handleChange}
              placeholder="Enter car location"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price Per Day */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">PRICE PER DAY</label>
            <input
              type="number"
              name="pricePerDay"
              value={car.pricePerDay}
              onChange={handleChange}
              placeholder="Enter price per day"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Seats */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">SEATS</label>
            <input
              type="number"
              name="seats"
              value={car.seats}
              onChange={handleChange}
              placeholder="Enter number of seats"
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">FUEL TYPE</label>
            <select
              name="fuelType"
              value={car.fuelType}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select fuel type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-gray-600 my-2 font-semibold">TRANSMISSION</label>
            <select
              name="transmission"
              value={car.transmission}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          {/* Car Image */}
          <div className="lg:col-span-2">
            <label className="block text-gray-600 my-2 font-semibold">CAR IMAGE</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 rounded-3xl border bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {car.image && <p className="text-gray-600 mt-2">Image selected: {car.image.name}</p>}
          </div>
        

      
          {/* Submit Button */}
          <div className="lg:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Host;