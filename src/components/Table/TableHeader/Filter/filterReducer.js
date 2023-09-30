export const filterActionType = {
  SET_FILTER_TYPE: "SET_FILTER_TYPE",
  SET_TEXT_VALUE: "SET_TEXT_VALUE",
  SET_NUMBER_FILTER_TYPE: "SET_NUMBER_FILTER_TYPE",
  SET_NUMBER_VALUE_FROM: "SET_NUMBER_VALUE_FROM",
  SET_NUMBER_VALUE_TO: "SET_NUMBER_VALUE_TO",
  SET_DATE_FILTER_TYPE: "SET_DATE_FILTER_TYPE",
  SET_DATE_VALUE_FROM: "SET_DATE_VALUE_FROM",
  SET_DATE_VALUE_TO: "SET_DATE_VALUE_TO",
  SET_SELECT_CHECKBOX: "SET_SELECT_CHECKBOX"
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case filterActionType.SET_FILTER_TYPE:
      return {
        ...state,
        selectedFilterType: action.payload,
      };
    case filterActionType.SET_TEXT_VALUE:
      return {
        ...state,
        textValue: action.payload,
      };
    case filterActionType.SET_NUMBER_FILTER_TYPE:
      return {
        ...state,
        selectedNumberFilterType: action.payload,
      };
    case filterActionType.SET_NUMBER_VALUE_FROM:
      return {
        ...state,
        valueFrom: action.payload,
      };
    case filterActionType.SET_NUMBER_VALUE_TO:
      return {
        ...state,
        valueTo: action.payload,
      };
    case filterActionType.SET_DATE_FILTER_TYPE:
      return {
        ...state,
        selectedDateFilterType: action.payload,
      };
    case filterActionType.SET_DATE_VALUE_FROM:
      return {
        ...state,
        fromDateValue: action.payload,
      };
    case filterActionType.SET_DATE_VALUE_TO:
      return {
        ...state,
        toDateValue: action.payload,
      };
    case filterActionType.SET_SELECT_CHECKBOX:
      return {
        ...state,
        selectedValue: action.payload,
      }
    default:
      return state;
  }
};

export default filterReducer;
