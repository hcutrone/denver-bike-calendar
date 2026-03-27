"use client";

import { Button, Flex, IconButton, Link, Strong, Text } from "@radix-ui/themes";
import { useState } from "react";

export const RegisterBanner = () => {
   const [isVisible, setIsVisible] = useState(true);
   if (!isVisible) {
      return null;
   }
   return (
      <Flex
         id="register-banner"
         position="fixed"
         bottom="0"
         left="50%"
         minWidth={{ initial: "90%", xs: "max-content" }}
         py={{ initial: "12px", sm: "16px" }}
         px={{ initial: "20px", sm: "24px" }}
         mb="8px"
         align="center"
         justify="between"
         gap={{ initial: "14px", sm: "36px" }}
         style={{
            backgroundColor: "var(--light-background)",
            border: "1px solid var(--dark-green)",
            borderRadius: "12px",
            transform: "translateX(-50%)",
            boxShadow: "0 6px 8px rgba(0, 0, 0, 0.3)",
         }}
      >
         <IconButton
            variant="ghost"
            color="gray"
            onClick={() => setIsVisible(false)}
            radius="full"
            style={{
               position: "absolute",
               top: "0",
               right: "8px",
               backgroundColor: "transparent",
               cursor: "pointer",
            }}
         >
            &times;
         </IconButton>
         <Flex direction="column">
            <Text
               size={{ initial: "3", sm: "4", md: "5" }}
               style={{ color: "var(--dark-green)" }}
            >
               <Strong>Register to be a 2026 Partner today!</Strong>
            </Text>
            <Text
               size={{ initial: "1", sm: "2", md: "3" }}
               style={{ color: "var(--dark-green)" }}
            >
               Registration is open until May 15th, 2026
            </Text>
         </Flex>
         <Button
            asChild
            style={{
               padding: "12px 14px",
               cursor: "pointer",
               fontFamily: "var(--font-poppins)",
               backgroundColor: "var(--dark-green)",
               borderRadius: "12px",
            }}
         >
            <Link
               href="https://www.eventbrite.com/e/denver-bike-fest-2026-partner-registration-registration-1984436547132?aff=oddtdtcreator"
               target="_blank"
               rel="noopener noreferrer"
            >
               <Text
                  size={{ initial: "3", sm: "4", md: "5" }}
                  style={{ color: "var(--light-background)" }}
                  weight="bold"
               >
                  Register
               </Text>
            </Link>
         </Button>
      </Flex>
   );
};
