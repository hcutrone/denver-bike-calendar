import Image from "next/image";
import { Flex } from "@radix-ui/themes";

export function Footer() {
  return (
    <Flex width="100%" style={{ backgroundColor: "#4d643b" }}>
      <Image
        src="/bikefest.png"
        alt="Logo"
        width={100}
        height={100}
        style={{ margin: "auto" }}
      />
    </Flex>
  );
}
