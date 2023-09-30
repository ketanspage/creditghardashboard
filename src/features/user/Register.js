import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingIntro from "./LandingIntro";

import jsonData from "../../data.json";

// hook form
import { FormProvider, RHFInput } from "../../components/hookForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { USER_TYPE } from "../../constants";
import { register } from "./slice/authSlice";
import { useDispatch } from "react-redux";

const INITIAL_REGISTER_OBJ = {
  name: "",
  password: "",
  email: " ",
  confirmPassword: "",
  designation: "",
  dob: "",
  phoneNo: "",
};

function Register() {
  const { registerPage } = jsonData;
  const dispatch = useDispatch();
  const navigate =  useNavigate()
  const [loading, setLoading] = useState(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(registerPage.errorMessage.nameRequired),
    email: Yup.string()
      .email(registerPage.errorMessage.emailInvalid)
      .required(registerPage.errorMessage.emailRequired),
    password: Yup.string()
      .required(registerPage.errorMessage.passwordRequired)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[.@$!%*#?&])[A-Za-z\d.@$!%*#?&]{9,}$/,
        {
          message:
            "Password should be minimum 8 in length and at least 1 letter 1 number and 1 Character",
          excludeEmptyString: false,
        }
      ),
    confirmPassword: Yup.string()
      .required(registerPage.errorMessage.confirmPassword)
      .oneOf([Yup.ref("password")], registerPage.errorMessage.notMatch),
    designation: Yup.string().required(
      registerPage.errorMessage["designation"]
    ),
    phoneNo: Yup.string()
      .matches(/^(\+[\d]{1,5}|0)?[0-9]+$/, "Phone Number must be number")
      .required(registerPage.errorMessage.phoneNo),
    dob: Yup.date()
      .required(registerPage.errorMessage.dob)
      .nullable()
      .max(new Date()),
  });

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues: INITIAL_REGISTER_OBJ,
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = async () => {
    try {
      setLoading(true);
      const data = methods.getValues();
      data["userType"] = USER_TYPE.CREDIT_GHAR;
      data["statusId"] = 1;
      dispatch(register(data))
        .unwrap()
        .then((res) => {
          setLoading(false);
          localStorage.setItem("token", res.tokens.access.token);
          navigate("/app/welcome");
        });
    } catch (error) {
      switch (error.code) {
        case "ERR_BAD_REQUEST":
          setError("email", {
            type: "AuthFail",
            message: registerPage.errorMessage.wrongEmailorPassword,
          });
          break;
      }
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10 flex flex-col justify-center item-center">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {registerPage.heading}
            </h2>

            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                {registerPage.input.map((inputText) => (
                  <RHFInput
                    key={inputText.name}
                    name={inputText.name}
                    labelTitle={inputText.label}
                    labelStyle=""
                    containerStyle="mt-4"
                    type={inputText.type}
                    placeholder={inputText.placeholder}
                  />
                ))}
              </div>
              <button
                type="submit"
                className={"btn w-full btn-primary mt-8"}
                disabled={loading}
              >
                {loading && (
                  <span className="loading loading-spinner text-primary"></span>
                )}
                {registerPage.button}
              </button>
              <div className="text-center mt-4">
                {registerPage.alreayAccount}{" "}
                <Link to="/login">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    {registerPage.login}
                  </span>
                </Link>
              </div>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
