"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
   Button,
   type ButtonProps,
   Container,
   DropdownMenu,
   Flex,
   IconButton,
   Link,
   Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export function Header() {
   return (
      <header>
         <Flex
            width="100vw"
            height="72px"
            justify="center"
            px={"16px"}
            style={{
               backgroundColor: "var(--dark-green)",
               position: "fixed",
               top: 0,
               zIndex: 1000,
               borderBottom: "10px solid var(--yellow-accent)",
            }}
         >
            <Container
               height="100%"
               display={{ initial: "none", sm: "initial" }}
            >
               <DesktopHeader />
            </Container>

            <Container
               display={{ initial: "initial", sm: "none" }}
               height="100%"
            >
               <MobileHeader />
            </Container>
         </Flex>
      </header>
   );
}

const DesktopHeader = () => (
   <Flex
      width="100%"
      height="100%"
      maxWidth="1280px"
      justify="between"
      align="center"
   >
      <Button
         onClick={() => scrollToSection("")}
         style={{ cursor: "pointer", background: "transparent" }}
      >
         <Image
            src="/logo_horizontal_no_year.png"
            alt="Logo"
            width={200}
            height={75}
         />
      </Button>
      {HeaderButtons.map(({ label, id }) => (
         <HeaderButton key={id} onClick={() => scrollToSection(id)}>
            <Text size={{ initial: "3", sm: "6" }}>{label}</Text>
         </HeaderButton>
      ))}
      <VolunteerButton />
      <DonateButton />
   </Flex>
);

const DonateButton = () => (
   <Button
      asChild
      style={{
         padding: "18px",
         cursor: "pointer",
         fontFamily: "var(--font-poppins)",
         backgroundColor: "var(--light-background)",
         borderRadius: "12px",
      }}
   >
      <Link
         href="https://bikewalkbus.donorsupport.co/page/DenverBikeFest2026"
         target="_blank"
         rel="noopener noreferrer"
         underline="none"
      >
         <Text
            size={{ initial: "3", sm: "6", md: "7" }}
            style={{ color: "var(--dark-green)" }}
            weight="bold"
         >
            Donate
         </Text>
      </Link>
   </Button>
);

const VolunteerButton = () => (
   <Button
      asChild
      style={{
         padding: "18px",
         cursor: "pointer",
         fontFamily: "var(--font-poppins)",
         backgroundColor: "var(--light-background)",
         borderRadius: "12px",
      }}
   >
      <Link
         href="https://www.signupgenius.com/go/10C044AA8A92EA4F9CE9-63862642-volunteer"
         target="_blank"
         rel="noopener noreferrer"
         underline="none"
      >
         <Text
            size={{ initial: "3", sm: "6", md: "7" }}
            style={{ color: "var(--dark-green)" }}
            weight="bold"
         >
            Volunteer
         </Text>
      </Link>
   </Button>
);

const MobileHeader = () => (
   <Flex width="100%" height="100%" justify="between" align="center">
      <Button
         onClick={() => scrollToSection("")}
         style={{ cursor: "pointer", background: "transparent" }}
      >
         <Image
            src="/logo_horizontal_no_year.png"
            alt="Logo"
            width={200}
            height={75}
         />
      </Button>
      <DropdownMenu.Root>
         <DropdownMenu.Trigger>
            <IconButton
               radius="full"
               style={{
                  cursor: "pointer",
                  backgroundColor: "var(--lime-6)",
               }}
            >
               <HamburgerMenuIcon
                  color="var(--lime-12)"
                  height={16}
                  width={16}
               />
            </IconButton>
         </DropdownMenu.Trigger>
         <DropdownMenu.Content style={{ minWidth: "150px" }}>
            {HeaderButtons.map(({ label, id }) => (
               <DropdownMenu.Item key={id} onSelect={() => scrollToSection(id)}>
                  <Text
                     size={{ initial: "4", xs: "5" }}
                     style={{
                        color: "var(--lime-10)",
                     }}
                  >
                     {label}
                  </Text>
               </DropdownMenu.Item>
            ))}
            <DropdownMenu.Item>
               <Link
                  href="https://bikewalkbus.donorsupport.co/page/DenverBikeFest2026"
                  rel="noopener noreferrer"
               >
                  <Text
                     size={{ initial: "4", xs: "5" }}
                     style={{
                        color: "var(--lime-10)",
                     }}
                  >
                     Donate
                  </Text>
               </Link>
            </DropdownMenu.Item>
         </DropdownMenu.Content>
      </DropdownMenu.Root>
   </Flex>
);

const HeaderButton = ({
   children,
   ...props
}: { children: React.ReactNode } & ButtonProps) => {
   const [hover, setHover] = useState(false);
   return (
      <Button
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         radius="full"
         style={{
            padding: "12px",
            color: hover ? "var(--lime-12)" : "var(--lime-3)",
            background: hover ? "var(--lime-8)" : "transparent",
            cursor: "pointer",
            fontFamily: "var(--font-poppins)",
         }}
         {...props}
      >
         {children}
      </Button>
   );
};

const scrollToSection = (id: string) => {
   const element = document.getElementById(id);
   if (element) {
      element.scrollIntoView({ behavior: "smooth" });
   } else {
      window.location.href = `/#${id}`;
   }
};

const HeaderButtons = [
   { label: "General Info", id: "general" },
   { label: "Partners", id: "partners" },
   { label: "Contact Us", id: "contact" },
];
