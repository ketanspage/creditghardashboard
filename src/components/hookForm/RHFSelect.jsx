import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";

RHFSelect.propTypes = {
  name: PropTypes.string,
  labelTitle: PropTypes.string,
  labelStyle: PropTypes.string,
  containerStyle: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default function RHFSelect({
  name,
  labelTitle,
  labelStyle,
  containerStyle,
  required = false,
  options,
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <div className={`form-control w-full ${containerStyle}`}>
          <label className="label">
            <span
              className={`label-text text-base-content  ${
                error ? "text-error" : ""
              }  ${labelStyle}`}
            >
              {labelTitle}
            </span>
          </label>
          <select
            className={`select select-bordered ${error ? "select-error" : ""}`}
            value={value || ""} // Set value to empty string if undefined or null
            onChange={(e) => onChange(e.target.value)}
            onBlur={onBlur}
            ref={ref}
          >
            <option value="">Select an option</option> {/* Optional default option */}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {!!error && (
            <label className="label">
              <span className="label-text-alt text-error">{error.message}</span>
            </label>
          )}
        </div>
      )}
    />
  );
}