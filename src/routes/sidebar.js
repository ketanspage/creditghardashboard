/** Icons are imported separatly to reduce build time */
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import DocumentTextIcon from "@heroicons/react/24/outline/DocumentTextIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiReset } from "react-icons/bi";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import CodeBracketSquareIcon from "@heroicons/react/24/outline/CodeBracketSquareIcon";
import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import BoltIcon from "@heroicons/react/24/outline/BoltIcon";
import ChartBarIcon from "@heroicons/react/24/outline/ChartBarIcon";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { VscHistory } from "react-icons/vsc";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineBank } from "react-icons/ai";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { GrSchedules } from "react-icons/gr";
import { GiJourney } from "react-icons/gi";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;
/*text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150*/
const routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },

  /*{
    path: "/app/recovery",
    icon: <BiReset className={iconClasses} />,
    name: "Recovery",
  },*/
  {
    path: "",
    icon: <HiOutlineSpeakerphone className={`${iconClasses} inline`} />,
    name: "Campaign",
    submenu: [
      {
        path: "/app/campaign",
        icon: <DocumentTextIcon className={submenuIconClasses} />,
        name: "Campaign Overview",
      },
      {
        path: "/app/smscampaign",
        icon: <DocumentIcon className={submenuIconClasses} />,
        name: "SMS Campaign",
      },
      {
        path: "/app/usercampaign",
        icon: <BiUserPlus className={submenuIconClasses} />,
        name: "User Campaign",
      },
      {
        path: "/app/CampaignScheduler",
        icon: <GrSchedules className={iconClasses} />,
        name: "Campaign Scheduler",
      },
      {
        path: "/app/CampaignJourneyBuilder",
        icon: <GiJourney className={iconClasses} />,
        name: "Campaign journey Builder",
      },
      {
        path: "/app/CampaignFunnelDashboard",
        icon: <LiaFunnelDollarSolid className={iconClasses} />,
        name: "Campaign Funnel Dashboard",
      },
    ],
  },
  /*{
    path: "/app/teams",
    icon: <AiOutlineTeam className={iconClasses} />,
    name: "Teams",
  },*/
  {
    path: "/app/History",
    icon: <VscHistory className={iconClasses} />,
    name: "History",
  },
  {
    path: "/app/Library",
    icon: <IoLibraryOutline className={iconClasses} />,
    name: "Library",
  },
  /*{
    path: "/app/BankData",
    icon: <AiOutlineBank className={iconClasses} />,
    name: "Bank Data",
  },*/

  /*{
    path: "/app/leads", // url
    icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
    name: "Leads", // name that appear in Sidebar
  },*/
  // {
  //   path: "/app/transactions", // url
  //   icon: <CurrencyDollarIcon className={iconClasses} />, // icon component
  //   name: "Transactions", // name that appear in Sidebar
  // },
  {
    path: "/app/charts", // url
    icon: <ChartBarIcon className={iconClasses} />, // icon component
    name: "Analytics", // name that appear in Sidebar
  },
  // {
  //   path: "/app/integration", // url
  //   icon: <BoltIcon className={iconClasses} />, // icon component
  //   name: "Integration", // name that appear in Sidebar
  // },
  // {
  //   path: "/app/calendar", // url
  //   icon: <CalendarDaysIcon className={iconClasses} />, // icon component
  //   name: "Calendar", // name that appear in Sidebar
  // },

  // {
  //   path: "", //no url needed as this has submenu
  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
  //   name: "Pages", // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: "/login",
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: "Login",
  //     },

  //     {
  //       path: "/register", //url
  //       icon: <UserIcon className={submenuIconClasses} />, // icon component
  //       name: "Register", // name that appear in Sidebar
  //     },
  //     {
  //       path: "/forgot-password",
  //       icon: <KeyIcon className={submenuIconClasses} />,
  //       name: "Forgot Password",
  //     },
  //     {
  //       path: "/app/blank",
  //       icon: <DocumentIcon className={submenuIconClasses} />,
  //       name: "Blank Page",
  //     },
  //     {
  //       path: "/app/404",
  //       icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
  //       name: "404",
  //     },
  //   ],
  // },
  // {
  //   path: "", //no url needed as this has submenu
  //   icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
  //   name: "Settings", // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: "/app/settings-profile", //url
  //       icon: <UserIcon className={submenuIconClasses} />, // icon component
  //       name: "Profile", // name that appear in Sidebar
  //     },
  //     {
  //       path: "/app/settings-billing",
  //       icon: <WalletIcon className={submenuIconClasses} />,
  //       name: "Billing",
  //     },
  //     {
  //       path: "/app/settings-team", // url
  //       icon: <UsersIcon className={submenuIconClasses} />, // icon component
  //       name: "Team Members", // name that appear in Sidebar
  //     },
  //   ],
  // },
];

export default routes;
