import { Flex, Section, Text } from "@radix-ui/themes";
import Image from "next/image";

export const General = () => (
	<Section>
		<Flex
			direction="column"
			style={{
				padding: "32px",
				maxWidth: "1280px",
				margin: "auto",
			}}
			id="general"
			gap="16px"
		>
			<Text size="9" style={{ color: "var(--lime-11)" }}>
				General Info
			</Text>
			<Flex direction="row" gap="32px" style={{ marginBottom: "32px" }}>
				<Flex
					direction="column"
					style={{
						backgroundColor: "var(--lime-9)",
						borderRadius: "25px",
						padding: "16px",
						textWrap: "nowrap",
						fontWeight: "bold",
					}}
				>
					<Text>Date: June 13, 2026</Text>
					<Text>Time: 3-9 PM</Text>
					<Text>Location: York Street Yards</Text>
					<Text>Cost: Free</Text>
				</Flex>
				<Text style={{ color: "var(--lime-11)" }}>
					{`Denver Bike Fest is a community celebration of bikes, music, and
      connection. The festival brings together local bike groups, shops,
      artists, and food vendors to show how fun, creative, and inclusive
      Denver’s cycling community can be. Whether you ride every day or just love
      the vibe, you’re invited to join in!`}
				</Text>
			</Flex>
			<Text size="8" style={{ color: "var(--lime-11)" }}>
				What to Expect
			</Text>
			<Flex direction="row" gap="32px">
				<Image
					src="/bicycle.png"
					alt="Bike This City"
					width={200}
					height={50}
				/>
				<Flex direction="column">
					<Text style={{ color: "var(--lime-11)" }}>Community Connections</Text>
					<Text style={{ color: "var(--lime-11)" }}>
						Meet over 25 local bike organizations, community groups, and shops
						that make Denver a better place to ride.
					</Text>
				</Flex>
			</Flex>
			<Flex direction="row" gap="32px">
				<Image
					src="/bicycle.png"
					alt="Bike This City"
					width={200}
					height={50}
				/>
				<Flex direction="column">
					<Text style={{ color: "var(--lime-11)" }}>Community Connections</Text>
					<Text style={{ color: "var(--lime-11)" }}>
						Meet over 25 local bike organizations, community groups, and shops
						that make Denver a better place to ride.
					</Text>
				</Flex>
			</Flex>
			<Flex direction="row" gap="32px">
				<Image
					src="/bicycle.png"
					alt="Bike This City"
					width={200}
					height={50}
				/>
				<Flex direction="column">
					<Text style={{ color: "var(--lime-11)" }}>Community Connections</Text>
					<Text style={{ color: "var(--lime-11)" }}>
						Meet over 25 local bike organizations, community groups, and shops
						that make Denver a better place to ride.
					</Text>
				</Flex>
			</Flex>
		</Flex>
	</Section>
);
