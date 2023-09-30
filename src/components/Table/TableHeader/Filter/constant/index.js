export const filter = {
  text: {
    inputType: "text",
    filterOptions: [
      {
        label: "Contains",
        value: "contains",
      },
      {
        label: "Not Contains",
        value: "notContains",
      },
      {
        label: "equals",
        value: "equals",
      },
      {
        label: "Not Equals",
        value: "notEquals",
      },
      {
        label: "Starts With",
        value: "startsWith",
      },
      {
        label: "Ends With",
        value: "endsWith",
      },
      {
        label: "Blank",
        value: "blank",
      },
      {
        label: "Not Blank",
        value: "notBlank",
      },
    ],
  },
  number: {
    inputType: "number",
    filterOptions: [
      { label: "Equals", value: "equals" },
      { label: "Not equal", value: "notEqual" },
      { label: "Less than", value: "lessThan" },
      { label: "Less than or equals", value: "lessThanOrEqual" },
      { label: "Greater than", value: "greaterThan" },
      { label: "Greater than or equals", value: "greaterThanOrEqual" },
      { label: "In range", value: "inRange" },
      { label: "Blank", value: "blank" },
      { label: "Not blank", value: "notBlank" },
    ],
  },

  date: {
    inputType: "date",
    filterOptions: [
      { label: "Equals", value: "equals" },
      { label: "Not equal", value: "notEqual" },
      { label: "Less than", value: "lessThan" },
      { label: "Greater than", value: "greaterThan" },
      { label: "In range", value: "inRange" },
      { label: "Blank", value: "blank" },
      { label: "Not blank", value: "notBlank" },
    ],
  },
};
