import web from "../images/web.png";
import android from "../images/android.jpg";
import app from "../images/app.jpg";
import digital from "../images/digital.jpg";
import software from "../images/software.jpg";
import marketing from "../images/marketing.jpg";
import { ImMobile } from "react-icons";
const SData = [
  {
    imgsrc: web,
    title: "Employee Productivity Tracker",
    description:
      " Complete Visibility of your workforce from anywhere, Time Management, Boost Employee Productivity, Activity Tracking, Resource Management and Activity Audit using this Simple Cloud / On-premise solution."
  },
  {
    imgsrc: app,
    title: "Asset Development",
    description:
      " Manage Asset Lifecycle from Procurement to Disposal. Discover, assign, audit, track and manage compliance."
  },
  {
    imgsrc: software,
    title: "Project Development",
    description:
      "Ideal for managing simple TimeSheets to Complext Projects. Efficiently execute and monitor Projects with this simple tool"
  }
];

const CData = [
  {
    title: "Web Solutions",
    icon: <ImMobile />
  },
  {
    title: "Infrastructure Planning ",
    icon: <ImMobile />
  },
  {
    title: "Mobile Apps",
    icon: <ImMobile />
  },
  {
    title: "Consulting (Do More For Less)",
    icon: <ImMobile />
  }
];

export { SData, CData };
