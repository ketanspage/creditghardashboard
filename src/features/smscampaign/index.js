import { MdOutlineCampaign } from "react-icons/md";
import { MdPresentToAll } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { LiaPercentageSolid } from "react-icons/lia";
import { TbHandClick } from "react-icons/tb";
import { BiUserPlus } from "react-icons/bi";
import Table from "./logsData/Table";
import jsondata from "../../data.json";
import Button from "../../components/buttons/Button";

const {
  smsCampaign: { title, statsData, buttons },
} = jsondata;

function DashboardStyle({ title, value, icon, description, colorIndex }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md`}
      style={{ minHeight: "100px" }}
    >
      <div
        className="flex flex-col"
        style={{ padding: "-1.75rem", marginLeft: "10px" }}
      >
        <div style={{ display: "flex" }}>
          <div className="flex space-x-2">
            <div
              className="bg-blue-500 w-25 h-25 flex justify-center items-center rounded-bl-lg rounded-br-lg text-white shadow-md"
              style={{ width: "80px", height: "61px" }}
            >
              <div className="grid items-center">
                <div className="text-center">{icon}</div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <p
              className="text-xl font-semibold mt-2"
              style={{ marginLeft: "10px" }}
            >
              {title}
            </p>
            <div className="ml-4">
              <div
                className="flex items-center justify-between space-x-2 mt-auto"
                style={{ marginTop: "30px", marginRight: "8px" }}
              >
                <div className="text-l text-blue-500">{value}</div>
                <div className="text-blue-500 text-right">{description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function smsCampaign() {
  const iconMapping = {
    MdOutlineCampaign,
    MdPresentToAll,
    AiOutlineCheckCircle,
    LiaPercentageSolid,
    TbHandClick,
    BiUserPlus,
    LiaPercentageSolid,
    BiUserPlus,
  };
  return (
    <>
      <h1 className="text-2xl font-bold">{title}</h1>
      <br />
      <div className="flex items-center justify-between">
        <div className={`flex items-center space-x-2 float-right ml-auto`}>
          {buttons.map((button) => (
            <Button title={button.title} buttonClassName={"float-right mr-2"} />
          ))}
        </div>
      </div>
      <div
        className={`grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-4`}
        style={{ minHeight: "100px" }}
      >
        {statsData.map((d, k) => {
          const IconComponent = iconMapping[d.icon]; // Get the icon component based on the icon name
          return (
            <DashboardStyle
              key={k}
              title={d.title}
              value={d.value}
              icon={<IconComponent className="w-8 h-8" />} // Render the icon component
              description={d.description}
              colorIndex={k}
            />
          );
        })}
      </div>
      <div className="grid lg:grid-cols-1 mt-4 grid-cols-1 gap-6">
        <Table />
      </div>
    </>
  );
}
export default smsCampaign;
