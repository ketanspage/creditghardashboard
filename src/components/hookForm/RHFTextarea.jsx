import { useFormContext, Controller } from "react-hook-form";
import PropTypes from "prop-types";

RHFTextarea.propTypes = {
  name: PropTypes.string,
  labelTitle: PropTypes.string,
  labelStyle: PropTypes.string,
  containerStyle: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default function RHFTextarea({
  name,
  labelTitle,
  labelStyle,
  containerStyle,
  required = false,
  placeholder,
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: required }}
      render={({
        field: { onChange, onBlur, value,ref  },
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
          <textarea
            value={value}
            placeholder={placeholder}
            className={`input input-bordered ${
              error && "input-error"
            }`}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
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


