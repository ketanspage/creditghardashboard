import React, { useRef } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import Loader from "./Loader";
import SkeletonRow from "./SkeletonRow";

const Table = ({
  headers,
  data,
  pageSize = [10, 20, 30],
  count = 0,
  serverSideFilterObject,
  height = "",
  serverSidePagination,
  isLoading = false,
}) => {
  const [columns, setColumns] = React.useState(headers);
  const [sortConfig, setSortConfig] = React.useState({
    field: "", // Set the default sorting column's field here
    direction: "asc",
  });

  const [itemsPerPage, setItemsPerPage] = React.useState(pageSize[0]);
  const [currentPage, setCurrentPage] = React.useState(1);

  const [filterObjects, setFilterObjects] = React.useState({});
  const tableRef = React.useRef(null);
  React.useEffect(() => {
    // Scroll to the left on page load
    if (isLoading) {
      tableRef.current.scrollLeft = -100; // Adjust the value as needed
    }
  }, [isLoading]);
  // Function to update the filter object for a specific column
  const updateFilterObject = (field, filterData) => {
    if (
      filterData.textValue === "" ||
      (filterData.valueFrom === "" && filterData.valueTo === "") ||
      (filterData.fromDateValue === "" && filterData.toDateValue === "") ||
      filterData?.selectedValue?.length === 0
    ) {
      // Remove the entry from filterObjects
      const updatedFilterObjects = { ...filterObjects };
      delete updatedFilterObjects[field];
      // Pass the updated filter objects to serverSideFilterObject
      serverSideFilterObject(updatedFilterObjects);

      // Update the state with the new filter objects
      setFilterObjects(updatedFilterObjects);
    } else {
      // Update the filter object in the state
      const updatedFilterObjects = {
        ...filterObjects,
        [field]: filterData,
      };
      // Pass the updated filter objects to serverSideFilterObject
      serverSideFilterObject(updatedFilterObjects);

      // Update the state with the new filter objects
      setFilterObjects(updatedFilterObjects);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const value = {
      pageSize: itemsPerPage,
      page: pageNumber,
    };
    if (serverSidePagination) {
      serverSidePagination(value);
    }
  };

  const handleItemsPerPageChange = (perPage) => {
    setItemsPerPage(perPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
    if (typeof serverSidePagination === "function") {
      const value = {
        pageSize: perPage,
        page: 1,
      };
      serverSidePagination(value);
    }
  };

  const compareValues = (a, b, direction) => {
    if (a instanceof Date && b instanceof Date) {
      return direction === "asc" ? a - b : b - a;
    } else if (typeof a === "string" && typeof b === "string") {
      // Compare strings for other data types
      return direction === "asc" ? a.localeCompare(b) : b.localeCompare(a);
    } else if (typeof a === "number" && typeof b === "number") {
      // Compare numbers for other data types
      return direction === "asc" ? a - b : b - a;
    }
    // Add more cases for other data types as needed
    return 0;
  };

  const handlePinToggle = (field, isPinnedColumn = false) => {
    const newCols = columns.map((col) => {
      if (col.field === field) {
        return {
          ...col,
          isPinnedColumn,
        };
      }
      return col;
    });

    newCols.sort((a, b) => {
      const aPinned = a.isPinnedColumn ? 1 : 0;
      const bPinned = b.isPinnedColumn ? 1 : 0;
      return bPinned - aPinned;
    });
    return setColumns([...newCols]);
  };

  const handleSort = (field) => {
    if (sortConfig && sortConfig.field === field) {
      setSortConfig({
        ...sortConfig,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ field, direction: "asc" });
    }
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortConfig.field];
    const bValue = b[sortConfig.field];
    return compareValues(aValue, bValue, sortConfig.direction);
  });

  const paginatedData = React.useMemo(() => {
    if (
      typeof serverSidePagination !== "function" &&
      serverSidePagination === undefined
    ) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      return sortedData.slice(startIndex, endIndex);
    } else {
      return sortedData;
    }
  }, [sortedData, serverSidePagination, currentPage, itemsPerPage]);

  const heightClassName =
    height.length > 0 ? height : "min-h-[200px] max-h-full";

  const totalPages = React.useMemo(() => {
    if (count > 0) {
      return Math.ceil(count / itemsPerPage);
    } else {
      return Math.ceil(sortedData.length / itemsPerPage);
    }
  }, [count, sortedData, itemsPerPage]);

  React.useEffect(() => {
    setColumns(headers);
  }, [headers]);

  return (
    <>
      <div
        ref={tableRef}
        className={`overflow-auto  ${
          isLoading ? "overflow-x-scroll" : ""
        } ${heightClassName} `}
      >
        <table className={`table table-md w-full h-full ${heightClassName} `}>
          <TableHeader
            headers={columns}
            onPinToggle={handlePinToggle}
            sortConfig={sortConfig}
            onSort={handleSort}
            updateFilterObject={updateFilterObject}
          />
          <tbody className="overflow-auto">
            {!isLoading &&
              paginatedData.length > 0 &&
              paginatedData.map((item, index) => (
                <TableRow key={index} rowData={item} headers={columns} />
              ))}
            {!isLoading && paginatedData.length === 0 && (
              <tr className="w-full text-center">
                <td
                  colSpan={headers.length}
                  rowSpan="2"
                  className=" p-3 border-collapse border-t-2 border-base-200"
                >
                  There is no data to show
                </td>
              </tr>
            )}
            {/* {isLoading && (
              <tr className="w-full">
                <td
                  colSpan={headers.length}
                  rowSpan="2"
                  className="border-collapse border-t-2 border-base-200"
                  style={{ minWidth: "100%" }}
                >
                  <Loader />
                </td>
              </tr>
            )} */}
              {/* Display skeleton loading rows when isLoading is true */}
              {isLoading &&
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <SkeletonRow key={index} columns={columns} />
              ))}
          </tbody>
        </table>
      </div>

      <table className="table table-md w-full h-full sticky">
        <tfoot className="p-3">
          <tr className="w-full">
            <td
              colSpan={headers.length}
              className=" p-3 border-collapse border-t-2 border-base-200"
            >
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                onItemsPerPageChange={handleItemsPerPageChange}
                pagintaionOptions={pageSize}
                totalResults={count}
              />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
