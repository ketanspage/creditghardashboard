import TemplatePointers from "./components/TemplatePointers";

import jsonData from "../../data.json";

function LandingIntro() {
  const { landingIntro } = jsonData;

  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold ">
            <img
              src={landingIntro.imgUrl}
              className="w-12 inline-block mr-2 mask mask-circle"
              alt={landingIntro.alt}
            />
            {landingIntro.title}
          </h1>

          <div className="text-center mt-12">
            <img
              src={landingIntro.templatePointers.imgUrl}
              alt={landingIntro.templatePointers.alt}
              className="w-48 inline-block"
            ></img>
          </div>

          {/* Importing pointers component */}
          <TemplatePointers />
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;