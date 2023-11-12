import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import jsonData from './restaurant.json';

const RestaurantCardList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleRatingChange = (event) => {
    setMinRating(Number(event.target.value));
    setCurrentPage(1); // Reset to the first page when changing rating
  };

  const itemsPerPage = 24;
  const filteredRestaurants = jsonData.restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      restaurant.rating >= minRating
  );

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const maxVisiblePages = 5;
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const visiblePageRange = Array.from({ length: endPage - startPage + 1 }).map(
    (_, index) => startPage + index
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleRestaurants = filteredRestaurants.slice(startIndex, endIndex);

  return (
    <div className="mx-8">
      <div className="flex justify-between items-center mb-4">
        <div className="mb-4 mt-24 mx-8">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded p-2"
          />
        </div>
        <div className="mb-4 mt-24 mx-8">
          <label htmlFor="minRating" className="mr-2">
            Minimum Rating:
          </label>
          <input
            type="number"
            id="minRating"
            min={0}
            max={5}
            step={1}
            value={minRating}
            onChange={handleRatingChange}
            className="border rounded p-2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {visibleRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <RestaurantCard restaurantData={restaurant} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1 text-xs font-medium mt-4">
        <ol className="flex justify-center gap-1 text-xs font-medium mt-4">
          <li>
            <button
              className={`inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
            >
              &lt;
            </button>
          </li>
          {visiblePageRange.map((page) => (
            <li key={page}>
              <button
                className={`block h-8 w-8 rounded border ${
                  currentPage === page ? 'bg-orange-600 text-white' : 'bg-white text-gray-900'
                } text-center leading-8 cursor-pointer`}
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(page);
                }}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
            >
              &gt;
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RestaurantCardList;
