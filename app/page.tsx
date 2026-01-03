"use server";

import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { General, Sponsors } from "./components";
import { About } from "./components/about";
import { Partners } from "./components/partners";

export default async function Home() {
	return (
		<div style={{ backgroundColor: "#f6f6e9" }}>
			<LandingImage />
			<Sponsors />
			<About />
			<General />
			<Partners />
		</div>
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
				<Text
					size={{ initial: "6", sm: "8", md: "9" }}
					style={{
						backgroundColor: "#d8af53",
						paddingInline: "32px",
						borderRadius: "50px",
					}}
				>
					Bikes, Community, and Connection!
				</Text>
				<Text
					size={{ initial: "6", sm: "8", md: "9" }}
					style={{
						backgroundColor: "#d8af53",
						paddingInline: "32px",
						borderRadius: "50px",
					}}
				>
					June 13, 2026 | 3PM - 9PM
				</Text>
				<Text
					size={{ initial: "6", sm: "8", md: "9" }}
					style={{
						backgroundColor: "#d8af53",
						paddingInline: "32px",
						borderRadius: "50px",
					}}
				>
					York Street Yards
				</Text>
			</Flex>
		</Flex>
	);
}
