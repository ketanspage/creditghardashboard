import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingIntro from "./LandingIntro";

// data source
import jsonData from "../../data.json";

// hook form
import { FormProvider, RHFInput } from "../../components/hookForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "./slice/authSlice";

const INITIAL_LOGIN_OBJ = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginPage } = jsonData;
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email(loginPage.errorMessage.emailInvalid)
      .required(loginPage.errorMessage.emailRequired),
    password: Yup.string().required(loginPage.errorMessage.passwordRequired),
    // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {message: "Password should be minimum 8 in length and at least one letter and number", excludeEmptyString: false}),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: INITIAL_LOGIN_OBJ,
  });

  const { handleSubmit, setError } = methods;

  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      const data = methods.getValues();
      dispatch(login(data))
        .unwrap()
        .then((res) => {
          setLoading(false);
          localStorage.setItem("token", res.tokens.access.token);
          navigate("/app/dashboard");
        })
        .catch((error) => {
          setLoading(false);
          switch (error.code) {
            case "ERR_BAD_REQUEST":
              setError("email", {
                type: "AuthFail",
                message: loginPage.errorMessage.wrongEmailorPassword,
              });
              break;
          }
        });
    } catch (error) {
      switch (error.code) {
        case "ERR_BAD_REQUEST":
          setError("email", {
            type: "AuthFail",
            message: loginPage.errorMessage.wrongEmailorPassword,
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
              {loginPage.heading}
            </h2>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              {loginPage.input.map((inputText) => (
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
              <div className="text-right text-primary mt-4">
                <Link to="/forgot-password">
                  <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    {loginPage.forgotPassword}
                  </span>
                </Link>
              </div>

              <button
                type="submit"
                className={"btn btn-primary w-full mt-8"}
                disabled={loading}
              >
                {loading && (
                  <span className="loading loading-spinner text-primary"></span>
                )}
                {!loading && loginPage.button}
              </button>

              <div className="text-center mt-4">
                {loginPage.register.title}{" "}
                <Link to="/register">
                  <span className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                    {loginPage.register.subTitle}
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

export default Login;
