"use server";

import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { General, Sponsors } from "./components";
import { About } from "./components/about";
import { ContactUs } from "./components/contact";
import { Partners } from "./components/partners";

export default async function Home() {
	return (
		<>
			<LandingImage />
			<Sponsors />
			<About />
			<General />
			<Partners />
			<ContactUs />
		</>
	);
}

function LandingImage() {
	return (
		<Flex
			style={{
				height: "100vh",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
			}}
		>
			<Image
				src="/bikes.jpeg"
				alt="Landing"
				fill
				style={{ objectFit: "cover", opacity: 0.5 }}
			/>
			<Flex
				width="100%"
				px="16px"
				gap="8px"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					fontSize: "48px",
					fontWeight: "bold",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<Image src="/bikefest.png" alt="Logo" width={500} height={500} />
				<HighlightedText>Bikes, Community, and Connection!</HighlightedText>
				<HighlightedText>June 13, 2026 | 3PM - 9PM</HighlightedText>
				<HighlightedText>York Street Yards</HighlightedText>
			</Flex>
		</Flex>
	);
}

const HighlightedText = ({ children }: { children: React.ReactNode }) => (
	<Flex
		px={{ initial: "16px", sm: "24px" }}
		py={{ initial: "4px", sm: "12px" }}
		style={{
			backgroundColor: "#d8af53",
			borderRadius: "50px",
		}}
	>
		<Text size={{ initial: "6", sm: "8" }} style={{ color: "white" }}>
			{children}
		</Text>
	</Flex>
);
