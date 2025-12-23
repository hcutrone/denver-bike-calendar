import Image from "next/image";
import { Flex } from "@radix-ui/themes";
import { Button } from "./button";

export function Header() {
  return (
    <Flex
      width="100%"
      height="64px"
      style={{
        backgroundColor: "#4d643b",
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Image
        src="/bikefest.png"
        alt="Logo"
        width={100}
        height={100}
        style={{ margin: "auto" }}
      />
      <h1 style={{ color: "white", margin: "auto" }}>About</h1>
      <h1 style={{ color: "white", margin: "auto" }}>General Info</h1>
      <h1 style={{ color: "white", margin: "auto" }}>Partners</h1>
      <h1 style={{ color: "white", margin: "auto" }}>Get Involved</h1>
      <Button style={{ margin: "auto", borderRadius: "50px" }}>Donate</Button>
    </Flex>
  );
}
