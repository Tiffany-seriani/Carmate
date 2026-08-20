

"use client";

import { useState } from "react";

function AddCar() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="add-car-page">
      <div className="add-car-card">
        <div className="add-car-header">
          
          <h1>Add Your Car</h1>
        </div>

        <form className="car-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="make">Make</label>
              <input
                type="text"
                id="make"
                placeholder="e.g. Toyota"
              />
            </div>

            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                id="model"
                placeholder="e.g. Corolla"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="number"
                id="year"
                placeholder="e.g. 2022"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mileage">Mileage</label>
              <input
                type="number"
                id="mileage"
                placeholder="e.g. 45000"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="plate">License Plate</label>
            <input
              type="text"
              id="plate"
              placeholder="e.g. KDA 123A"
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Car Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {image && (
            <div className="image-preview">
              <img src={image} alt="Car preview" />
            </div>
          )}

          <button type="submit" className="add-car-button">
            Add My Car
          </button>
        </form>
      </div>
    </main>
  );
}
export default AddCar