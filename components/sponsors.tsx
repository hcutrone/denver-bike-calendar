import {
   Box,
   Em,
   Flex,
   Heading,
   Link,
   Separator,
   Text,
} from "@radix-ui/themes";
import Image from "next/image";

const sponsorTiers = [
   {
      name: "Tandem",
      logo: "/tandem.png",
      color: "#af9096",
      imageSize: 200,
      sponsors: [
         {
            name: "City Cast Denver",
            url: "https://denver.citycast.fm/",
            logo: "/sponsors/city-cast-denver.png",
         },
         {
            name: "Cohesion Brewing",
            url: "https://www.cohesionbeer.com/",
            logo: "/sponsors/cohesion-brewing.png",
         },
      ],
   },
   {
      name: "Cargo",
      logo: "/cargo.png",
      color: "#d8af53",
      imageSize: 150,
      sponsors: [],
   },
   {
      name: "Cruiser",
      logo: "/cruiser.png",
      color: "#8f9b93",
      imageSize: 100,
      sponsors: [
         {
            name: "Z Cycle",
            url: "https://www.zcycledenver.com/",
            logo: "/partners/zcycle.png",
         },
         {
            name: "Way to Go",
            url: "https://drcog.org/way-to-go",
            logo: "/sponsors/way-to-go.png",
         },
         {
            name: "DUDE, IDK Studios",
            url: "https://www.dudeidkstudios.com/",
            logo: "/sponsors/dude-idk-studios.png",
         },
      ],
   },
];

export function Sponsors() {
   const SponsorHeader = ({
      name,
      logo,
      color,
      index,
   }: {
      name: string;
      logo: string;
      color: string;
      index: number;
   }) => (
      <Flex direction="column" align="center" gap="8px">
         <Image src={logo} alt={name} width={150 - index * 35} height={100} />
         <Flex
            width="100%"
            justify="center"
            px={"16px"}
            style={{
               backgroundColor: color,
               borderRadius: "50px",
            }}
         >
            <Text
               size={(6 - index).toString() as "6" | "5" | "4"}
               style={{
                  color: "white",
                  fontWeight: "bold",
               }}
            >
               {name}
            </Text>
         </Flex>
      </Flex>
   );
   return (
      <Flex
         direction="column"
         gap="8px"
         style={{ backgroundColor: "var(--dark-green)" }}
      >
         <Box
            width="100%"
            height="20px"
            style={{ backgroundColor: "var(--yellow-accent)" }}
         />
         <Flex
            pt={"12px"}
            style={{
               justifyContent: "center",
               textAlign: "center",
            }}
         >
            <Heading
               as="h2"
               size={{ initial: "7", xs: "8", sm: "9" }}
               style={{ color: "var(--light-background)" }}
            >
               <Em>Thank you to our sponsors:</Em>
            </Heading>
         </Flex>
         {sponsorTiers.map((tier, idx) => (
            <Flex direction="column" key={tier.name} gap="16px" align="center">
               <SponsorHeader {...tier} index={idx} />
               <SponsorSpace
                  sponsors={tier.sponsors}
                  imageSize={tier.imageSize}
                  index={idx}
               />
               {idx < sponsorTiers.length - 1 && (
                  <Separator
                     orientation="horizontal"
                     size="4"
                     mb={{ initial: "8px", sm: "12px" }}
                     style={{
                        height: "4px",
                        backgroundColor: "var(--light-background)",
                     }}
                  />
               )}
            </Flex>
         ))}
         <Box
            width="100vw"
            height="20px"
            style={{ backgroundColor: "var(--yellow-accent)" }}
         />
      </Flex>
   );
}

const SponsorSpace = ({
   sponsors,
   imageSize,
   index,
}: {
   sponsors: { name: string; url: string; logo: string }[];
   imageSize: number;
   index: number;
}) => (
   <Box
      style={{
         width: "100%",
         height: `${200 - index * 50}px`,
      }}
   >
      <Flex
         direction="row"
         justify="center"
         align="center"
         gap="16px"
         wrap="wrap"
      >
         {sponsors.map((sponsor) => (
            <Flex
               key={sponsor.name}
               minHeight={`${imageSize}px`}
               minWidth={`${imageSize}px`}
               align="center"
               justify="center"
               position="relative"
            >
               <Link
                  href={sponsor.url}
                  target="_blank"
                  style={{ width: "100%", height: "100%" }}
               >
                  <Image
                     className="hover-highlight-yellow-orange"
                     src={sponsor.logo}
                     alt={sponsor.name}
                     fill
                     style={{
                        objectFit: "contain",
                        maxHeight: `${imageSize}px`,
                        borderRadius: "12px",
                        padding: "4px",
                        backgroundColor: "var(--light-background)",
                     }}
                  />
               </Link>
            </Flex>
         ))}
      </Flex>
   </Box>
);
