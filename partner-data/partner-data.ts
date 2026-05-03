import communityGroupsRaw from "./community-groups.json";
import entertainmentRaw from "./entertainment.json";
import foodVendorsRaw from "./food-vendors.json";
import localBusinessesRaw from "./local-businesses.json";
import nonProfitsRaw from "./non-profits.json";

const communityGroups = communityGroupsRaw.filter((group) => group.ready);
const foodVendors = foodVendorsRaw.filter((vendor) => vendor.ready);
const localBusinesses = localBusinessesRaw.filter((business) => business.ready);
const nonProfits = nonProfitsRaw.filter((org) => org.ready);
const entertainment = entertainmentRaw.filter((ent) => ent.ready);

export const partners = [
   { header: "Community Groups", groups: communityGroups, id: "community" },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits,
      id: "nonProfits",
   },
   { header: "Businesses", groups: localBusinesses, id: "businesses" },
   { header: "Food & Drink Vendors", groups: foodVendors, id: "vendors" },
   { header: "Music", groups: entertainment, id: "music" },
];

export const featuredPartners = [
   { header: "Community Groups", groups: communityGroups.slice(0, 8) },
   {
      header: "Nonprofit Organizations & Government Agencies",
      groups: nonProfits.slice(0, 8),
   },
   { header: "Businesses", groups: localBusinesses.slice(0, 8) },
   { header: "Food Vendors", groups: foodVendors.slice(0, 8) },
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
