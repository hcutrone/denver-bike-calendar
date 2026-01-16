import Image from "next/image";
import { Card, Flex, Inset, Text } from "@radix-ui/themes";
import { partners } from "../partner-data";

export default function PartnersPage() {
  return (
    <Flex
      maxWidth="1280px"
      m="auto"
      width="100%"
      height="100vh"
      p="32px"
      mt="64px"
      mb="64px"
      direction="column"
      gap={{ initial: "16px", sm: "32px" }}
    >
      <Text
        size={{ initial: "6", sm: "8", md: "9" }}
        style={{ color: "var(--lime-10)" }}
      >
        Bikefest Partners
      </Text>
      {partners.map((partner) => (
        <Flex gap="8px" direction="column" key={partner.header}>
          <Text
            size={{ initial: "5", sm: "7", md: "8" }}
            style={{ color: "var(--lime-10)" }}
          >
            {partner.header}
          </Text>
          <Flex
            direction="row"
            overflowX="scroll"
            gap={{ initial: "8px", sm: "16px" }}
          >
            {partner.groups.map((group, index) => (
              <Card
                key={group.name + index.toString()}
                style={{
                  minWidth: "150px",
                  maxWidth: "150px",
                  backgroundColor: "var(--lime-3)",
                  textAlign: "center",
                  paddingBottom: "4px",
                }}
              >
                <Flex gap="4px" direction="column" align="center">
                  <Inset pb="current" clip="padding-box">
                    <Image
                      src={group.logo}
                      alt={group.name}
                      width={150}
                      height={150}
                      style={{
                        backgroundColor: "var(--lime-3)",
                        minHeight: "150px",
                        objectFit: "contain",
                      }}
                    />
                  </Inset>
                  <Text
                    size="3"
                    style={{
                      color: "var(--lime-12)",
                      fontFamily: "var(--font-coming-soon)",
                    }}
                  >
                    {group.name}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      ))}

      {/* Contact form made specifically for new partners */}
    </Flex>
  );
}
