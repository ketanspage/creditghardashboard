// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const recovery = lazy(() => import("../pages/protected/recovery"));
const campaign = lazy(() => import("../pages/protected/Campaign.js"));
const smscampaign = lazy(() => import("../pages/protected/SmsCampaign.js"));
const usercampaign = lazy(() => import("../pages/protected/usercampaign"));
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));
const Blank = lazy(() => import("../pages/protected/Blank"));
const Charts = lazy(() => import("../pages/protected/Charts"));
const Leads = lazy(() => import("../pages/protected/Leads"));
const Integration = lazy(() => import("../pages/protected/Integration"));
const Calendar = lazy(() => import("../pages/protected/Calendar"));
const Team = lazy(() => import("../pages/protected/Team"));
const Transactions = lazy(() => import("../pages/protected/Transactions"));
const Bills = lazy(() => import("../pages/protected/Bills"));
const Buckets = lazy(() => import("../pages/protected/Bucket"));
const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const History = lazy(() => import("../pages/protected/History"));
const Library = lazy(() => import("../pages/protected/Library"));
const BankData = lazy(() => import("../pages/protected/BankData"));
const CampaignScheduler = lazy(() =>
  import("../pages/protected/CampaignScheduler")
);
const CampaignJourneyBuilder = lazy(() =>
  import("../pages/protected/CampaignJourneyBuilder")
);
const CampaignFunnelDashboard = lazy(() =>
  import("../pages/protected/CampaignFunnelDashboard")
);
const LeadDetailById = lazy(() => import("../pages/protected/LeadDetailById"));

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },

  {
    path: "/recovery", // the url
    component: recovery, // view rendered
  },
  {
    path: "/smscampaign", // the url
    component: smscampaign, // view rendered
  },
  {
    path: "/campaign", // the url
    component: campaign, // view rendered
  },
  {
    path: "/usercampaign", // the url
    component: usercampaign, // view rendered
  },
  {
    path: "/teams",
    component: Team,
  },
  {
    path: "/History",
    component: History,
  },
  {
    path: "/Library",
    component: Library,
  },
  {
    path: "/BankData",
    component: BankData,
  },
  {
    path: "/CampaignScheduler",
    component: CampaignScheduler,
  },
  {
    path: "/CampaignJourneyBuilder",
    component: CampaignJourneyBuilder,
  },
  {
    path: "/CampaignFunnelDashboard",
    component: CampaignFunnelDashboard,
  },

  {
    path: "/welcome", // the url
    component: Welcome, // view rendered
  },
  {
    path: "/leads",
    component: Leads,
    children: [
      {
        path: "",
        component:Leads,
      },
      {
        path: ":leadId",
        component: LeadDetailById,
      },
      {
        path: ":leadId/bucket/:dataSetBucketId",
        component: Buckets
      }
    ],
  },
  {
    path: "/settings-team",
    component: Team,
  },
  {
    path: "/calendar",
    component: Calendar,
  },
  {
    path: "/transactions",
    component: Transactions,
  },
  {
    path: "/settings-profile",
    component: ProfileSettings,
  },
  {
    path: "/settings-billing",
    component: Bills,
  },
  {
    path: "/getting-started",
    component: GettingStarted,
  },

  {
    path: "/integration",
    component: Integration,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
];

export default routes;
