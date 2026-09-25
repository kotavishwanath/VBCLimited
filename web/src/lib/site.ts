import {
  BookOpenCheck,
  Code2,
  GitMerge,
  LayoutDashboard,
  Layers,
  Network,
  Palette,
  Plug,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Tags,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "VBC Limited",
  legalName: "Versatile Business Consultants Ltd",
  url: "https://www.vbclimited.com",
  description:
    "VBC Ltd is a leading IT staffing solution provider in the UK and India, with an expert recruitment and staffing team and in-house software, mobile and web development.",
  tagline: "We are a dedicated team of professionals with a combined experience.",
  email: "jobs@vbclimited.com",
  phone: "+44 7411 983553",
  phoneHref: "tel:+447411983553",
  address: ["41 Ashpole Avenue", "Wootton, Bedford", "MK43 9EG, United Kingdom"],
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=41+Ashpole+Avenue+Wootton+Bedford+MK43+9EG",
  since: 2017,
};

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#automation", label: "Automation" },
  { href: "/careers", label: "Careers" },
];

export const capabilities = [
  "Permanent Recruitment",
  "Contract Staffing",
  "Mobile Apps",
  "Web Design & Hosting",
  "Cloud Accounting",
  "Inventory Software",
  "Custom Applications",
  "Test Automation",
  "Selenium",
  "Performance Testing",
  "Security Testing",
  "Continuous Integration",
];

export const stats = [
  { value: 2, suffix: "", label: "Countries", detail: "Teams in the UK & India" },
  { value: 6, suffix: "", label: "Service lines", detail: "From hiring to hosting" },
  { value: 8, suffix: "", label: "QA disciplines", detail: "Functional to security" },
  { value: 50, suffix: "%+", label: "Cost savings", detail: "With our automation framework" },
];

export type Service = {
  title: string;
  icon: LucideIcon;
  body?: string;
  items?: string[];
  tags?: string[];
  link?: { href: string; label: string };
  wide?: boolean;
  className: string;
};

export const services: Service[] = [
  {
    title: "Recruitment Services",
    icon: Users,
    body: "As the employer of choice for some of the world’s leading organisations, VBC is a key player in providing a comprehensive array of workforce solutions — consulting and recruitment on a permanent, temporary-to-hire and temporary placement basis.",
    tags: ["Permanent", "Temp-to-hire", "Temporary", "Consulting"],
    className: "md:col-span-2",
  },
  {
    title: "Professional Manpower Solution",
    icon: Network,
    body: "VB Consulting Service (UK) was established in London with the motto of understanding human values — supporting clients to achieve their business objectives in every sphere of operations.",
    className: "",
  },
  {
    title: "Software Development",
    icon: Code2,
    items: [
      "Inventory Software",
      "Cloud Accounting Software",
      "Client-Driven Solutions",
      "Performance Engineering & Project Risk Estimation",
      "Custom Application Development",
    ],
    className: "",
  },
  {
    title: "Mobile Apps Development",
    icon: Smartphone,
    body: "Your enterprise may be dealing with hundreds of applications. We streamline application management for maximum efficiency and control — maintenance, re-engineering, migration and testing.",
    className: "",
  },
  {
    title: "Web Designing & Hosting",
    icon: Palette,
    body: "Intuitive, effective interfaces help an organisation succeed early. We design applications that suit your business, selecting and implementing the right navigation models to build structures people understand instantly.",
    className: "",
  },
  {
    title: "Quality Assurance",
    icon: ShieldCheck,
    body: "End-to-end testing that keeps releases reliable — from functional checks to security, backed by our own Test Automation Framework.",
    items: [
      "Functional Testing",
      "Test Automation",
      "Compatibility Testing",
      "Performance Testing",
      "Regression Testing",
      "Security Testing",
      "Selenium Testing",
      "Testing Center of Excellence",
    ],
    link: { href: "/#automation", label: "Explore our automation framework" },
    wide: true,
    className: "md:col-span-2 lg:col-span-3",
  },
];

export const tafFeatures: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Smart tagging",
    body: "Tag test cases so they can be selected for execution based on release objectives.",
    icon: Tags,
  },
  {
    title: "Continuous integration",
    body: "CI testing with leading CI server tools and multiple test data sources.",
    icon: GitMerge,
  },
  {
    title: "Broad compatibility",
    body: "Works with leading ERPs, packaged solutions, web, mobile and thick-client apps.",
    icon: Layers,
  },
  {
    title: "Reusable keywords",
    body: "A large keyword repository — a scalable knowledge base that promotes reuse.",
    icon: BookOpenCheck,
  },
  {
    title: "Live dashboards",
    body: "In-depth visibility into project status, execution results and analysis reports.",
    icon: LayoutDashboard,
  },
  {
    title: "Single-point maintenance",
    body: "Reduces operating cost and overall testing time for a quicker ROI.",
    icon: Wrench,
  },
  {
    title: "Full regression",
    body: "Comprehensive regression for major and minor releases to lift overall quality.",
    icon: RefreshCcw,
  },
  {
    title: "Open integrations",
    body: "Integrates with open and commercial tools to validate complex business processes.",
    icon: Plug,
  },
];

export const pillars = [
  { title: "Process excellence", body: "Repeatable, measurable delivery on every engagement." },
  { title: "Quality framework", body: "Quality built in from the first requirement to release." },
  { title: "Service delivery", body: "Domain expertise focused on your business objectives." },
  { title: "Long-term partnership", body: "Relationships measured in years, not projects." },
];
