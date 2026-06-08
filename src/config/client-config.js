export const client = {
  name: "Deepak Products",
  tagline: "One stop solution for sheet metal & brass components",
  description:
    "Jamnagar-based sheet metal stamping & brass components manufacturer since 1985. ISO 9001:2015 certified, serving 700+ clients across 10+ countries.",
  founded: "1985",
  founder: "Rasikbhai K. Bhut",
  location: "Jamnagar, Gujarat, India",
  address: "Plot No 4219, Road–F, G.I.D.C. Phase–III, Dared, Jamnagar–361 005, Gujarat, India",

  contact: {
    phone: "+91 96627 13385",
    phoneAlt: "+91 88667 51091",
    phoneRaw: "+919662713385",
    whatsapp: "+919662713385",
    email: "sales@deepakproducts.com",
    emailAlt: "pratik@deepakproducts.com",
  },

  brand: {
    primary: "#B8860B",
    primaryDark: "#9A6F09",
    primaryLight: "#D4A017",
    secondary: "#1C2B3A",
    secondaryDark: "#111D28",
    secondaryLight: "#243447",
    fontSerif: "'Fraunces', Georgia, serif",
    fontSans: "'Inter', system-ui, sans-serif",
    logo: "/assets/img/logo/logo.svg",
    logoOnLight: "/assets/img/logo/logo-on-light.svg",
    googleFonts: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap",
  },

  hero: {
    label: "Est. 1985 · Jamnagar, India",
    title: ["Sheet Metal &", "Brass Components", "Engineered in Jamnagar,", "Trusted Worldwide"],
    titleHighlight: "Brass Components",
    subtitle:
      "Four decades of precision sheet metal stamping and brass component manufacturing. ISO 9001:2015 certified. One stop solution trusted by 700+ clients across 10+ countries.",
    image: "/assets/img/about/factory.jpg",
  },

  stats: [
    { value: 650, suffix: "+", label: "Finished Products" },
    { value: 700, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Countries Served" },
    { value: 40, suffix: "", label: "Years of Excellence" },
  ],

  // 6 showcase products (each maps to a real photo)
  products: [
    {
      id: "mcb-parts",
      icon: "Zap",
      image: "/assets/img/home_products/mcb_part.jpg",
      title: "MCB Parts",
      desc: "Terminal cages, bi-metal strips, and precision MCB components stamped to exacting tolerances for circuit breaker assemblies.",
      alt: "MCB Parts – Terminal Cage components manufactured by Deepak Products, Jamnagar",
    },
    {
      id: "brass-electrical-components",
      icon: "Cable",
      image: "/assets/img/home_products/electrical_components.jpg",
      title: "Brass Electrical Components",
      desc: "Lugs, pins, terminals, and connectors machined from high-grade brass for switchgear, panels, and electrical assemblies.",
      alt: "Brass Electrical Components – lugs, pins, terminals by Deepak Products",
    },
    {
      id: "modular-socket-parts",
      icon: "Plug",
      image: "/assets/img/home_products/modular_socket_parts.jpg",
      title: "Modular Socket Parts",
      desc: "6A, 16A, and 6–13A modular socket and switch components for electrical wiring accessory manufacturers.",
      alt: "Brass Modular Socket Parts – 6A, 16A, 6-13A by Deepak Products",
    },
    {
      id: "crimping-lugs",
      icon: "Wrench",
      image: "/assets/img/home_products/crimping_lugs.jpg",
      title: "Crimping Lugs",
      desc: "Brass cable connection lugs in a full range of sizes for reliable, low-resistance electrical terminations.",
      alt: "Crimping Lugs – brass cable connection lugs by Deepak Products",
    },
    {
      id: "brass-turned-components",
      icon: "Settings",
      image: "/assets/img/home_products/brass_turned_components.jpg",
      title: "Brass Turned Components",
      desc: "CNC precision-machined turned parts to your drawings — tolerances held across high-volume production runs.",
      alt: "Brass Turned Components – CNC precision machined parts",
    },
    {
      id: "customized-components",
      icon: "SlidersHorizontal",
      image: "/assets/img/home_products/customized_components.jpg",
      title: "Customized Components",
      desc: "Bespoke sheet metal and brass parts manufactured to your specification, sample, or drawing — from prototype to production.",
      alt: "Customized Components – bespoke metal parts by Deepak Products",
    },
  ],

  // Fuller catalog shown on the products page
  catalog: {
    "Sheet Metal Components": ["MCB Parts", "Brass Electrical Components", "Mortise Lock Parts", "Deep Draw Products", "Brass & MS Washers", "Brass Fuse Components"],
    "Modular Socket & Switch": ["Modular Socket Parts", "Modular Switch Parts", "Modular Pins", "Brass Terminals"],
    "Brass & Machined Parts": ["Crimping Lugs", "Brass Earth Tag", "Brass Turned Components", "Brass Hex Nuts & Bolts", "Brass Moulding Inserts", "Customized Components"],
  },

  industries: [
    { id: "automobile", image: "/assets/img/industries/01.jpg", icon: "Car", title: "Automobile", desc: "Precision brass and sheet metal parts for automotive electrical and mechanical assemblies." },
    { id: "electrical", image: "/assets/img/industries/02.jpg", icon: "Zap", title: "Electrical", desc: "Terminals, lugs, MCB and switchgear components for the electrical equipment industry." },
    { id: "telecommunication", image: "/assets/img/industries/03.jpg", icon: "RadioTower", title: "Telecommunication", desc: "Connectors and precision contacts for telecom hardware and networking equipment." },
    { id: "hardware-locks", image: "/assets/img/industries/04.jpg", icon: "Lock", title: "Hardware & Locks", desc: "Mortise lock parts and brass hardware components for the locks and fittings industry." },
    { id: "home-appliances", image: "/assets/img/industries/05.jpg", icon: "Refrigerator", title: "Home Appliances", desc: "Stamped and turned components for white goods and consumer appliance manufacturers." },
    { id: "sanitary-plumbing", image: "/assets/img/industries/06.jpg", icon: "Droplets", title: "Sanitary & Plumbing", desc: "Brass fittings and components for sanitary ware and plumbing applications." },
    { id: "health-care", image: "/assets/img/industries/07.jpg", icon: "HeartPulse", title: "Health Care", desc: "Precision machined components for medical devices and healthcare equipment." },
  ],

  whyUs: [
    { icon: "Award", title: "40 Years of Expertise", desc: "Since 1985, under the leadership of Rasikbhai K. Bhut, we've built deep expertise across sheet metal stamping and brass components." },
    { icon: "BadgeCheck", title: "ISO 9001:2015 Certified", desc: "Every batch manufactured and tested under a certified quality management system. D-U-N-S® 65-081-4762, NSIC SE3B rated." },
    { icon: "Clock", title: "Fast Turnaround", desc: "Standard items ship quickly; custom components quoted within 24 hours and tooled in our in-house facility." },
    { icon: "Globe", title: "Global Export Experience", desc: "Trusted by 700+ clients across 10+ countries with reliable export documentation and logistics." },
    { icon: "SlidersHorizontal", title: "Custom Engineering", desc: "Send us your drawing or sample. Our tool room and CNC lines manufacture to precise specifications." },
    { icon: "MessageSquare", title: "Dedicated Support", desc: "Direct WhatsApp access to our team. Real people in Jamnagar who know your requirements." },
  ],

  exportCountries: [
    { flag: "🇬🇧", name: "United Kingdom" },
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇮🇹", name: "Italy" },
    { flag: "🇸🇬", name: "Singapore" },
  ],

  certifications: [
    { icon: "ShieldCheck", name: "ISO 9001:2015", desc: "Quality Management System certified" },
    { icon: "FileCheck", name: "D-U-N-S® 65-081-4762", desc: "Dun & Bradstreet verified business" },
    { icon: "Stamp", name: "NSIC SE3B", desc: "NSIC credit rating for small enterprises" },
  ],

  testimonials: [
    {
      quote:
        "Deepak Products has supplied our MCB terminal parts for years. Consistent quality, on-time delivery, and a team that responds on WhatsApp within the hour. Can't ask for more.",
      name: "Mohammed Hassan",
      role: "Procurement Director, Al-Faris Group, UAE",
      initials: "MH",
    },
    {
      quote:
        "We switched our brass electrical components sourcing to Deepak Products and reduced costs without compromising quality. Their ISO documentation makes our audits smooth.",
      name: "James Wilson",
      role: "Supply Chain Manager, Hydroflex UK",
      initials: "JW",
    },
    {
      quote:
        "The custom turned parts they manufactured for our automotive project were perfect on first delivery. Tolerances held across 50,000 pieces. Impressive capability for the price.",
      name: "Rahul Kumar",
      role: "Technical Lead, Bharat Auto Components",
      initials: "RK",
    },
  ],

  seo: {
    titleTemplate: "%s | Deepak Products — Sheet Metal & Brass Components, Jamnagar",
    defaultTitle: "Deepak Products | Sheet Metal & Brass Components Manufacturer in Jamnagar",
    description:
      "Sheet metal stamping & brass components manufacturer in Jamnagar since 1985. MCB parts, electrical components, crimping lugs, turned parts. ISO 9001:2015 certified.",
    keywords: "sheet metal components Jamnagar, brass components manufacturer India, MCB parts manufacturer, brass electrical components, crimping lugs, brass turned components, modular socket parts, Jamnagar brass manufacturer",
    siteUrl: "https://deepakproducts.com",
  },
};
