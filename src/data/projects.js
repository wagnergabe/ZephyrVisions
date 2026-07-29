import thermalPreview from "../assets/thermal_back.png";

export const PROJECTS = {
  "ZV-DEMO-2026": {
    code: "ZV-DEMO-2026",
    client: "Acme Roofing",
    project: "Commercial Roof Inspection",
    projectType: "Thermal Roof Inspection",
    delivered: "July 2026",
    updated: "July 2026",
    status: "Ready for download",
    description:
      "Aerial photographs, thermal imagery, inspection video, and final project documentation.",
    deliverables: [
      { label: "Aerial photos", icon: "photo" },
      { label: "Inspection video", icon: "video" },
      { label: "Thermal imagery", icon: "thermal" },
      { label: "Final report", icon: "report" },
    ],
    thumbnail: thermalPreview,
    deliveryUrl: "YOUR_NEXTCLOUD_SHARE_LINK",
  },
};