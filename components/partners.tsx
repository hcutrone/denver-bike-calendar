import {
   Box,
   Button,
   Flex,
   Heading,
   Link,
   Strong,
   Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { featuredPartners } from "../partner-data";

export function Partners() {
   return (
      <Flex
         id="partners"
         style={{
            backgroundColor: "var(--dark-green)",
         }}
      >
         <Box
            position="absolute"
            width="100%"
            height="20px"
            style={{
               backgroundColor: "var(--yellow-accent)",
            }}
         />
         <Flex
            p={{ initial: "24px", sm: "32px" }}
            direction="column"
            gap={{ initial: "8px", sm: "16px", md: "32px" }}
            maxWidth="1280px"
            m="auto"
            overflowX="hidden"
         >
            <Flex align="center" gap={{ initial: "8px" }}>
               <Box
                  height={{ initial: "25px", xs: "30px", sm: "50px" }}
                  width={{ initial: "150px", xs: "180px", sm: "300px" }}
                  minWidth={"150px"}
                  mt="8px"
                  position="relative"
               >
                  <Image
                     src="/logo_horizontal_no_year.png"
                     alt="Denver Bike Fest Logo"
                     fill
                     style={{ objectFit: "contain" }}
                  />
               </Box>
               <Heading
                  as="h2"
                  trim="end"
                  size={{ initial: "7", xs: "8", sm: "9" }}
                  style={{ color: "var(--lime-3)" }}
               >
                  Partners
               </Heading>
            </Flex>
            <Text size={{ initial: "3", sm: "5", md: "6" }}>
               {`Denver Bike Fest is built by the community, for the community.
               Whether you want to volunteer, sponsor, perform, or just lend a
               hand spreading the word, there's a place for you here.`}
            </Text>
            <Text size={{ initial: "3", sm: "5", md: "6" }}>
               {`By registering as a partner, you'll get the chance to showcase
               your work or mission, connect with local residents, and be part of
               the city's biggest bike celebration. Partner registration is open
               from `}
               <Strong>March 15th to May 15th, 2026!</Strong>
            </Text>
            <Button
               asChild
               radius="full"
               style={{
                  marginInline: "auto",
                  fontFamily: "var(--font-poppins)",
                  backgroundColor: "#d8af53",
                  cursor: "pointer",
               }}
            >
               <Flex
                  asChild
                  p={{ initial: "16px", sm: "20px", md: "24px" }}
                  width="fit-content"
               >
                  <Link
                     href="https://www.eventbrite.com/e/denver-bike-fest-2026-partner-registration-registration-1984436547132?aff=oddtdtcreator"
                     underline="none"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Text
                        size={{ initial: "5", sm: "7", md: "8" }}
                        style={{ color: "white" }}
                        weight="bold"
                     >
                        Register Here!
                     </Text>
                  </Link>
               </Flex>
            </Button>
            <Flex gap={{ initial: "16px", sm: "32px" }} direction="column">
               {featuredPartners.map((partner) => (
                  <Flex
                     gap={{ initial: "8px", sm: "12px", md: "16px" }}
                     direction="column"
                     key={partner.header}
                  >
                     <Flex justify="between" align="center">
                        <Text size={{ initial: "5", sm: "7", md: "8" }}>
                           {partner.header}
                        </Text>
                        <Link
                           size={{ initial: "3", sm: "5", md: "6" }}
                           href="/partners"
                           wrap="nowrap"
                           style={{
                              textDecoration: "underline",
                              color: "var(--lime-3)",
                           }}
                        >
                           See All {">"}
                        </Link>
                     </Flex>
                     <Flex
                        direction="row"
                        overflowX="scroll"
                        gap={{ initial: "8px", sm: "16px" }}
                        style={{
                           backgroundColor: "var(--yellow-accent)",
                           borderRadius: "25px",
                        }}
                        py={{ initial: "16px", sm: "24px", md: "32px" }}
                     >
                        <div
                           style={{
                              position: "sticky",
                              left: 0,
                              minHeight: "100%",
                              minWidth: "20px",
                              display: "flex",
                              background:
                                 "linear-gradient(90deg, var(--yellow-accent) 0%, rgba(255, 255, 255, 0) 100%)",
                           }}
                        />
                        {partner.groups.map((group, index) => (
                           <PartnerCard
                              key={group.name + index.toString()}
                              group={group}
                           />
                        ))}
                        <div
                           style={{
                              position: "sticky",
                              right: 0,
                              minHeight: "100%",
                              minWidth: "20px",
                              display: "flex",
                              background:
                                 "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--yellow-accent) 100%)",
                           }}
                        />
                     </Flex>
                  </Flex>
               ))}
            </Flex>
         </Flex>
      </Flex>
   );
}

export const PartnerCard = ({
   group,
}: {
   group: { name: string; logo: string };
}) => {
   const imageSizing = { initial: "150px", sm: "175px", md: "200px" };
   return (
      <Flex
         direction="column"
         align="center"
         justify="between"
         maxWidth={imageSizing}
         minWidth={imageSizing}
         overflow="hidden"
         style={{
            backgroundColor: "var(--light-background)",
            borderRadius: "8px",
         }}
      >
         <Flex
            minHeight={imageSizing}
            minWidth={imageSizing}
            align="center"
            justify="center"
            position="relative"
         >
            <Image
               src={group.logo}
               alt={group.name}
               fill
               style={{ objectFit: "contain", maxHeight: "200px" }}
            />
         </Flex>
         <Flex
            p={{ initial: "4px", sm: "6px", md: "8px" }}
            width="100%"
            height="100%"
            justify="center"
            align="center"
            style={{ backgroundColor: "var(--dark-green)" }}
         >
            <Text
               align="center"
               size={{ initial: "3", md: "4" }}
               weight={"medium"}
               style={{ color: "var(--light-background)" }}
            >
               {group.name}
            </Text>
         </Flex>
      </Flex>
   );
};
