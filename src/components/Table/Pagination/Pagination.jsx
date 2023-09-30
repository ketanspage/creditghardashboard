import React from "react";
import { PreviousIcon } from "../../../assets/icons/PreviousIcon";
import { NextIcon } from "../../../assets/icons/NextIcon";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
  pagintaionOptions = [],
  totalResults = 0,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const getPageNumbersToShow = () => {
    const numLinksToShow = 1; // Number of page links to show before and after the current page

    if (totalPages <= numLinksToShow * 2 + 1) {
      // If there are fewer or equal pages than the number of links to show on both sides
      return pageNumbers;
    }

    const pageNumbersToShow = [];

    if (currentPage <= numLinksToShow + 1) {
      // Near the beginning of pagination
      pageNumbersToShow.push(...pageNumbers.slice(0, numLinksToShow * 2 + 1));
      pageNumbersToShow.push(null, totalPages);
    } else if (currentPage >= totalPages - numLinksToShow - 1) {
      // Near the end of pagination
      pageNumbersToShow.push(
        1,
        null,
        ...pageNumbers.slice(totalPages - numLinksToShow * 2 - 1)
      );
    } else {
      // In the middle of pagination
      pageNumbersToShow.push(
        1,
        null,
        ...pageNumbers.slice(
          currentPage - numLinksToShow,
          currentPage + numLinksToShow
        )
      );
      pageNumbersToShow.push(null, totalPages);
    }

    return pageNumbersToShow;
  };

  const visiblePageNumbers = getPageNumbersToShow();

  return (
    <div className="w-full flex flex-row-reverse  justify-between items-center">
      <nav className="flex flex-col lg:flex-row  justify-between items-center">
        <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between mb-1 mx-3">
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, totalResults)}
            </span>{" "}
            of <span className="font-medium">{totalResults}</span> results
          </p>
        </div>
        <ul className="flex flex-row text-sm">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="relative inline-flex items-center rounded-l-md px-4 py-2 h-10 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <PreviousIcon className="w-3 h-3" />
            </button>
          </li>
          {visiblePageNumbers.map((pageNumber, i) => (
            <li
              key={i}
              className={`page-item${
                currentPage === pageNumber
                  ? "z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
              }`}
            >
              {pageNumber === null ? (
                <span className="relative inline-flex items-center px-4 py-2  h-10 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
              ) : (
                <button
                  className="relative inline-flex items-center rounded-l-md px-4 py-2 h-10"
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )}
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="relative inline-flex items-center rounded-r-md px-4 py-2 h-10 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <NextIcon className="h-3 w-3" />
            </button>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Page Size:</span>
        <select
          className="border border-primary rounded px-2 py-1"
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          {pagintaionOptions.map((item, i) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
