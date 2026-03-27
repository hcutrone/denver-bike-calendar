import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";

export const SponsorCTA = () => (
   <Flex
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
         mt="12px"
         direction="column"
         gap={{ initial: "8px", sm: "16px", md: "32px" }}
         maxWidth="1280px"
         m="auto"
      >
         <Heading
            as="h2"
            trim="end"
            size={{ initial: "5", sm: "7", md: "8" }}
            style={{ color: "var(--light-background)" }}
         >
            Want to help make Denver Bike Fest happen?
         </Heading>
         <Text
            size={{ initial: "3", sm: "5", md: "6" }}
            style={{ color: "var(--light-background)" }}
         >
            If your business or organization is interested in sponsoring the
            event or partnering with us, please reach out at{" "}
            <Link
               href="mailto:denverbikefest@gmail.com"
               underline="always"
               style={{ color: "var(--yellow-accent)" }}
            >
               denverbikefest@gmail.com
            </Link>
         </Text>
      </Flex>
   </Flex>
);
