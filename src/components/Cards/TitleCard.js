import Subtitle from "../Typography/Subtitle";

import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";

function TitleCard({
  title,
  children,
  topMargin = "mt-6",
  className = "",
  TopSideButtons,
  isDownload = false,
  tooltip = "",
  handleClick,
}) {
  return (
    <div
      className={`card w-full p-6 bg-base-100 shadow-xl ${topMargin} ${className}`}
    >
      {/* Title for Card */}
      <Subtitle
        styleClass={"flex flex-row justify-between items-center align-center"}
      >
        {title}

        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className="flex align-center items-center">{TopSideButtons}</div>
        )}
        {isDownload && (
          <div className="tooltip " data-tip={tooltip}>
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-circle  btn-primary"
            >
              <ArrowDownTrayIcon className="w-6 h-6" />
            </button>
          </div>
        )}
      </Subtitle>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className="h-full w-full pb-6 bg-base-100">{children}</div>
    </div>
  );
}

export default TitleCard;
