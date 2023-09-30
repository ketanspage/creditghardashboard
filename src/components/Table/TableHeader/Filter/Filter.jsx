import React from "react";
import TextFilter from "./TextFilter/TextFilter";
import { filter } from "./constant";
import NumberFilter from "./NumberFilter";
import DateFilter from "./DateFilter";
import filterReducer, { filterActionType } from "./filterReducer";
import SelectedCheckboxFilter from "./SelectedCheckboxFilter";

const Filter = ({
  openFilter,
  filterType = "",
  updateFilterObject,
  field,
  filterParams,
  toggleFilter,
}) => {
  const initialState = {
    selectedFilterType: "contains",
    textValue: "",
    selectedNumberFilterType: "equals",
    valueFrom: "",
    valueTo: "",
    selectedDateFilterType: "equals",
    fromDateValue: "",
    toDateValue: "",
    selectedCheckboxFilterType: "in",
    selectedValue: [],
  };
  const [state, dispatch] = React.useReducer(filterReducer, initialState);

  const [updateTimeout, setUpdateTimeout] = React.useState(null);

  // Function to update the filter object and pass it to the parent component
  const onUpdateFilterObject = React.useCallback(() => {
    const {
      selectedFilterType,
      textValue,
      selectedNumberFilterType,
      valueFrom,
      valueTo,
      selectedDateFilterType,
      fromDateValue,
      toDateValue,
      selectedCheckboxFilterType,
      selectedValue,
    } = state;

    let updatedFilterObject = {};

    // Build the filter object based on the filterType
    switch (filterType) {
      case "text":
        updatedFilterObject = {
          filterType: selectedFilterType,
          textValue,
        };
        break;
      case "number":
        updatedFilterObject = {
          filterType: selectedNumberFilterType,
          valueFrom,
          valueTo,
        };
        break;
      case "date":
        updatedFilterObject = {
          filterType: selectedDateFilterType,
          fromDateValue,
          toDateValue,
        };
        break;
      case "selectCheckbox":
        updatedFilterObject = {
          filterType: selectedCheckboxFilterType,
          selectedValue,
        };
        break;
      default:
        // Handle other filter types if needed
        break;
    }
    // Pass the updated filter object to the parent component
    updateFilterObject(field, updatedFilterObject);
  }, [state, field, filterType, updateFilterObject]);

  // Use onBlur or onSubmit event handlers to trigger the filter update
  const handlClick =React.useCallback( () => {
    clearTimeout(updateTimeout);

    // Set a new timeout to delay the filter update
    const newTimeout = setTimeout(() => {
      onUpdateFilterObject();
    }, 1000); // Adjust the timeout duration as needed (e.g., 1000ms for 1 second)

    // Store the timeout ID
    setUpdateTimeout(newTimeout);
    toggleFilter(false)
  },[state , toggleFilter]);

  const clearFilter = React.useCallback(
    (clearFilterType) => {
      switch (clearFilterType) {
        case "text":
          // Clear text filter state
          dispatch({
            type: filterActionType.SET_FILTER_TYPE,
            payload: "contains",
          });
          dispatch({ type: filterActionType.SET_TEXT_VALUE, payload: "" });
          break;
        case "number":
          // Clear number filter state
          dispatch({
            type: filterActionType.SET_NUMBER_FILTER_TYPE,
            payload: "equals",
          });
          dispatch({
            type: filterActionType.SET_NUMBER_VALUE_FROM,
            payload: "",
          });
          dispatch({ type: filterActionType.SET_NUMBER_VALUE_TO, payload: "" });
          break;
        case "date":
          // Clear date filter state
          dispatch({
            type: filterActionType.SET_DATE_FILTER_TYPE,
            payload: "equals",
          });
          dispatch({ type: filterActionType.SET_DATE_VALUE_FROM, payload: "" });
          dispatch({ type: filterActionType.SET_DATE_VALUE_TO, payload: "" });
          break;
        case "selectCheckbox":
          dispatch({ type: filterActionType.SET_SELECT_CHECKBOX, payload: [] });
          break;
        default:
          // Handle other filter types if needed
          break;
      }
      toggleFilter();
    },
    [dispatch , toggleFilter]
  );

  React.useEffect(() => {
    onUpdateFilterObject();
  }, []);

  const renderedFilter = () => {
    const {
      selectedFilterType,
      textValue,
      selectedNumberFilterType,
      valueFrom,
      valueTo,
      selectedDateFilterType,
      fromDateValue,
      toDateValue,
      selectedValue,
    } = state;
    switch (filterType) {
      case "text":
        return (
          <TextFilter
            selectedFilterType={selectedFilterType}
            textValue={textValue}
            onFilterTypeChange={(value) =>
              dispatch({
                type: filterActionType.SET_FILTER_TYPE,
                payload: value,
              })
            }
            onTextChange={(value) =>
              dispatch({
                type: filterActionType.SET_TEXT_VALUE,
                payload: value,
              })
            }
            filterOptions={filter["text"].filterOptions}
          />
        );
      case "number":
        return (
          <NumberFilter
            selectedFilterType={selectedNumberFilterType}
            valueFrom={valueFrom}
            valueTo={valueTo}
            onFilterTypeChange={(value) =>
              dispatch({
                type: filterActionType.SET_NUMBER_FILTER_TYPE,
                payload: value,
              })
            }
            onValueFromChange={(value) =>
              dispatch({
                type: filterActionType.SET_NUMBER_VALUE_FROM,
                payload: value,
              })
            }
            onValueToChange={(value) =>
              dispatch({
                type: filterActionType.SET_NUMBER_VALUE_TO,
                payload: value,
              })
            }
            filterOptions={filter["number"].filterOptions}
          />
        );
      case "dateTime":
        return (
          <DateFilter
            selectedFilterType={selectedDateFilterType}
            fromDateValue={fromDateValue}
            toDateValue={toDateValue}
            isDateTime={true} // Set to false for date-only filtering
            onFilterTypeChange={(value) =>
              dispatch({
                type: filterActionType.SET_DATE_FILTER_TYPE,
                payload: value,
              })
            }
            onFromDateChange={(value) =>
              dispatch({
                type: filterActionType.SET_DATE_VALUE_FROM,
                payload: value,
              })
            }
            onToDateChange={(value) =>
              dispatch({
                type: filterActionType.SET_DATE_VALUE_TO,
                payload: value,
              })
            }
            filterOptions={filter["date"].filterOptions}
          />
        );
      case "date":
        return (
          <DateFilter
            selectedFilterType={selectedDateFilterType}
            fromDateValue={fromDateValue}
            toDateValue={toDateValue}
            isDateTime={false} // Set to false for date-only filtering
            onFilterTypeChange={(value) =>
              dispatch({
                type: filterActionType.SET_DATE_FILTER_TYPE,
                payload: value,
              })
            }
            onFromDateChange={(value) =>
              dispatch({
                type: filterActionType.SET_DATE_VALUE_FROM,
                payload: value,
              })
            }
            onToDateChange={(value) =>
              dispatch({
                type: filterActionType.SET_DATE_VALUE_TO,
                payload: value,
              })
            }
            filterOptions={filter["date"].filterOptions}
          />
        );
      case "selectCheckbox":
        return (
          <SelectedCheckboxFilter
            options={filterParams?.options ? filterParams?.options : []}
            selectedValue={selectedValue}
            onSelectionChange={(value) =>
              dispatch({
                type: filterActionType.SET_SELECT_CHECKBOX,
                payload: value,
              })
            }
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="dropdownSearch"
      tabIndex={0}
      className={`z-10 max-h-52 overflow-auto ${
        openFilter ? "block" : "hidden"
      }  flex flex-col justify-between dropdown-content  bg-white rounded-lg shadow-lg border w-60 dark:bg-gray-700 `}
    >
      <div tabIndex={0} className="p-3">
        {renderedFilter()}
      </div>
      <div className="p-3 flex flex-row items-center justify-between">
        <button className="btn btn-primary btn-sm rounded" onClick={handlClick}>
          Filter
        </button>
        <button
          className="btn btn-secondary btn-sm rounded"
          onClick={() => clearFilter(filterType)}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
