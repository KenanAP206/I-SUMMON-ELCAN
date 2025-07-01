"use client"

import { useState } from "react"
import { ArrowLeft, Save, X, Upload, ImageIcon } from 'lucide-react'

export default function AdminAddRoom() {
  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "",
    acStatus: "",
    mealIncluded: "",
    capacity: "",
    rent: "",
    floor: "",
    bedType: "",
    amenities: [],
    description: "",
    images: [],
  })

  const [errors, setErrors] = useState({})

  const roomTypes = ["Single", "Double", "Delux", "Super Delux", "Suite", "Presidential Suite"]
  const acOptions = ["AC", "Non AC"]
  const mealOptions = ["None", "Free Breakfast", "Free Lunch", "Free Dinner", "All Meals"]
  const bedTypes = ["Single Bed", "Double Bed", "Queen Bed", "King Bed", "Twin Beds"]
  const amenitiesList = ["WiFi", "TV", "Mini Bar", "Safe", "Balcony", "Sea View", "City View", "Jacuzzi", "Kitchenette"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAmenityChange = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validation logic here
    console.log("Room data:", formData)
  }

  return (
    <div className="p-6 bg-slate-800 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-white">Add Room</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="px-4 py-2 text-slate-400 hover:text-white border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X className="w-4 h-4 mr-2 inline" />
            Cancel
          </button>
          <button
            type="submit"
            form="room-form"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Save className="w-4 h-4 mr-2 inline" />
            Save Room
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <form id="room-form" onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Room Number*
              </label>
              <input
                type="text"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleInputChange}
                placeholder="Room Number*"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Room Type*
              </label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Room Type*</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                AC Status*
              </label>
              <select
                name="acStatus"
                value={formData.acStatus}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">AC Status*</option>
                {acOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Capacity*
              </label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleInputChange}
                placeholder="Capacity*"
                min="1"
                max="10"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Rent per Night*
              </label>
              <input
                type="number"
                name="rent"
                value={formData.rent}
                onChange={handleInputChange}
                placeholder="Rent per Night*"
                min="0"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Floor
              </label>
              <input
                type="number"
                name="floor"
                value={formData.floor}
                onChange={handleInputChange}
                placeholder="Floor"
                min="0"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Bed Type
              </label>
              <select
                name="bedType"
                value={formData.bedType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Bed Type</option>
                {bedTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Meal Included
              </label>
              <select
                name="mealIncluded"
                value={formData.mealIncluded}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Meal Option</option>
                {mealOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-3">
              Amenities
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {amenitiesList.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenityChange(amenity)}
                    className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-slate-300 text-sm">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Room description..."
              rows={4}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-slate-300 text-sm font-medium mb-3">
              Room Images
            </label>
            <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-slate-500 transition-colors">
              <ImageIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-400 mb-2">Drag and drop images here, or click to select</p>
              <button
                type="button"
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                <Upload className="w-4 h-4 mr-2 inline" />
                Upload Images
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
