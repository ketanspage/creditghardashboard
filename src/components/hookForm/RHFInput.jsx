import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";

RHFInput.propTypes = {
  name: PropTypes.string,
  labelTitle: PropTypes.string,
  labelStyle: PropTypes.string,
  containerStyle: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default function RHFInput({
  name,
  labelTitle,
  labelStyle,
  containerStyle,
  required = false,
  type,
  placeholder,
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
          <input
            type={type || "text"}
            value={value}
            placeholder={placeholder}
            className={`input input-bordered ${
              error && "input-error"
            }`}
            onChange={onChange}
            ref={ref}
          />
          {!!error && (
            <label className="label">
              <span className="label-text-alt text-error">{error.message}</span>
              {/* <span className="label-text-alt">Bottom Right label</span> */}
            </label>
          )}
        </div>
      )}
    />
  );
}
