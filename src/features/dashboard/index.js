import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import { TbHandClick } from "react-icons/tb";
import { HiUserCircle } from "react-icons/hi";
import { CiLogin } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { HiBadgeCheck } from "react-icons/hi";
import { CgArrowRight } from "react-icons/cg";
import { LiaRupeeSignSolid } from "react-icons/lia";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
import jsondata from '../../data.json'
import BarChart from "../../components/charts/BarChart";

const {dashboard:{horizontalChartData,statsData}}=jsondata
/*const statsData = [
  {
    title: "Total accounts",
    value: "23.1k",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: "",
  },
  {
    title: "Total engaged",
    value: "7k",
    icon: <TbHandClick className="w-8 h-8" />,
    description: "(32.87%)",
  },
  {
    title: "Total login",
    value: "1.7k",
    icon: <CiLogin className="w-8 h-8" />,
    description: "(7.84%)",
  },
  {
    title: "Total engaged",
    value: "901",
    icon: <LiaRupeeSignSolid className="w-8 h-8" />,
    description: "(4.24%)",
  },
  {
    title: "Total Resolved",
    value: "7.8k",
    icon: <HiBadgeCheck className="w-8 h-8" />,
    description: "",
  },
];*/

function DashboardStyle({
  title,
  value,
  icon,
  description,
  icondescription,
  colorIndex,
}) {
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
                <div className="text-center">
                  {icon}
                  {icondescription}
                </div>
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

function Dashboard() {
    const iconMapping = {
        UserGroupIcon,
        TbHandClick,
        HiUserCircle,
        CiLogin,
        HiOutlineCurrencyRupee,
        HiBadgeCheck,
        CgArrowRight,
        LiaRupeeSignSolid,
      };
    
  return (
    <>
      <h1 className="text-2xl font-bold">Portfolio Overview</h1>
      <br />
      <div className="flex items-center">
        <HiUserCircle className="w-8 h-8 text-blue-500 " />
        <CgArrowRight className="w-8 h-8" />
        <HiOutlineCurrencyRupee className="w-8 h-8 mr-2" />
        <p className="mr-2 text-blue-500">|</p>{" "}
        <h5 className="text-blue-500">By Accounts</h5>
      </div>

      <br />
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"
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
      <BarChart
          cardTitle={"Accounts"}
          labels={[
            "0k-10k",
            "10k-20k",
            "20k-50k",
            "50k-1lac",
            "above 1lac",
          ]}
          label1="Accounts issued"
          label2="Accounts resolved"
        />
      </div>
    </>
  );
}

export default Dashboard;
