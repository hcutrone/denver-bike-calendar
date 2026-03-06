const communityGroups = [
   {
      name: "Bike and Brew Denver",
      logo: "/partners/bike-and-brew.png",
   },
   {
      name: "Chains of Strength",
      logo: "/partners/chains.png",
   },
   {
      name: "Wash Park Crewzers",
      logo: "/partners/crewzers.png",
   },
];

const nonProfits = [
   {
      name: "All Bodies on Bikes",
      logo: "/partners/abob.png",
   },
   {
      name: "Bike Law",
      logo: "/partners/bike-law.png",
   },
   {
      name: "Colorado History Rides",
      logo: "/partners/colorado-history-rides.png",
   },
   {
      name: "Mayor's Bicycling Advisory Committee",
      logo: "/partners/mayors-committee.png",
   },
   {
      name: "Sun Valley Youth Center",
      logo: "/partners/sun-valley-youth-center.webp",
   },
];

const localBusinesses = [
   {
      name: "Campus Cycles",
      logo: "/partners/campus-cycles.png",
   },
   {
      name: "Ben's Cycles",
      logo: "/partners/ben-cycles.png",
   },
   {
      name: "Kidical Mass Denver",
      logo: "/partners/kidical-mass.webp",
   },
   {
      name: "Hardt Family Cyclery",
      logo: "/partners/hardt.png",
   },
   {
      name: "Z Cycle Shop",
      logo: "/partners/zcycle.png",
   },
];

export const partners = [
   { header: "Community Groups", groups: communityGroups },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits,
   },
   { header: "Local Businesses", groups: localBusinesses },
];

export const featuredPartners = [
   { header: "Community Groups", groups: communityGroups.slice(0, 8) },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits.slice(0, 8),
   },
   { header: "Local Businesses", groups: localBusinesses.slice(0, 8) },
];

export const partnerTiers = [
   {
      name: "Community Group",
      color: "var(--orange-accent)",
      price: 35,
      bullets: [
         "For community groups and social group rides",
         "Must align with biking and/or community-building around bikes",
         "6' table provided under community tent",
      ],
      subtext:
         "Registration requires approval to ensure a balanced mix of groups",
   },
   {
      name: "Nonprofit Organization",
      color: "var(--yellow-accent)",
      price: 100,
      bullets: [
         "For nonprofit organizations with bicycle-related work",
         "Demonstrations or workshops welcome",
         "10'x10' booth space (tent, table, and chairs not provided)",
      ],
   },
   {
      name: "Government Agency",
      color: "var(--blue-accent)",
      price: 150,
      bullets: [
         "For government agencies with bicycle-related work",
         "May offer educational materials, swag, and outreach",
         "10'x10' booth space (tent, table, and chairs not provided)",
      ],
   },
   {
      name: "Local Business",
      color: "var(--dark-green)",
      price: 200,
      bullets: [
         "For bike shops, local bike-related brands, and small businesses",
         "Product and service sales allowed",
         "10'x10' booth space (tent, table, and chairs not provided)",
      ],
   },
];
