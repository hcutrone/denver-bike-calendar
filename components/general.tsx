import {
   Box,
   Button,
   ChevronDownIcon,
   Flex,
   Heading,
   Link,
   Separator,
   Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { Accordion } from "radix-ui";
import { Fragment } from "react";
import { GOOGLE_MAPS_API_KEY } from "@/env";

export const General = () => (
   <Flex id="general" direction="column">
      <Box
         width="100%"
         height="64px"
         style={{ backgroundColor: "var(--dark-green)" }}
      />
      <Box
         width="100%"
         height="10px"
         style={{ backgroundColor: "var(--yellow-accent)" }}
      />
      <ContentContainer>
         <Heading
            as="h2"
            trim="end"
            size={{ initial: "7", xs: "8", sm: "9" }}
            style={{ color: "var(--dark-green)" }}
         >
            General Info
         </Heading>
         <Flex
            direction={"column"}
            gap={{ initial: "8px", sm: "16px", md: "32px" }}
            mb={{ initial: "16px", sm: "24px", md: "32px" }}
            align={{ initial: "center", sm: "start" }}
         >
            <Text
               size={{ initial: "3", sm: "5", md: "6" }}
               style={{ color: "var(--dark-green)" }}
            >
               {`Denver Bike Fest is a community celebration of bikes, music, and
         connection. The festival brings together local bike groups, shops,
         artists, and food vendors to show how fun, creative, and inclusive
         Denver's cycling community can be. Whether you ride every day or just love
         the vibe, you're invited to join in!`}
            </Text>
            <Flex
               direction="column"
               width="fit-content"
               p={{ initial: "12px", sm: "16px", md: "24px" }}
               gap={{ initial: "0px", md: "8px" }}
               style={{
                  backgroundColor: "var(--yellow-accent)",
                  borderRadius: "25px",
                  textWrap: "nowrap",
                  fontWeight: "bold",
               }}
            >
               <Text
                  size={{ initial: "5", sm: "6", md: "7" }}
                  style={{ color: "white" }}
               >
                  Date: June 13, 2026
               </Text>
               <Text
                  size={{ initial: "5", sm: "6", md: "7" }}
                  style={{ color: "white" }}
               >
                  Time: 3:00 pm - 9:00 pm
               </Text>
               <Text
                  size={{ initial: "5", sm: "6", md: "7" }}
                  style={{ color: "white" }}
               >
                  Location: York Street Yards
               </Text>
               <Text
                  size={{ initial: "5", sm: "6", md: "7" }}
                  style={{ color: "white" }}
               >
                  Cost: FREE!
               </Text>
            </Flex>
         </Flex>
         <Heading
            as="h3"
            trim="end"
            size={{ initial: "5", sm: "7", md: "8" }}
            style={{ color: "var(--dark-green)" }}
            mb="8px"
         >
            What to Expect
         </Heading>

         {whatToExpect.map((item, idx) => (
            <Fragment key={item.header}>
               <Flex
                  direction={{ initial: "column", sm: "row" }}
                  gap={{ initial: "12px", sm: "16px", md: "32px" }}
                  align="center"
               >
                  <Image
                     src={item.image}
                     alt={item.header}
                     width={300}
                     height={50}
                     style={{
                        border: "3px solid var(--dark-green)",
                        borderRadius: "12px",
                     }}
                  />
                  <Flex
                     direction="column"
                     width="100%"
                     gap="8px"
                     align={{ initial: "center", sm: "start" }}
                  >
                     <Heading
                        as="h4"
                        trim="end"
                        size={{ initial: "4", sm: "6", md: "7" }}
                        style={{ color: "var(--dark-green)" }}
                     >
                        {item.header}
                     </Heading>
                     <Text
                        size={{ initial: "3", sm: "5", md: "6" }}
                        align={{ initial: "center", sm: "left" }}
                        style={{ color: "var(--dark-green)" }}
                     >
                        {item.description}
                     </Text>
                  </Flex>
               </Flex>
               {idx !== whatToExpect.length - 1 && (
                  <Separator
                     orientation="horizontal"
                     size="4"
                     style={{ backgroundColor: "var(--yellow-accent)" }}
                  />
               )}
            </Fragment>
         ))}

         <Flex
            direction="column"
            my={{ initial: "20px", sm: "22px", md: "24px" }}
            mx="auto"
            style={{ textAlign: "center" }}
            gap="8px"
         >
            <Text
               size={{ initial: "5", sm: "6", md: "7" }}
               style={{ color: "var(--dark-green)" }}
            >
               Learn more:
            </Text>
            <Button
               asChild
               radius="full"
               style={{
                  backgroundColor: "var(--dark-green)",
                  fontFamily: "var(--font-poppins)",
                  cursor: "pointer",
               }}
            >
               <Flex
                  asChild
                  p={{ initial: "16px", sm: "20px", md: "24px" }}
                  width="fit-content"
               >
                  <Link href="/partners" underline="none">
                     <Text
                        size={{ initial: "5", sm: "6", md: "7" }}
                        style={{ color: "var(--light-background)" }}
                        weight="bold"
                     >
                        2026 PARTNERS
                     </Text>
                  </Link>
               </Flex>
            </Button>
         </Flex>
      </ContentContainer>
      <Box
         width="100%"
         height="20px"
         style={{ backgroundColor: "var(--yellow-accent)" }}
      />
      <ContentContainer>
         <Heading
            as="h2"
            trim="end"
            size={{ initial: "6", sm: "7", md: "8" }}
            style={{ color: "var(--dark-green)" }}
         >
            Getting There
         </Heading>
         <Text
            size={{ initial: "3", sm: "5", md: "6" }}
            style={{ color: "var(--dark-green)" }}
         >
            Denver Bike Fest is located at York Street Yards, which is directly
            south of the 39th Avenue Greenway, blocks from major bus stops and a
            mile from multiple Light Rail stops. The Yards also has ample public
            parking available.
         </Text>
         <Flex direction={{ initial: "column", xs: "row" }} gap="32px">
            <iframe
               title="Map to York Street Yards"
               src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=York+Street+Yards,Denver+CO`}
               width="450"
               height="380"
               style={{ border: 0, maxWidth: "100%" }}
               loading="lazy"
            />
            <Flex direction="column" align={{ initial: "center", xs: "start" }}>
               <Text
                  size={{ initial: "5", sm: "6", md: "7" }}
                  weight="bold"
                  style={{ color: "var(--dark-green)" }}
               >
                  York Street Yards
               </Text>
               <Text
                  size={{ initial: "3", sm: "4", md: "5" }}
                  style={{ color: "var(--dark-green)" }}
               >
                  3821-3893 Steele Street
               </Text>
               <Text
                  size={{ initial: "3", sm: "4", md: "5" }}
                  style={{ color: "var(--dark-green)" }}
               >
                  Denver, CO 80205
               </Text>
               <Button
                  asChild
                  radius="full"
                  style={{
                     backgroundColor: "var(--dark-green)",
                     fontFamily: "var(--font-poppins)",
                     cursor: "pointer",
                     marginTop: "16px",
                  }}
               >
                  <Flex
                     asChild
                     py={{ initial: "4px", sm: "6px", md: "8px" }}
                     px={{
                        initial: "14px",
                        xs: "16px",
                        sm: "20px",
                        md: "24px",
                     }}
                     height="fit-content"
                  >
                     <Link
                        href="https://maps.app.goo.gl/FqQBwv3KrG52Y43x7"
                        underline="none"
                        target="_blank"
                     >
                        <Text
                           style={{ color: "var(--light-background)" }}
                           size={{ initial: "3", sm: "5", md: "6" }}
                           weight="bold"
                        >
                           Get Directions
                        </Text>
                     </Link>
                  </Flex>
               </Button>
            </Flex>
         </Flex>

         <Box py={{ initial: "16px" }}>
            <Heading
               as="h3"
               trim="end"
               size={{ initial: "6", sm: "7", md: "8" }}
               style={{ color: "var(--dark-green)" }}
            >
               FAQs
            </Heading>
         </Box>
         <Accordion.Root
            type="single"
            collapsible
            style={{
               width: "100%",
               backgroundColor: "var(--lime-4)",
               border: "1px solid var(--lime-7)",
               borderRadius: "12px",
            }}
         >
            {faqs.map((q, index) => (
               <div key={q.question}>
                  <Accordion.Item
                     value={`item-${index}`}
                     style={{ padding: "16px", width: "100%" }}
                  >
                     <Accordion.Trigger style={{ width: "100%" }}>
                        <Flex
                           direction="row"
                           justify="between"
                           align="center"
                           width="100%"
                        >
                           <Text
                              size={{ initial: "4", sm: "5", md: "6" }}
                              style={{ color: "var(--dark-green)" }}
                              align="left"
                           >
                              {q.question}
                           </Text>
                           <ChevronDownIcon
                              className="group-data-[state=open]:rotate-180"
                              aria-hidden
                           />
                        </Flex>
                     </Accordion.Trigger>
                     <Accordion.Content style={{ paddingTop: "8px" }}>
                        {typeof q.answer === "string" ? (
                           <Text
                              size={{ initial: "3", sm: "4", md: "5" }}
                              style={{ color: "var(--dark-green)" }}
                           >
                              {q.answer}
                           </Text>
                        ) : (
                           <ul
                              style={{
                                 listStyleType: "disc",
                                 paddingLeft: "28px",
                              }}
                           >
                              {q.answer.map((answer) => (
                                 <li
                                    key={answer}
                                    style={{ paddingLeft: "8px" }}
                                 >
                                    <Text
                                       size={{ initial: "3", sm: "4", md: "5" }}
                                       style={{ color: "var(--dark-green)" }}
                                    >
                                       {answer}
                                    </Text>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </Accordion.Content>
                  </Accordion.Item>
                  {index !== faqs.length - 1 && (
                     <Separator
                        orientation="horizontal"
                        size="4"
                        style={{ backgroundColor: "var(--lime-7)" }}
                     />
                  )}
               </div>
            ))}
         </Accordion.Root>
      </ContentContainer>
   </Flex>
);

const ContentContainer = ({ children }: { children: React.ReactNode }) => (
   <Flex
      direction={"column"}
      p={{ initial: "24px", sm: "32px" }}
      maxWidth="1280px"
      width="100%"
      m="auto"
      gap={{ initial: "8px", sm: "16px", md: "32px" }}
   >
      {children}
   </Flex>
);

const faqs = [
   {
      question: "Are pets allowed?",
      answer:
         "Yes, dogs are allowed at the Yard. Additionally, Skip Town, a dog bar and park is right next door and would love to meet your pup!",
   },
   {
      question: "How much does it cost to attend?",
      answer: "It's FREE!",
   },
   {
      question: "Is the event family-friendly?",
      answer:
         "Yes! There is something for everyone at Denver Bike Fest, including little ones. All ages are welcome to come join in on the fun.",
   },
   {
      question: "Are there bathrooms?",
      answer:
         "Yes! There are multiple indoor common area bathrooms (with a total of 24 toilets/urinals) available and additional portable toilets will be available outdoors.",
   },
   {
      question: "What should I bring to the fest?",
      answer: [
         "Reusable water bottle for water stations",
         "Sunscreen/Hat/Sunscreen/Umbrella for that Colorado sun!",
         "Camp chair, blanket, or towel to launge in the Yard",
         "Camera (Non-pro digital and film, no flashes)",
         "ID for adult beverages from Cohesion Brewing",
         "Money for food, beverages, merch, and more!",
      ],
   },
   {
      question: "What's NOT allowed at the fest?",
      answer: [
         "Air horns",
         "Aerosol products",
         "Illicit substances",
         "Marijuana and marijuana products",
         "Outside alcohol",
         "Fireworks and other explosives",
         "Guns, knives, or other weapons",
         "Glass bottles",
      ],
   },
   {
      question: "Can I bring my own alcohol to the fest?",
      answer:
         "Negative, ghost rider. No outside alcohol allowed. Same goes for illegal drugs.",
   },
   {
      question: "Will alcohol be available?",
      answer:
         "Yes. Cohesion Brewing will serve beer in a designated 21 and over area. Please bring a valid government issued ID. Card and cash will be accepted.",
   },
   {
      question: "What happens if the weather is bad?",
      answer:
         "Denver Bike Fest is a rain or shine event. In the case of severe weather, such as lightning or high wind, programming may be paused or modified for safety. Any major changes will be posted to Instagram at @denverbikefest.",
   },
   {
      question: "Is the event ADA accessible?",
      answer:
         "Denver Bike Fest is committed to being welcoming for everyone. The venue is flat, paved, and stroller and wheelchair accessible. ADA accessible restrooms will be available on site. Accessible parking is available in the York Street Yards lot. If you have specific accessibility questions or requests, please email us at denverbikefest@gmail.com and we will do our best to accommodate.",
   },
];

const whatToExpect = [
   {
      header: "Community Connections",
      description:
         "Meet over 25 local bike organizations, community groups, and shops that make Denver a better place to ride.",
      image: "/community-connections.png",
   },
   {
      header: "Live Music and Entertainment",
      description:
         "Enjoy performances from local artists and bands throughout the day.",
      image: "/live-music.png",
   },
   {
      header: "Food and Drink",
      description: "Grab a bite or drink from local food trucks and vendors.",
      image: "/food.png",
   },
];
