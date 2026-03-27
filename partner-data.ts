const communityGroups = [
   {
      name: "Wash Park Crewzers",
      logo: "/partners/wash-park-crewzers.png",
      instagram: "@wash_park_crewzers",
      ready: true,
   },
   {
      name: "SkidMarks Bike Club",
      logo: "/partners/skidmarks.png",
      instagram: "@skidmarksbc",
      ready: false,
   },
   {
      name: "Littleton Social Cycle",
      logo: "/partners/littleton-social-cycle.png",
      url: "https://www.littletonsocialcycle.com/",
      instagram: "@littletonsocialcycle",
      ready: true,
   },
   {
      name: "Chains of Strength",
      logo: "/partners/chains-of-strength.png",
      instagram: "@chains.of.strength",
      ready: false,
   },
   {
      name: "Bike and Brew Denver",
      logo: "/partners/bike-and-brew.png",
      instagram: "@bikeandbrewdenver",
      ready: true,
   },
   {
      name: "Denver Bicycle Lobby",
      logo: "/partners/denver-bicycle-lobby.png",
      url: "https://denverbicyclelobby.com/",
      instagram: "@denverbicyclelobby",
      ready: true,
   },
   {
      name: "Denver Critical Mass",
      logo: "/partners/denver-critical-mass.png",
      url: "https://denvercriticalmass.org/",
      instagram: "@criticalmassdenver",
      ready: false,
   },
];

const nonProfits = [
   {
      name: "We Ride 4",
      logo: "/partners/we-ride-4.png",
      url: "https://weride4.org/",
      instagram: "@weridefor",
      ready: true,
   },
   {
      name: "Way to Go",
      logo: "/partners/way-to-go.png",
      url: "https://waytogo.org/",
      instagram: "@drcog_waytogo",
      ready: false,
   },
   {
      name: "Bike Law CO",
      logo: "/partners/bike-law.png",
      url: "https://denverbicyclelaw.com/colorado-bicycle-laws",
      instagram: "@bicycleattorney",
      ready: true,
   },
   {
      name: "Denver Food Rescue",
      logo: "/partners/denver-food-rescue.png",
      url: "https://denverfoodrescue.org",
      instagram: "@denverfoodrescue",
      ready: false,
   },
   {
      name: "Front Rangers Cycling Club",
      logo: "/partners/front-rangers.png",
      url: "https://www.frontrangersdenver.org/",
      instagram: "@frontrangers",
      ready: true,
   },
   {
      name: "Department of Transportation and Infrastructure / Community Active Living Coalition",
      logo: "/partners/doti.png",
      url: "https://denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Department-of-Transportation-and-Infrastructure",
      instagram: "@denverdoti",
      ready: true,
   },
   {
      name: "American Diabetes Association",
      logo: "/partners/diabetes-association.png",
      url: "https://tour.diabetes.org/743",
      instagram: "@am.diabetes_rockymountain",
      ready: true,
   },
   {
      name: "Denver Streets Partnership",
      logo: "/partners/denver-streets-partnership.png",
      url: "https://denverstreetspartnership.org/",
      instagram: "@bikewalkbus",
      ready: true,
   },
   {
      name: "Sun Valley Youth Center",
      logo: "/partners/sun-valley-youth-center.webp",
      url: "https://www.sunvalleyyouthcenter.org/",
      instagram: "@sunvalleyyouthcenter",
      ready: true,
   },
   {
      name: "Bikes Together",
      logo: "/partners/bikes-together.png",
      url: "https://www.bikestogether.org/",
      instagram: "@bikes.together",
      ready: true,
   },
   {
      name: "Office of Climate Action, Sustainability, and Resiliency (CASR)",
      logo: "/partners/casr.png",
      url: "https://www.denvergov.org/Government/Agencies-Departments-Offices/Agencies-Departments-Offices-Directory/Climate-Action-Sustainability-and-Resiliency/About-Us",
      instagram: "@denvercasr",
      ready: true,
   },
   {
      name: "Bicycle Colorado",
      logo: "/partners/bicycle-colorado.png",
      url: "https://bicyclecolorado.org/",
      instagram: "@bicyclecolo",
      ready: true,
   },
   {
      name: "Z Cycle Shop",
      logo: "/partners/z-cycle-shop.png",
      url: "https://www.zcycledenver.org/",
      instagram: "@zcycleshop",
      ready: true,
   },
   {
      name: "ALSO.",
      logo: "/partners/also.png",
      url: "https://www.ridealso.com/",
      ready: false,
   },
   {
      name: "Topo Designs",
      logo: "/partners/topo-designs.png",
      url: "https://topodesigns.com/",
      instagram: "@topodesigns",
      ready: true,
   },
];

const localBusinesses = [
   {
      name: "Handlestash",
      logo: "/partners/handlestash.png",
      url: "https://handlestash.com",
      instagram: "@handlestash",
      ready: true,
   },
   {
      name: "Stowe Trunks",
      logo: "/partners/stowe-trunks.png",
      url: "https://www.stowetrunks.com",
      instagram: "@stowetrunks",
      ready: true,
   },
   {
      name: "City Cast Denver",
      logo: "/partners/city-cast-denver.png",
      url: "https://denver.citycast.fm",
      instagram: "@citycastdenver",
      ready: true,
   },
   {
      name: "Out & Back Outdoor",
      logo: "/partners/out-and-back-outdoor.png",
      url: "https://outandbackoutdoor.com",
      instagram: "@outandbackoutdoor",
      ready: true,
   },
];

const food = [
   {
      name: "Scoops Ice Cream",
      logo: "/partners/scoops.png",
      url: "https://scoopsdenver.com",
      instagram: "@scoopsdenver",
      ready: true,
   },
   {
      name: "Muy Loco Tacos",
      logo: "/partners/muy-loco.png",
      url: "https://cateringgolden.com",
      instagram: "@muylocotacos",
      ready: true,
   },
];

export const partners = [
   { header: "Community Groups", groups: communityGroups },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits,
   },
   { header: "Local Businesses", groups: localBusinesses },
   { header: "Food Vendors", groups: food },
];

export const featuredPartners = [
   { header: "Community Groups", groups: communityGroups.slice(0, 8) },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits.slice(0, 8),
   },
   { header: "Local Businesses", groups: localBusinesses.slice(0, 8) },
   { header: "Food Vendors", groups: food.slice(0, 8) },
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
