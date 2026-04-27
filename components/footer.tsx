import {
   Avatar,
   Box,
   Flex,
   HoverCard,
   Link,
   Separator,
   Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { Icons } from "./icons";

export function Footer() {
   return (
      <footer>
         <Box
            width="100%"
            height="10px"
            style={{
               backgroundColor: "var(--yellow-accent)",
            }}
         />
         <Flex
            direction="column"
            gap="16px"
            p={"24px"}
            align="center"
            style={{ backgroundColor: "var(--dark-green)" }}
         >
            <Flex
               direction={{ initial: "column", xs: "row" }}
               align="center"
               gap="8px"
               justify="center"
               mx="auto"
            >
               <Text size={{ initial: "2", sm: "3" }}>Made with 🫶🏻 by</Text>
               <Box>
                  <Avatar
                     src="/harrison.jpeg"
                     fallback="HC"
                     alt="Harrison Cutrone"
                     size="2"
                  />
                  <Text
                     size={{ initial: "2", sm: "3" }}
                     style={{ marginLeft: "8px" }}
                  >
                     Harrison Cutrone (
                     <Link
                        href="https://instagram.com/harrisoncutrone"
                        style={{
                           fontSize: "inherit",
                           cursor: "pointer",
                           color: "var(--light-background)",
                        }}
                        underline="always"
                     >
                        @harrisoncutrone
                     </Link>
                     )
                  </Text>
               </Box>
            </Flex>
            <Separator
               size="3"
               style={{ backgroundColor: "var(--light-background)" }}
            />
            <Flex
               direction={{ initial: "column", xs: "row" }}
               align="center"
               gap="8px"
               justify="center"
               mx="auto"
            >
               <Text size={{ initial: "2", sm: "3" }}>
                  Organized with 🫶🏻 by
               </Text>
               <Box>
                  <Avatar
                     src="/emily.jpg"
                     fallback="EK"
                     alt="Emily Kleinfelter"
                     size="2"
                  />
                  <Text
                     size={{ initial: "2", sm: "3" }}
                     style={{ marginLeft: "8px" }}
                  >
                     Emily Kleinfelter (
                     <Link
                        href="https://instagram.com/bike.this.city"
                        style={{
                           fontSize: "inherit",
                           cursor: "pointer",
                           color: "var(--light-background)",
                        }}
                        underline="always"
                     >
                        @bike.this.city
                     </Link>
                     )
                  </Text>
               </Box>
            </Flex>
            <Separator
               size="3"
               style={{ backgroundColor: "var(--light-background)" }}
            />
            <Flex
               direction="column"
               align="center"
               gap="8px"
               justify="center"
               mx="auto"
            >
               <Link
                  href="https://denverstreetspartnership.org/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <Image
                     src="/sponsors/denver-streets-partnership.png"
                     alt="Denver Streets Partnership"
                     width={150}
                     height={100}
                  />
               </Link>
               <Text size={{ initial: "2", sm: "3" }}>
                  Fiscal Sponsorship: Denver Streets Partnership
               </Text>
            </Flex>
            <Image
               src="/logo_horizontal_no_year.png"
               alt="Logo"
               width={500}
               height={200}
               style={{ margin: "auto" }}
            />
            <Flex gap="8px" align="center" justify="center">
               <Link
                  href="https://www.instagram.com/denverbikefest"
                  size="2"
                  underline="always"
                  style={{ color: "var(--light-background)" }}
               >
                  Instagram
               </Link>
               <Separator
                  orientation="vertical"
                  size="1"
                  style={{ backgroundColor: "var(--light-background)" }}
               />
               <Link
                  href="https://bikewalkbus.donorsupport.co/page/DenverBikeFest2026"
                  size="2"
                  underline="always"
                  style={{ color: "var(--light-background)" }}
               >
                  Donate
               </Link>
               <Separator
                  orientation="vertical"
                  size="1"
                  style={{ backgroundColor: "var(--light-background)" }}
               />
               <HoverCard.Root>
                  <HoverCard.Trigger>
                     <Text size="2">Icon Credits</Text>
                  </HoverCard.Trigger>
                  <HoverCard.Content>
                     <Icons />
                  </HoverCard.Content>
               </HoverCard.Root>
            </Flex>
            <Text size="1" style={{ color: "var(--light-background)" }}>
               Proudly made without the use of generative AI
            </Text>
         </Flex>
      </footer>
   );
}
