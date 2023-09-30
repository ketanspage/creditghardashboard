import Subtitle from "../Typography/Subtitle";

function CustomCard({
  title = "",
  children,
  cardContainerClassName = "",
  cardBodyClassName = "",
  cardTitleClassName = ``,
}) {
  return (
    <div
      className={`card w-full bg-base-100 shadow-xl bg-blue-500 ${cardContainerClassName}`}
    >
      <div
        className={`card-body items-center text-center  ${cardBodyClassName}`}
      >
        <h2 className={`card-title text-white ${cardTitleClassName}`}>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

export default CustomCard;
