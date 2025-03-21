import React, { useState } from "react";
import "./Packages.css";
import axios from "axios";

const TourPackageForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    location: "",
    duration: "",
    description: "",
    price: "",
    imageUrl: "", // This will hold the file object
    // activities: '',
    // includes: '',
    // notIncludes: '',
    // safety: '',
  });

  const [imagePreview, setImagePreview] = useState(null); // State for image preview

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image change for file upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Set image preview
      setFormData((prevData) => ({ ...prevData, imageUrl: file })); // Store the file in formData
    } else {
      setImagePreview(null); // Clear preview if no file
    }
  };

  // Submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();

    // Append form fields and handle image file separately
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "imageUrl") {
        formDataObj.append("uploadImage", value); // Attach the image file
      } else {
        formDataObj.append(key, value);
      }
    });

    try {
      await axios.post("http://localhost:5000/package/api/", formDataObj, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Package submitted successfully!");
      handleClear();
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Failed to submit the package. Try again.");
    }
  };

  // Clear form data and image preview
  const handleClear = () => {
    setFormData({
      id: "",
      name: "",
      location: "",
      duration: "",
      description: "",
      price: "",
      imageUrl: "",
      // activities: '',
      // includes: '',
      // notIncludes: '',
      // safety: '',
    });
    setImagePreview(null); // Clear image preview
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-blue-100 to-blue-200 py-12 px-6">
      <h1 className="text-5xl font-bold text-blue-800 mb-12">
        Create a New Travel Package
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-xl shadow-lg w-full max-w-3xl space-y-10"
      >
        {/* Package Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Package Details
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Pkg001"
              className="input-field"
              required
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Package Name:one line heading"
              className="input-field"
              required
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="input-field"
              required
            />
            {/* <input
              type="number"
              className="input-field"
              placeholder="Number of guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
            /> */}
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="5 days/4 nights"
              className="input-field"
              required
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price (in PKR)"
              className="input-field"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Package Description"
              className="input-field h-32 md:col-span-2"
              rows="5"
            />
          </div>
        </div>

        {/* Image Upload Section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Upload Package Image
          </h2>
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-lg file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 h-32 object-cover rounded-lg"
            />
          )}
        </div>

        {/* Additional Details Section */}
        {/* <div>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-4">Additional Details</h2>
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        <input
                            type="text"
                            name="activities"
                            value={formData.activities}
                            onChange={handleChange}
                            placeholder="Activities (comma-separated)"
                            className="input-field"
                        />
                        <input
                            type="text"
                            name="includes"
                            value={formData.includes}
                            onChange={handleChange}
                            placeholder="Includes (comma-separated)"
                            className="input-field"
                        />
                        <input
                            type="text"
                            name="notIncludes"
                            value={formData.notIncludes}
                            onChange={handleChange}
                            placeholder="Not Included (comma-separated)"
                            className="input-field"
                        />
                        <input
                            type="text"
                            name="safety"
                            value={formData.safety}
                            onChange={handleChange}
                            placeholder="Safety Information"
                            className="input-field"
                        />
                    </div>
                </div> */}

        {/* Submit and Clear Buttons */}
        <div className="flex space-x-4">
          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
          >
            Submit Package
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-full py-4 rounded-lg bg-gray-400 text-white font-semibold text-lg hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourPackageForm;
