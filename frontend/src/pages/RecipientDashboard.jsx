import React, { useState, useEffect } from 'react';
import { Search, Filter, Package, MapPin, Star, Clock, Grid, List, Share2 } from 'lucide-react';

const RecipientDashboard = () => {
  const dummyItems = [
    {
      id: 1,
      name: "Winter Jacket",
      description: "A warm jacket for cold weather, perfect for winter season. Includes thermal lining and water-resistant outer shell.",
      category: "clothing",
      condition: "Like New",
      location: "Downtown Center",
      image: "/api/placeholder/400/300",
      addedDate: "2024-01-05",
      rating: 4.5,
      donorName: "Sarah Smith",
      size: "L",
      brand: "North Face"
    },
    {
      id: 2,
      name: "Laptop",
      description: "A functional laptop for educational purposes. Intel i5 processor, 8GB RAM, 256GB SSD.",
      category: "electronics",
      condition: "Good",
      location: "Tech Hub",
      image: "/api/placeholder/400/300",
      addedDate: "2024-01-08",
      rating: 4.2,
      donorName: "John Doe",
      specs: "Intel i5, 8GB RAM",
      warranty: "3 months"
    },
  ];

  const [items, setItems] = useState(dummyItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [showClaimAlert, setShowClaimAlert] = useState(false);
  const [claimedItem, setClaimedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClaim = (item) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setClaimedItem(item);
      setShowClaimAlert(true);
      setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
      setIsLoading(false);
    }, 800);
  };

  const handleSort = (sortValue) => {
    setSortBy(sortValue);
    const sortedItems = [...items];
    switch (sortValue) {
      case "newest":
        sortedItems.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
        break;
      case "rating":
        sortedItems.sort((a, b) => b.rating - a.rating);
        break;
    }
    setItems(sortedItems);
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === "" || item.category === category)
  );

  const getCategoryColor = (category) => {
    const colors = {
      clothing: "bg-purple-100 text-purple-800",
      electronics: "bg-blue-100 text-blue-800",
      furniture: "bg-green-100 text-green-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const ItemCard = ({ item, viewMode }) => {
    const cardClass = viewMode === "list" 
      ? "flex flex-col md:flex-row gap-4"
      : "flex flex-col";

    const imageClass = viewMode === "list"
      ? "w-full md:w-48 h-48 md:h-full"
      : "w-full h-48";

    return (
      <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${viewMode === "list" ? "p-4" : ""}`}>
        <div className={cardClass}>
          <img
            src={item.image}
            alt={item.name}
            className={`${imageClass} object-cover rounded-lg`}
          />
          <div className="flex-1 p-4">
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-sm ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm">{item.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>Added {formatDate(item.addedDate)}</span>
              </div>
            </div>
            {/* Category-specific details */}
            <div className="mb-4">
              {item.category === "clothing" && (
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Size: {item.size}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Brand: {item.brand}</span>
                </div>
              )}
              {item.category === "electronics" && (
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Specs: {item.specs}</span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Warranty: {item.warranty}</span>
                </div>
              )}
            </div>
            <button
              onClick={() => handleClaim(item)}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "Claim Item"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {showClaimAlert && claimedItem && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
            Success! You've claimed the {claimedItem.name}. We'll contact you with further instructions.
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Available Donations</h1>
            <p className="text-gray-600 mt-2">Browse and claim available items</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-full">
            <Package className="w-4 h-4" />
            <span>{items.length} Items Available</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <select
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-200 rounded-lg p-2"
          >
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {filteredItems.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">No items found</h3>
            <p className="text-gray-600 mt-2">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipientDashboard;