import React, { useState } from 'react';
import axios from 'axios';

const Host = () => {
  const [car, setCar] = useState({
    name: '',
    brand: '',
    model: '',
    year: '',
    location: '',
    pricePerDay: '',
    seats: '',
    fuelType: '',
    transmission: '',
    image: null,
  });

  const [error, setError] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCar({ ...car, image: reader.result.split(',')[1] }); // Extract base64 string
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file); // Read the image as base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!car.name || !car.brand || !car.model || !car.year || !car.location || !car.pricePerDay || !car.seats || !car.fuelType || !car.transmission || !car.image) {
      setError('All fields are required!');
      return;
    }

    const carData = {
      name: car.name,
      brand: car.brand,
      model: car.model,
      year: car.year,
      location: car.location,
      pricePerDay: car.pricePerDay,
      seats: car.seats,
      fuelType: car.fuelType,
      transmission: car.transmission,
      image: car.image,
    };

    try {
      await axios.post('/api/cars', carData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Reset the form and show success message
      setCar({
        name: '',
        brand: '',
        model: '',
        year: '',
        location: '',
        pricePerDay: '',
        seats: '',
        fuelType: '',
        transmission: '',
        image: null,
      });
      setPreviewImage(null);
      alert('Car added successfully!');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while adding the car.');
    }
  };

  return (
    <div className="container">
      <h2>Host Your Car</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Car Name</label>
          <input
            type="text"
            name="name"
            value={car.name}
            onChange={handleChange}
            placeholder="Enter car name"
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            name="brand"
            value={car.brand}
            onChange={handleChange}
            placeholder="Enter car brand"
          />
        </div>

        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={car.model}
            onChange={handleChange}
            placeholder="Enter car model"
          />
        </div>

        <div className="form-group">
          <label>Year</label>
          <input
            type="number"
            name="year"
            value={car.year}
            onChange={handleChange}
            placeholder="Enter car year"
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={car.location}
            onChange={handleChange}
            placeholder="Enter car location"
          />
        </div>

        <div className="form-group">
          <label>Price per Day</label>
          <input
            type="number"
            name="pricePerDay"
            value={car.pricePerDay}
            onChange={handleChange}
            placeholder="Enter price per day"
          />
        </div>

        <div className="form-group">
          <label>Seats</label>
          <input
            type="number"
            name="seats"
            value={car.seats}
            onChange={handleChange}
            placeholder="Enter number of seats"
          />
        </div>

        <div className="form-group">
          <label>Fuel Type</label>
          <input
            type="text"
            name="fuelType"
            value={car.fuelType}
            onChange={handleChange}
            placeholder="Enter fuel type"
          />
        </div>

        <div className="form-group">
          <label>Transmission</label>
          <input
            type="text"
            name="transmission"
            value={car.transmission}
            onChange={handleChange}
            placeholder="Enter transmission type"
          />
        </div>

        <div className="form-group">
          <label>Upload Car Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          {previewImage && <img src={previewImage} alt="Car Preview" />}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Host;
