import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import CommunityStories from "./pages/CommunityStories/CommunityStories";
import CommunityStoryDetail from "./pages/CommunityStories/CommunityStoryDetail";
import CampaignsAdvocacy from "./pages/CampaignsAdvocacy/CampaignsAdvocacy";
import CampaignDetail from "./pages/CampaignsAdvocacy/CampaignDetail";
import OurWork from "./pages/OurWork/OurWork";
import NotFound from "./pages/NotFound/NotFound";

export const router = createHashRouter([
  {
    element: <App />, // Navbar + <Outlet /> + Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/get-involved", element: <GetInvolved /> },
      { path: "/community-stories", element: <CommunityStories /> },
      { path: "/community-stories/:slug", element: <CommunityStoryDetail /> },
      { path: "/campaigns-advocacy", element: <CampaignsAdvocacy /> },
      { path: "/campaigns-advocacy/:slug", element: <CampaignDetail /> },
      { path: "/our-work", element: <OurWork /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
