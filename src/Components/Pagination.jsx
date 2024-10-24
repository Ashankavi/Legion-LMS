import React, { useState } from 'react';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const totalPages = 2; // You can dynamically set this based on total items

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 text-white ">
      {/* Items per page */}
      <div className="flex items-center">
        <span className="mr-2">Showing</span>
        <div className="px-3 py-1 bg-gray-700 rounded-md">
          {itemsPerPage}
        </div>
        <span className="ml-2">items per page</span>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(1)}
          className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-700' : 'bg-gray-600 hover:bg-gray-500'}`}
        >
          1
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className={`px-3 py-1 rounded-md ${currentPage === 2 ? 'bg-gray-700' : 'bg-gray-600 hover:bg-gray-500'}`}
        >
          2
        </button>

        {/* Next and End buttons */}
        <button
          onClick={handleNext}
          className="px-3 py-1 bg-gray-600 rounded-md hover:bg-gray-500"
        >
          Next
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 bg-gray-600 rounded-md hover:bg-gray-500"
        >
          End
        </button>
      </div>
    </div>
  );
};

export default Pagination;
