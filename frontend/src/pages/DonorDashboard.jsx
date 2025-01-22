import React, { useState } from "react";
import { MapPin, PlusCircle, ChevronRight, Gift, Calendar, Search, Filter, Info, Bell } from "lucide-react";
import MapComponent from "../components/MapComponent/MapComponent";

const DonorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const stats = {
    totalDonations: 25,
    itemsPickedUp: 20,
    pendingPickups: 5,
  };

  const donations = [
    { id: 1, item: "Winter Clothes", status: "Pending", location: "New York, NY", date: "2025-01-15", notes: "Please package in boxes" },
    { id: 2, item: "Educational Books", status: "Picked Up", location: "Brooklyn, NY", date: "2025-01-10", notes: "Picked up by John" },
    { id: 3, item: "Non-perishable Food", status: "Pending", location: "Queens, NY", date: "2025-01-08", notes: "Available after 2 PM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Welcome Message */}
      {showWelcome && (
        <div className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Info className="w-5 h-5 text-blue-600" />
              <p className="text-blue-800">
                Welcome to your donation dashboard! Here you can track all your donations and schedule pickups.
              </p>
            </div>
            <button 
              onClick={() => setShowWelcome(false)}
              className="text-blue-600 hover:text-blue-800"
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold tracking-tight">Donor Dashboard</h1>
                <div className="relative group">
                  <Bell className="w-5 h-5 text-blue-200 hover:text-white cursor-help" />
                  <div className="hidden group-hover:block absolute z-10 w-48 p-2 mt-2 text-sm text-gray-800 bg-white rounded-lg shadow-lg">
                    You have {stats.pendingPickups} pending pickups
                  </div>
                </div>
              </div>
              <p className="mt-2 text-blue-100">Track and manage your donations in one place</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
                <input
                  className="w-64 bg-blue-800/40 border border-blue-700 rounded-lg text-white placeholder:text-blue-200 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search your donations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="p-2 hover:bg-blue-800 rounded-lg"
                >
                  <Filter className="w-5 h-5" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">All Donations</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Pending Only</button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Picked Up</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Donations</p>
                <p className="text-3xl font-bold text-blue-900 mt-2">{stats.totalDonations}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <Gift className="w-6 h-6 text-blue-900" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Items Picked Up</p>
                <p className="text-3xl font-bold text-green-600 mt-2">{stats.itemsPickedUp}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-all duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Pending Pickups</p>
                <p className="text-3xl font-bold text-amber-600 mt-2">{stats.pendingPickups}</p>
              </div>
              <div className="p-3 bg-amber-100 rounded-full">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donations Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Recent Donations</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                View Complete History <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            {donations.length === 0 ? (
              <div className="text-center py-8">
                <Gift className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">No donations yet. Ready to make your first donation?</p>
                <button className="mt-4 text-blue-600 hover:text-blue-800">
                  Make Your First Donation
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Item</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Location</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((donation) => (
                      <tr
                        key={donation.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <Gift className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="font-medium text-gray-900">{donation.item}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            donation.status === "Pending" 
                              ? "bg-amber-100 text-amber-800" 
                              : "bg-green-100 text-green-800"
                          }`}>
                            {donation.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            {donation.location}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{donation.date}</td>
                        <td className="py-3 px-4 text-gray-600">
                          <div className="group relative">
                            <Info className="w-4 h-4 text-blue-500 cursor-help" />
                            <div className="hidden group-hover:block absolute z-10 w-48 p-2 mt-2 text-sm text-gray-800 bg-white rounded-lg shadow-lg">
                              {donation.notes}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Donation Locations</h2>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <MapComponent />
          </div>
        </div>
      </div>

      {/* Quick Action Button */}
      <div className="fixed bottom-6 right-6 group">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center transition-colors duration-200 transform hover:scale-105">
          <PlusCircle className="w-5 h-5 mr-2" />
          New Donation
        </button>
        <div className="hidden group-hover:block absolute right-0 bottom-full mb-2 p-2 text-sm text-gray-800 bg-white rounded-lg shadow-lg">
          Click to start a new donation
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;