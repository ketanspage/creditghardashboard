export function parseValue(value) {
  if (value !== undefined && value.length > 0) {
    const dateValue = new Date(value);
    
    // Check if the parsed date is valid
    if (!isNaN(dateValue.getTime())) {
      return dateValue;
    }

    // If parsing as a date fails, check if the value consists of digits only
    if (/^\d+$/.test(value)) {
      return Number(value); // Parse as a number
    }
  }
  return undefined;
}
export const formatDate = (date) => {
    const d = new Date(date);
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };
  