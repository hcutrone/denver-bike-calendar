import Image from "next/image";
import { Grid, Text } from "@radix-ui/themes";

export function Footer() {
  return (
   <Grid columns={'3'} width='100%' p="32px" style={{ backgroundColor: "#4d643b"}}>
      <Text>
         Made with 🫶🏻 (and without AI 🤖) by Harrison Cutrone
      </Text>
      <Image
        src="/bikefest.png"
        alt="Logo"
        width={200}
        height={200}
        style={{ margin: "auto" }}
      />
      <Text>Some other text</Text>
   </Grid>
  );
}
