import { Avatar, Em, Flex, Heading, Link, Text } from "@radix-ui/themes";
import Image from "next/image";

export function WhoWeAre() {
   return (
      <Flex
         id="who-we-are"
         direction={"column"}
         p={{ initial: "24px", sm: "32px" }}
         maxWidth="1280px"
         width="100%"
         m="auto"
         gap={{ initial: "8px", sm: "16px", md: "32px" }}
      >
         <Heading
            as="h2"
            trim="end"
            size={{ initial: "7", xs: "8", sm: "9" }}
            style={{ color: "var(--dark-green)" }}
         >
            Who We Are
         </Heading>
         <Text
            size={{ initial: "3", sm: "5", md: "6" }}
            style={{ color: "var(--dark-green)" }}
         >
            {`Denver Bike Fest is organized by a small but mighty team who do this
            entirely in their spare time, for free, because we love bikes and we
            love the community they create. That's it. No big budget. No staff.
            No office. Just a small group of people who wanted to create
            something fun and meaningful for the community we love.`}
         </Text>
         <Text
            size={{ initial: "3", sm: "5", md: "6" }}
            style={{ color: "var(--dark-green)" }}
         >
            {`This is a grassroots event, built by the community, for the community. It's
            scrappy, it's heartfelt, and it runs on passion. We are endlessly
            grateful for the partners, sponsors, and volunteers who make this
            event possible. Thanks for being here!`}
         </Text>
         <Flex
            direction={{ initial: "column", sm: "row" }}
            justify="between"
            mt={{ initial: "16px", sm: "0px" }}
            gap={{ initial: "24px", sm: "0px" }}
            align="center"
            style={{ textAlign: "center" }}
         >
            {us.map((person) => (
               <Flex
                  key={person.name}
                  direction="column"
                  gap="4px"
                  px="16px"
                  width={{ initial: "100%", sm: "30%" }}
                  align="center"
               >
                  <Flex
                     position="relative"
                     justify="center"
                     align="center"
                     mb="12px"
                     width="100%"
                     maxHeight="300px"
                     style={{ aspectRatio: "1 / 1" }}
                  >
                     <Image
                        src="/chain-border.png"
                        alt="chain border"
                        fill
                        style={{ objectFit: "contain" }}
                     />
                     <Avatar
                        size="9"
                        radius="full"
                        src={person.image}
                        alt={person.name}
                        fallback={person.fallback}
                        style={{
                           position: "absolute",
                           top: "50%",
                           left: "50%",
                           transform: "translate(-50%, -50%)",
                           width: "65%",
                           height: "65%",
                           maxWidth: "200px",
                           maxHeight: "200px",
                        }}
                     />
                  </Flex>
                  <Text
                     size={{ initial: "6", md: "8" }}
                     weight="bold"
                     style={{ color: "var(--dark-green)", textWrap: "nowrap" }}
                  >
                     {person.name}
                  </Text>
                  <Text
                     size={{ initial: "3", md: "5" }}
                     style={{ color: "var(--dark-green)" }}
                  >
                     <Em>{person.role}</Em>
                  </Text>
                  <Link
                     href={person.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     underline="always"
                  >
                     <Text
                        size={{ initial: "3", md: "5" }}
                        style={{ color: "var(--yellow-accent)" }}
                     >
                        <Em>{person.handle}</Em>
                     </Text>
                  </Link>
               </Flex>
            ))}
         </Flex>
      </Flex>
   );
}

const us = [
   {
      name: "Emily Kleinfelter",
      fallback: "EK",
      role: "Lead Organizer",
      handle: "@bike.this.city",
      link: "https://www.instagram.com/bike.this.city/",
      image: "/emily.png",
   },
   {
      name: "Harrison Cutrone",
      fallback: "HC",
      role: "Web Developer",
      handle: "@harrisoncutrone",
      link: "https://www.instagram.com/harrisoncutrone/",
      image: "/harrison.jpeg",
   },
   {
      name: "Brandon Gratton",
      fallback: "BG",
      role: "Graphic Designer",
      handle: "www.studiogratton.com",
      link: "https://www.studiogratton.com",
      image: "/brandon.png",
   },
];
