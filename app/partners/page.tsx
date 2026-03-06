"use client";

import { Em, Flex, Grid, Heading, Strong, Text } from "@radix-ui/themes";
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
         <Flex direction="column" gap="8px" justify="center" align="center">
            <Heading
               as="h2"
               size={{ initial: "5", sm: "6", md: "7" }}
               style={{ color: "black", textAlign: "center" }}
            >
               <Strong>Partner registration for 2026 opens on March 15!</Strong>
            </Heading>
            <Text
               style={{ color: "black", textAlign: "center" }}
               size={{ initial: "3", sm: "5", md: "6" }}
            >
               {`By registering as a partner, you'll get the chance to showcase your
            work or mission, connect with local residents, and be part of the
            city's biggest bike celebration.`}
            </Text>
         </Flex>
         <PartnerTiers />
         <Flex justify="center">
            <Heading
               as="h2"
               trim="end"
               weight="medium"
               size={{ initial: "5", sm: "6", md: "7" }}
               style={{ color: "black", textAlign: "center" }}
            >
               Here are some of the amazing 2025 Partners!
            </Heading>
         </Flex>
         {partners.map((partner) => (
            <CollapsiblePartnerGrid key={partner.header} partner={partner} />
         ))}
      </Flex>
   );
}

const PartnerTiers = () => (
   <Flex mt="12px" justify={{ initial: "center", md: "start" }}>
      <Grid columns={{ initial: "1", xs: "2", md: "4" }} gap="24px">
         {partnerTiers.map((tier) => (
            <PartnerInfoCard
               key={tier.name}
               title={tier.name}
               color={tier.color}
            >
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
      </Grid>
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
      maxWidth="300px"
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
