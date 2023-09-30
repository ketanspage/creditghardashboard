import data from "../../../data.json";

function TemplatePointers() {
  const {
    landingIntro: { templatePointers },
  } = data;

  return (
    <>
      <h1 className="text-2xl mt-8 font-bold">
        {templatePointers.pointersHeading}
      </h1>
      {templatePointers.pointerParagraphs.map((point, i) => (
        <p
          className={`py-2 ${i === 0 ? "mt-4" : ""} ${
            i === templatePointers.length - 1 ? "mb-4" : ""
          } `}
          key={i}
        >
          ✓ {point.title}{" "}
          <span className="font-semibold">{point.semiBoldTitle}</span>{" "}
          {point.normalTitle}
        </p>
      ))}
      {/* 
      <p className="py-2  mb-4">
        ✓ <span className="font-semibold">Daisy UI</span> components,{" "}
        <span className="font-semibold">Tailwind CSS</span> support
      </p> */}
    </>
  );
}

export default TemplatePointers;
// function TemplatePointers(){
//     return(
//         <>
//          <h1 className="text-2xl mt-8 font-bold">Admin Dashboard Starter Kit</h1>
//           <p className="py-2 mt-4">✓ <span className="font-semibold">Light/dark</span> mode toggle</p>
//           <p className="py-2 ">✓ <span className="font-semibold">Redux toolkit</span> and other utility libraries configured</p>
//           <p className="py-2">✓ <span className="font-semibold">Calendar, Modal, Sidebar </span> components</p>
//           <p className="py-2  ">✓ User-friendly <span className="font-semibold">documentation</span></p>
//           <p className="py-2  mb-4">✓ <span className="font-semibold">Daisy UI</span> components, <span className="font-semibold">Tailwind CSS</span> support</p>
//         </>
//     )
// }

// export default TemplatePointers
