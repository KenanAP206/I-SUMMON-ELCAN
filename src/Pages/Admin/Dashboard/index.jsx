"use client"
import { Calendar, Bed, Users, DollarSign, Star, MoreHorizontal, Settings } from "lucide-react"

export default function AdminDashboard() {
  const metrics = [
    {
      title: "Total Booking",
      value: "1,245",
      icon: Calendar,
      color: "bg-purple-500",
      progress: 75,
      progressColor: "bg-purple-500",
    },
    {
      title: "Rooms Available",
      value: "287",
      icon: Bed,
      color: "bg-orange-500",
      progress: 60,
      progressColor: "bg-orange-500",
    },
    {
      title: "New Customers",
      value: "1,532",
      icon: Users,
      color: "bg-green-500",
      progress: 85,
      progressColor: "bg-green-500",
    },
    {
      title: "Total Revenue",
      value: "$22,567",
      icon: DollarSign,
      color: "bg-cyan-500",
      progress: 90,
      progressColor: "bg-cyan-500",
    },
  ]

  const roomBookingData = [
    { name: "Single", value: 734, color: "#3B82F6", percentage: 35 },
    { name: "Double", value: 456, color: "#EF4444", percentage: 22 },
    { name: "King", value: 321, color: "#10B981", percentage: 15 },
    { name: "Executive", value: 289, color: "#F59E0B", percentage: 14 },
    { name: "Apartments", value: 234, color: "#8B5CF6", percentage: 14 },
  ]

  // Generate sample data for the area chart
  const generateChartData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months.map((month, index) => ({
      month,
      newCustomers: 30 + Math.sin(index * 0.5) * 20 + Math.random() * 15,
      oldCustomers: 20 + Math.cos(index * 0.7) * 15 + Math.random() * 10,
    }))
  }

  const chartData = generateChartData()

  return (
    <div className="p-6 bg-slate-800 min-h-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-normal text-blue-400 mb-1">Hi, Welcome back Admin!</h1>
            <h2 className="text-xl text-slate-400">This is Dashboard,</h2>
          </div>
          <div className="flex items-center space-x-8">
            {/* Customer Ratings */}
            <div className="text-right">
              <div className="text-slate-400 text-sm mb-1">Customer Ratings</div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((star) => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-4 h-4 text-slate-600" />
                </div>
                <span className="text-slate-400 text-sm">(9,876)</span>
              </div>
            </div>

            {/* Total Income */}
            <div className="text-right">
              <div className="text-slate-400 text-sm mb-1">Total Income</div>
              <div className="flex items-center space-x-2">
                <div className="flex items-end space-x-1">
                  {[3, 6, 4, 8, 5, 9, 7, 10, 6, 8].map((height, index) => (
                    <div key={index} className="w-2 bg-blue-500 rounded-sm" style={{ height: `${height * 2}px` }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Settings */}
            <button className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-700">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${metric.color} rounded-xl flex items-center justify-center`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="mb-4">
              <div className="text-slate-400 text-sm mb-1">{metric.title}</div>
              <div className="text-white text-2xl font-bold">{metric.value}</div>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className={`${metric.progressColor} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${metric.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Hotel Survey Chart */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-medium">Hotel Survey</h3>
            <button className="text-slate-400 hover:text-white">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          {/* Legend */}
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-slate-400 text-sm">New Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-slate-400 text-sm">Old Customers</span>
            </div>
          </div>

          {/* Chart Area */}
          <div className="relative h-64">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              {/* Grid lines */}
              {[20, 40, 60, 80, 100].map((y) => (
                <line key={y} x1="0" y1={200 - y * 2} x2="400" y2={200 - y * 2} stroke="#374151" strokeWidth="1" />
              ))}

              {/* Y-axis labels */}
              {[20, 40, 60, 80, 100].map((value) => (
                <text key={value} x="10" y={205 - value * 2} fill="#9CA3AF" fontSize="12" textAnchor="start">
                  {value}
                </text>
              ))}

              {/* Area chart for New Customers */}
              <defs>
                <linearGradient id="newCustomersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="oldCustomersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* New Customers Area */}
              <path
                d={`M 0 ${200 - chartData[0].newCustomers * 2} ${chartData
                  .map((d, i) => `L ${(i * 400) / (chartData.length - 1)} ${200 - d.newCustomers * 2}`)
                  .join(" ")} L 400 200 L 0 200 Z`}
                fill="url(#newCustomersGradient)"
              />

              {/* Old Customers Area */}
              <path
                d={`M 0 ${200 - chartData[0].oldCustomers * 2} ${chartData
                  .map((d, i) => `L ${(i * 400) / (chartData.length - 1)} ${200 - d.oldCustomers * 2}`)
                  .join(" ")} L 400 200 L 0 200 Z`}
                fill="url(#oldCustomersGradient)"
              />

              {/* New Customers Line */}
              <path
                d={`M 0 ${200 - chartData[0].newCustomers * 2} ${chartData
                  .map((d, i) => `L ${(i * 400) / (chartData.length - 1)} ${200 - d.newCustomers * 2}`)
                  .join(" ")}`}
                stroke="#8B5CF6"
                strokeWidth="3"
                fill="none"
              />

              {/* Old Customers Line */}
              <path
                d={`M 0 ${200 - chartData[0].oldCustomers * 2} ${chartData
                  .map((d, i) => `L ${(i * 400) / (chartData.length - 1)} ${200 - d.oldCustomers * 2}`)
                  .join(" ")}`}
                stroke="#F59E0B"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Room Booking Chart */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white text-lg font-medium">Room Booking Chart</h3>
            <button className="text-slate-400 hover:text-white">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-center mb-6">
            {/* Donut Chart */}
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {roomBookingData.map((item, index) => {
                  const total = roomBookingData.reduce((sum, d) => sum + d.value, 0)
                  const percentage = (item.value / total) * 100
                  const circumference = 2 * Math.PI * 70
                  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`
                  const strokeDashoffset = roomBookingData
                    .slice(0, index)
                    .reduce((sum, d) => sum + (d.value / total) * circumference, 0)

                  return (
                    <circle
                      key={item.name}
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="20"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={-strokeDashoffset}
                      className="transition-all duration-300"
                    />
                  )
                })}
              </svg>

              {/* Labels */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  {roomBookingData.map((item, index) => {
                    const angle = (index * 72 - 90) * (Math.PI / 180)
                    const x = Math.cos(angle) * 85
                    const y = Math.sin(angle) * 85

                    return (
                      <div
                        key={item.name}
                        className="absolute text-xs text-white font-medium"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        {item.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {roomBookingData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-400 text-sm">{item.name}</span>
                </div>
                <span className="text-white font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
