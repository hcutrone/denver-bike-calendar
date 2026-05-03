"use client";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { ChevronDownIcon, Flex, Grid, Text } from "@radix-ui/themes";
import { Collapsible } from "radix-ui";
import { useState } from "react";
import { PartnerCard } from "@/components";
import type { PartnerType } from "@/partner-data/partner-data";

export function CollapsiblePartnerGrid({
   partner,
   variant = "yellow",
}: {
   partner: {
      header: string;
      groups: PartnerType[];
      id: string;
   };
   variant: "yellow" | "green";
}) {
   const [isOpen, setIsOpen] = useState(true);
   const bgColor =
      variant === "yellow" ? "var(--yellow-accent)" : "var(--dark-green)";
   return (
      <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
         <Flex
            id={partner.id}
            direction="column"
            gap="16px"
            width="100%"
            style={{
               backgroundColor: bgColor,
               borderRadius: "12px",
               padding: "16px",
            }}
         >
            <Collapsible.Trigger
               style={{
                  width: "100%",
                  cursor: "pointer",
               }}
            >
               <Flex
                  direction="row"
                  justify="between"
                  align="center"
                  width="100%"
               >
                  <Text
                     size={{ initial: "4", sm: "5", md: "6" }}
                     style={{ color: "white" }}
                  >
                     {partner.header}
                  </Text>
                  {isOpen ? (
                     <ChevronUpIcon aria-hidden style={{ color: "white" }} />
                  ) : (
                     <ChevronDownIcon aria-hidden style={{ color: "white" }} />
                  )}
               </Flex>
            </Collapsible.Trigger>
            <Collapsible.Content>
               <Flex
                  p={{ initial: "8px", sm: "12px", md: "16px" }}
                  justify={{ initial: "center", sm: "start" }}
               >
                  <Grid
                     columns={{
                        initial: "1",
                        xs: "2",
                        sm: "3",
                        md: "4",
                        lg: "5",
                     }}
                     gap="16px"
                  >
                     {partner.groups.map((group, index) => (
                        <PartnerCard
                           key={group.name + index.toString()}
                           {...group}
                           url={
                              group.url ??
                              (group.instagram
                                 ? `https://www.instagram.com/${group.instagram.substring(1)}`
                                 : "#")
                           }
                           highlightClass={
                              variant === "yellow"
                                 ? "hover-highlight-green-orange"
                                 : "hover-highlight-yellow-orange"
                           }
                           imageSizing={{
                              initial: "150px",
                              sm: "175px",
                              md: "200px",
                           }}
                        />
                     ))}
                  </Grid>
               </Flex>
            </Collapsible.Content>
         </Flex>
      </Collapsible.Root>
   );
}
