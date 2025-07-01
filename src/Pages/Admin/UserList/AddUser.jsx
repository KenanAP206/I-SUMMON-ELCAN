"use client"

import { useState } from "react"
import { ArrowLeft, Save, X, User, Shield, Calendar } from 'lucide-react'

export default function AdminAddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    password: "",
    confirmPassword: "",
    designation: "",
    department: "",
    address: "",
    dateOfBirth: "",
    role: "",
    salary: "",
    joiningDate: "",
    emergencyContact: "",
    emergencyPhone: "",
  })

  const [errors, setErrors] = useState({})

  const genderOptions = ["Male", "Female", "Other"]
  const departments = ["Front Desk", "Housekeeping", "Kitchen", "Maintenance", "Security", "Management", "Accounts", "HR"]
  const roles = ["Admin", "Manager", "Supervisor", "Staff", "Receptionist", "Housekeeper", "Chef", "Security Guard"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile is required"
    if (!formData.password) newErrors.password = "Password is required"
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("User data:", formData)
    }
  }

  return (
    <div className="p-6 bg-slate-800 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-white">Add User</h1>
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
            form="user-form"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Save className="w-4 h-4 mr-2 inline" />
            Save User
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
        <form id="user-form" onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Personal Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name*"
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.firstName ? "border-red-500" : "border-slate-600"
                    }`}
                    required
                  />
                  {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Gender*</option>
                    {genderOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile*"
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.mobile ? "border-red-500" : "border-slate-600"
                    }`}
                    required
                  />
                  {errors.mobile && <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password*"
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.password ? "border-red-500" : "border-slate-600"
                    }`}
                    required
                  />
                  {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Re-Enter Password*"
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.confirmPassword ? "border-red-500" : "border-slate-600"
                    }`}
                    required
                  />
                  {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    placeholder="Designation"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Department*</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.email ? "border-red-500" : "border-slate-600"
                    }`}
                    required
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Work Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Work Information
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Role*</option>
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="Salary"
                    min="0"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="date"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
        </form>
      </div>
    </div>
  )
}
