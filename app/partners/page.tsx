"use client";

import { Em, Flex, Heading, Text } from "@radix-ui/themes";
import { CollapsiblePartnerGrid } from "@/components";
import { partners, partnerTiers } from "../../partner-data";

export default function PartnersPage() {
   return (
      <Flex
         maxWidth="1280px"
         m="auto"
         width="100%"
         minHeight="100vh"
         p="32px"
         mt="64px"
         direction="column"
         gap={{ initial: "16px", sm: "32px" }}
      >
         <Heading
            as="h1"
            trim="end"
            size={{ initial: "7", xs: "8", sm: "9" }}
            style={{ color: "var(--dark-green)" }}
         >
            Denver Bike Fest Partners
         </Heading>
         <Text
            style={{ color: "var(--dark-green)" }}
            size={{ initial: "3", sm: "5", md: "6" }}
         >
            {
               "Denver Bike Fest is proud to partner with so many amazing local groups, organizations, and businesses."
            }
         </Text>
         <PartnerTiers />
         {partners.map((partner) => (
            <CollapsiblePartnerGrid key={partner.header} partner={partner} />
         ))}

         <Flex
            id="contact-form"
            direction={{ initial: "column", sm: "row" }}
            width="100%"
            gap="16px"
         >
            <Flex align="center" direction="column" gap="32px" p="12px">
               <Text
                  style={{ color: "var(--dark-green)" }}
                  size={{ initial: "3", sm: "5", md: "6" }}
               >
                  Interested in partnering with Denver Bike Fest next year?
                  Check back in on <strong>March 15, 2026!</strong>
               </Text>
            </Flex>
         </Flex>
      </Flex>
   );
}

const PartnerTiers = () => (
   <Flex direction="row" gap="16px" wrap="wrap" justify="between">
      {partnerTiers.map((tier) => (
         <PartnerInfoCard key={tier.name} title={tier.name} color={tier.color}>
            <Flex
               width="100%"
               p="4px"
               mt="42px"
               justify="center"
               style={{ backgroundColor: tier.color }}
            >
               <Text size="7" weight="bold" style={{ color: "white" }}>
                  ${tier.price}
               </Text>
            </Flex>
            <Flex direction="column" px="16px" pb="12px" gap="8px">
               <ul style={{ listStyleType: "disc", paddingLeft: "16px" }}>
                  {tier.bullets.map((bullet) => (
                     <li key={bullet}>
                        <Text style={{ color: "black" }}>{bullet}</Text>
                     </li>
                  ))}
               </ul>
               <Flex justify="center" width="100%">
                  {tier.subtext && (
                     <Text
                        size="1"
                        weight="light"
                        style={{ color: "black", textAlign: "center" }}
                     >
                        <Em>{tier.subtext}</Em>
                     </Text>
                  )}
               </Flex>
            </Flex>
         </PartnerInfoCard>
      ))}
   </Flex>
);

const PartnerInfoCard = ({
   title,
   color,
   children,
}: {
   title: string;
   color: string;
   children: React.ReactNode;
}) => (
   <Flex
      position="relative"
      direction="column"
      maxWidth="calc(25% - 12px)"
      mt="16px"
      gap="8px"
      style={{
         backgroundColor: "white",
         borderRadius: "25px",
         border: `3px solid ${color}`,
      }}
   >
      <Flex
         position="absolute"
         top="0"
         left="50%"
         width="75%"
         align="center"
         justify="center"
         style={{
            backgroundColor: color,
            padding: "4px 16px",
            borderRadius: "25px",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
         }}
      >
         <Heading
            as="h2"
            size="5"
            style={{ color: "white", width: "min-content" }}
         >
            {title}
         </Heading>
      </Flex>
      {children}
   </Flex>
);
