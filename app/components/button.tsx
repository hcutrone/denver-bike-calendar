import { Button as RadixButton } from "@radix-ui/themes";
import { ReactNode, CSSProperties } from "react";

export function Button({
  style,
  children,
}: {
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <RadixButton
      style={{
        borderRadius: "full",
        backgroundColor: "#a4f199",
        color: "black",
        ...style,
      }}
    >
      {children}
    </RadixButton>
  );
}
