import { Box, Button, Flex, Reset, Section, Text } from "@radix-ui/themes";
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
					<Text style={{ color: "var(--lime-11)" }}>
						Live Music and Entertainment
					</Text>
					<Text style={{ color: "var(--lime-11)" }}>
						Enjoy performances from local artists and bands throughout the day.
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
					<Text style={{ color: "var(--lime-11)" }}>Food and Refreshments</Text>
					<Text style={{ color: "var(--lime-11)" }}>
						Grab a bite or drink from local food trucks and vendors.
					</Text>
				</Flex>
			</Flex>

			<Flex direction="column" style={{ margin: "auto" }}>
				<Text style={{ color: "var(--lime-11)" }}>Learn more about the</Text>
				<Button
					radius="full"
					style={{
						backgroundColor: "#d8af53",
						fontFamily: "var(--font-coming-soon)",
						padding: "20px",
						cursor: "pointer",
					}}
				>
					<Text style={{ color: "white" }}>2026 Partners</Text>
				</Button>
			</Flex>

			<Text size="8" style={{ color: "var(--lime-11)" }}>
				Getting There
			</Text>
			<Flex direction="row" gap="32px">
				<Image
					src="/map.png"
					alt="Map to York Street Yards"
					width={450}
					height={800}
				/>
				<Flex direction="column">
					<Text size="7" style={{ color: "var(--lime-11)" }}>
						York Street Yards
					</Text>
					<Text size="5" style={{ color: "var(--lime-11)" }}>
						3821-3893 Steele Street
					</Text>
					<Text size="5" style={{ color: "var(--lime-11)" }}>
						Denver, CO 80205
					</Text>
					<Button
						radius="full"
						style={{
							backgroundColor: "#d8af53",
							fontFamily: "var(--font-coming-soon)",
							padding: "20px",
							cursor: "pointer",
							marginTop: "16px",
						}}
					>
						<Text style={{ color: "white" }}>Get Directions</Text>
					</Button>
				</Flex>
			</Flex>
			<Text style={{ color: "var(--lime-11)" }}>
				Denver Bike Fest is located at York Street Yards, which is directly
				south of the 39th Avenue Greenway, blocks from major bus stops and a
				mile from multiple Light Rail stops. The Yards also has ample public
				parking available.
			</Text>
			<Text style={{ color: "var(--lime-11)" }}>
				FREE Bike Corral: In the spirit of Bike Fest, Z Cycle Shop will be
				offering free bike valet to keep your ride safe while you enjoy the
				festival! The Bike Corral will be available from 3:00 p.m. to 7:30 p.m.
				during the event. Please be sure to pick up your bike by 7:30pm!
			</Text>

			<Text size="8" style={{ color: "var(--lime-11)" }}>
				FAQs
			</Text>
			<Text style={{ color: "var(--lime-11)" }}>
				Are pets allowed?
				<br />
				While we love our furry friends, pets are not allowed inside Denver Bike
				Fest events located on The Yard. However, Skip Town, a dog bar and park
				is right next door and would love to meet your pup!
			</Text>
		</Flex>
	</Section>
);
