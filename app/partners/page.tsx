"use client";

import { Em, Flex, Grid, Heading, Link, Strong, Text } from "@radix-ui/themes";
import { CollapsiblePartnerGrid } from "@/components";
import { partners, partnerTiers } from "../../partner-data/partner-data";

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
               <Strong>
                  {
                     "Partner registration is open from March 15th to May 15th, 2026!"
                  }
               </Strong>
            </Heading>
            <RegisterButton />
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
         <FoodVendorInfo />
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

function RegisterButton() {
   return (
      <Flex
         asChild
         py={{ initial: "4px", sm: "8px", md: "12px" }}
         px={{ initial: "16px", sm: "20px", md: "24px" }}
         style={{
            backgroundColor: "var(--yellow-accent)",
            borderRadius: "50px",
         }}
      >
         <Link
            href="https://www.eventbrite.com/e/denver-bike-fest-2026-partner-registration-registration-1984436547132?aff=oddtdtcreator"
            target="_blank"
            rel="noopener noreferrer"
         >
            <Text
               size={{ initial: "5", sm: "6", md: "7" }}
               style={{ color: "white" }}
            >
               <Strong>Click here to register!</Strong>
            </Text>
         </Link>
      </Flex>
   );
}

const FoodVendorInfo = () => (
   <Flex
      p="16px"
      gap="16px"
      style={{ backgroundColor: "var(--dark-green)", borderRadius: "25px" }}
   >
      <Flex
         style={{
            backgroundColor: "var(--dark-green)",
            borderRadius: "20px",
            border: "5px solid var(--light-background)",
         }}
         width="100%"
         direction={{ initial: "column", sm: "row" }}
         gap="8px"
      >
         <Flex m="16px" justify="center" align="center">
            <Heading
               as="h2"
               size={{ initial: "6", sm: "7", md: "8" }}
               style={{ color: "var(--light-background)", textAlign: "center" }}
               weight={"bold"}
            >
               Food & Drink Vendors
            </Heading>
         </Flex>
         <Flex
            px={{ initial: "0px", sm: "16px" }}
            py={{ initial: "16px", sm: "0px" }}
            align="center"
            justify={"center"}
            style={{ backgroundColor: "var(--light-background)" }}
         >
            <Text
               size={{ initial: "6", sm: "8", md: "8" }}
               style={{ color: "var(--dark-green)" }}
               weight="bold"
            >
               $250
            </Text>
         </Flex>
         <ul
            style={{
               listStyleType: "disc",
               paddingInline: "32px",
               paddingBlock: "16px",
            }}
         >
            <li style={{ color: "var(--light-background)" }}>
               <Text>{`For food or non-alcoholic beverage trucks, carts, and vendors`}</Text>
            </li>
            <li style={{ color: "var(--light-background)" }}>
               <Text>{`Must meet all Denver food permitting requirements`}</Text>
            </li>
            <li style={{ color: "var(--light-background)" }}>
               <Text>{`Must provide own power source`}</Text>
            </li>
            <li style={{ color: "var(--light-background)" }}>
               <Text>{`10'x10' space provided`}</Text>
            </li>
         </ul>
      </Flex>
   </Flex>
);
