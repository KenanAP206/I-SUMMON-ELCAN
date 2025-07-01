"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Save, X, Calendar, User, CreditCard, Trash2 } from 'lucide-react'

export default function AdminEditBooking({ bookingId = "BK001" }) {
  const [formData, setFormData] = useState({
    guestName: "",
    email: "",
    phone: "",
    idType: "",
    idNumber: "",
    roomType: "",
    roomNumber: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    adults: "",
    children: "",
    specialRequests: "",
    paymentMethod: "",
    advancePayment: "",
    totalAmount: "",
    discountPercent: "",
    emergencyContact: "",
    emergencyPhone: "",
    status: "",
  })

  const [loading, setLoading] = useState(true)

  const roomTypes = ["Single", "Double", "Delux", "Super Delux", "Suite", "Presidential Suite"]
  const idTypes = ["Passport", "National ID", "Driver License", "Other"]
  const paymentMethods = ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "Online Payment"]
  const statusOptions = ["Confirmed", "Pending", "Cancelled", "Checked In", "Checked Out"]

  // Simulate loading existing booking data
  useEffect(() => {
    const loadBookingData = () => {
      setTimeout(() => {
        setFormData({
          guestName: "John Smith",
          email: "john.smith@email.com",
          phone: "+1 234 567 8900",
          idType: "Passport",
          idNumber: "AB123456",
          roomType: "Delux",
          roomNumber: "103",
          checkIn: "2025-01-02",
          checkOut: "2025-01-05",
          guests: "2",
          adults: "2",
          children: "0",
          specialRequests: "Late check-in requested",
          paymentMethod: "Credit Card",
          advancePayment: "450",
          totalAmount: "450",
          discountPercent: "0",
          emergencyContact: "Jane Smith",
          emergencyPhone: "+1 234 567 8901",
          status: "Confirmed",
        })
        setLoading(false)
      }, 1000)
    }

    loadBookingData()
  }, [bookingId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Updated booking data:", formData)
  }

  if (loading) {
    return (
      <div className="p-6 bg-slate-800 min-h-screen flex items-center justify-center">
        <div className="text-white">Loading booking data...</div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-slate-800 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-white">Edit Booking {bookingId}</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="px-4 py-2 text-red-400 hover:text-red-300 border border-red-600 rounded-lg hover:bg-red-600/10 transition-colors"
          >
            <Trash2 className="w-4 h-4 mr-2 inline" />
            Cancel Booking
          </button>
          <button
            type="button"
            className="px-4 py-2 text-slate-400 hover:text-white border border-slate-600 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <X className="w-4 h-4 mr-2 inline" />
            Cancel
          </button>
          <button
            type="submit"
            form="booking-form"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Save className="w-4 h-4 mr-2 inline" />
            Update Booking
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <form id="booking-form" onSubmit={handleSubmit} className="space-y-8">
          {/* Booking Status */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Booking Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Booking ID
                </label>
                <input
                  type="text"
                  value={bookingId}
                  disabled
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Guest Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Guest Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="guestName"
                    value={formData.guestName}
                    onChange={handleInputChange}
                    placeholder="Guest Name*"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number*"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <select
                    name="idType"
                    value={formData.idType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">ID Type*</option>
                    {idTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="idNumber"
                    value={formData.idNumber}
                    onChange={handleInputChange}
                    placeholder="ID Number*"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Emergency Contact"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Booking Details
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
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
                <div>
                  <input
                    type="text"
                    name="roomNumber"
                    value={formData.roomNumber}
                    onChange={handleInputChange}
                    placeholder="Room Number"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    onChange={handleInputChange}
                    placeholder="Adults*"
                    min="1"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    placeholder="Children"
                    min="0"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    placeholder="Total Guests*"
                    min="1"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Special Requests"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Payment Method*</option>
                    {paymentMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    name="totalAmount"
                    value={formData.totalAmount}
                    onChange={handleInputChange}
                    placeholder="Total Amount*"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="number"
                    name="advancePayment"
                    value={formData.advancePayment}
                    onChange={handleInputChange}
                    placeholder="Advance Payment"
                    min="0"
                    step="0.01"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="discountPercent"
                    value={formData.discountPercent}
                    onChange={handleInputChange}
                    placeholder="Discount %"
                    min="0"
                    max="100"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
