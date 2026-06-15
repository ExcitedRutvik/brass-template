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
    image: "/assets/img/slider/01.jpg",
  },

  stats: [
    { value: 650, suffix: "+", label: "Finished Products" },
    { value: 700, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Countries Served" },
    { value: 40, suffix: "", label: "Years of Excellence" },
  ],

  // Full product range — each has a distinct real photo + per-product detail.
  // The home page shows the first 6 as a showcase; /products shows all.
  products: [
    {
      id: "mcb-parts",
      icon: "Zap",
      image: "/assets/img/home_products/mcb_part.jpg",
      title: "MCB Parts",
      desc: "Terminal cages, bi-metal strips, and precision MCB components stamped to exacting tolerances for circuit breaker assemblies.",
      alt: "MCB Parts – Terminal Cage components manufactured by Deepak Products, Jamnagar",
      materials: "Brass, bi-metal, mild steel",
      applications: ["Miniature circuit breakers", "Distribution boards", "Switchgear assemblies"],
      specs: [["Process", "Progressive stamping"], ["Tolerance", "±0.05 mm"], ["Finishing", "Nickel / tin plating"], ["MOQ", "Prototype to high volume"]],
    },
    {
      id: "brass-electrical-components",
      icon: "Cable",
      image: "/assets/img/home_products/electrical_components.jpg",
      title: "Brass Electrical Components",
      desc: "Lugs, pins, terminals, and connectors machined from high-grade brass for switchgear, panels, and electrical assemblies.",
      alt: "Brass Electrical Components – lugs, pins, terminals by Deepak Products",
      materials: "High-conductivity brass",
      applications: ["Switchgear & panels", "Electrical connectors", "Bus-bar assemblies"],
      specs: [["Process", "Stamping + CNC"], ["Plating", "Nickel / tin / silver"], ["Grades", "Free-cutting & HC brass"], ["Custom", "To drawing / sample"]],
    },
    {
      id: "modular-socket-parts",
      icon: "Plug",
      image: "/assets/img/home_products/modular_socket_parts.jpg",
      title: "Modular Socket Parts",
      desc: "6A, 16A, and 6–13A modular socket and switch components for electrical wiring accessory manufacturers.",
      alt: "Brass Modular Socket Parts – 6A, 16A, 6-13A by Deepak Products",
      materials: "Brass, phosphor bronze",
      applications: ["Modular switches & sockets", "Wiring accessories", "Contact assemblies"],
      specs: [["Ratings", "6A · 16A · 6–13A"], ["Process", "Precision stamping"], ["Contact force", "Tuned to spec"], ["Plating", "Optional"]],
    },
    {
      id: "crimping-lugs",
      icon: "Wrench",
      image: "/assets/img/home_products/crimping_lugs.jpg",
      title: "Crimping Lugs",
      desc: "Brass cable connection lugs in a full range of sizes for reliable, low-resistance electrical terminations.",
      alt: "Crimping Lugs – brass cable connection lugs by Deepak Products",
      materials: "Brass, copper",
      applications: ["Cable terminations", "Power distribution", "Panel wiring"],
      specs: [["Conductor range", "2.5–300 sq mm"], ["Stud holes", "M5–M12"], ["Plating", "Tin (optional)"], ["Type", "Insulated / bare"]],
    },
    {
      id: "brass-turned-components",
      icon: "Settings",
      image: "/assets/img/home_products/brass_turned_components.jpg",
      title: "Brass Turned Components",
      desc: "CNC precision-machined turned parts to your drawings — tolerances held across high-volume production runs.",
      alt: "Brass Turned Components – CNC precision machined parts",
      materials: "Brass, copper, stainless",
      applications: ["Connector bodies", "Fittings & adapters", "Automotive sensor parts"],
      specs: [["Process", "Swiss-type CNC turning"], ["Tolerance", "±0.01 mm"], ["Secondary ops", "Threading, knurling"], ["Volumes", "Prototype to mass"]],
    },
    {
      id: "customized-components",
      icon: "SlidersHorizontal",
      image: "/assets/img/home_products/customized_components.jpg",
      title: "Customized Components",
      desc: "Bespoke sheet metal and brass parts manufactured to your specification, sample, or drawing — from prototype to production.",
      alt: "Customized Components – bespoke metal parts by Deepak Products",
      materials: "Brass, MS, stainless, aluminium",
      applications: ["Custom OEM parts", "Prototyping", "Special assemblies"],
      specs: [["Input", "Drawing / sample"], ["Tooling", "In-house tool room"], ["Lead time", "Quoted in 24h"], ["Quality", "ISO 9001:2015"]],
    },
    {
      id: "sheet-metal-components",
      icon: "Layers",
      image: "/assets/img/products/sheet_metal_components.jpg",
      title: "Sheet Metal Components",
      desc: "Precision sheet-metal stampings — brackets, contacts, clips, and deep-drawn parts produced on progressive press tools.",
      alt: "Sheet Metal Stamping Components by Deepak Products, Jamnagar",
      materials: "Brass, MS, stainless, copper",
      applications: ["Electrical hardware", "Appliance parts", "Deep-drawn shells"],
      specs: [["Process", "Progressive stamping"], ["Thickness", "0.1–3 mm"], ["Tolerance", "±0.05 mm"], ["Finishing", "Plating / passivation"]],
    },
    {
      id: "modular-switch-parts",
      icon: "ToggleRight",
      image: "/assets/img/products/modular_socket_switch_parts.jpg",
      title: "Modular Switch Parts",
      desc: "Contact strips, pins, and brass internals for modular switch ranges, tuned for reliable switching life.",
      alt: "Modular Switch Parts – brass internals by Deepak Products",
      materials: "Brass, phosphor bronze",
      applications: ["Modular switches", "Dimmers & regulators", "Wiring devices"],
      specs: [["Process", "Stamping + forming"], ["Contact life", "High-cycle"], ["Plating", "Silver / tin optional"], ["Custom", "To housing spec"]],
    },
    {
      id: "brass-earth-tag",
      icon: "Anchor",
      image: "/assets/img/products/brass_earth_tag.jpg",
      title: "Brass Earth Tags",
      desc: "Earthing and bonding tags that hold a low-resistance, corrosion-resistant connection for years — indoor or outdoor.",
      alt: "Brass Earth Tags – earthing & bonding components by Deepak Products",
      materials: "High-conductivity brass",
      applications: ["Electrical earthing", "Equipment bonding", "Safety grounding"],
      specs: [["Conductivity", "Low-resistance"], ["Corrosion", "High resistance"], ["Plating", "Optional"], ["Sizes", "Standard & custom"]],
    },
    {
      id: "brass-hex-nuts-bolts",
      icon: "Bolt",
      image: "/assets/img/products/brass_hex_nuts_and_bolts.jpg",
      title: "Brass Hex Nuts & Bolts",
      desc: "Precision brass fasteners — hex nuts, bolts, and washers in standard and custom threads for electrical and general assembly.",
      alt: "Brass Hex Nuts & Bolts by Deepak Products, Jamnagar",
      materials: "Free-cutting brass",
      applications: ["Electrical assembly", "Panel hardware", "General fastening"],
      specs: [["Threads", "Metric / BSW / custom"], ["Process", "CNC + stamping"], ["Finish", "Natural / plated"], ["Volumes", "Bulk supply"]],
    },
    {
      id: "brass-moulding-inserts",
      icon: "CircleDot",
      image: "/assets/img/products/brass_moulding_inserts.jpg",
      title: "Brass Moulding Inserts",
      desc: "Threaded inserts for plastic — heat-set, ultrasonic, and press-fit knurled inserts for strong, reusable threads.",
      alt: "Brass Moulding Inserts – threaded inserts for plastic by Deepak Products",
      materials: "Free-cutting brass",
      applications: ["Plastic housings", "Appliance trim", "Automotive interiors"],
      specs: [["Types", "Heat-set / ultrasonic / press-fit"], ["Knurls", "Straight / diamond / helical"], ["Threads", "M2–M12 & custom"], ["Tolerance", "±0.02 mm"]],
    },
  ],

  // How many showcase cards appear on the home page Products section
  showcaseCount: 6,

  // Full catalog shown on the products page — every item links to a detail page
  catalog: {
    "Sheet Metal Components": [
      { label: "MCB Parts", id: "mcb-parts" },
      { label: "Brass Electrical Components", id: "brass-electrical-components" },
      { label: "Mortise Lock Parts", id: "sheet-metal-components" },
      { label: "Deep Draw Products", id: "sheet-metal-components" },
      { label: "Brass & MS Washers", id: "sheet-metal-components" },
      { label: "Brass Fuse Components", id: "brass-electrical-components" },
    ],
    "Modular Socket & Switch": [
      { label: "Modular Socket Parts", id: "modular-socket-parts" },
      { label: "Modular Switch Parts", id: "modular-switch-parts" },
      { label: "Modular Pins", id: "modular-socket-parts" },
      { label: "Brass Terminals", id: "brass-electrical-components" },
    ],
    "Brass & Machined Parts": [
      { label: "Crimping Lugs", id: "crimping-lugs" },
      { label: "Brass Earth Tag", id: "brass-earth-tag" },
      { label: "Brass Turned Components", id: "brass-turned-components" },
      { label: "Brass Hex Nuts & Bolts", id: "brass-hex-nuts-bolts" },
      { label: "Brass Moulding Inserts", id: "brass-moulding-inserts" },
      { label: "Customized Components", id: "customized-components" },
    ],
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
