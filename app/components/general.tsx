import {
	Button,
	ChevronDownIcon,
	Flex,
	Link,
	Separator,
	Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { Accordion } from "radix-ui";
import { GOOGLE_MAPS_API_KEY } from "@/env";

export const General = () => (
	<Flex
		id="general"
		direction="column"
		p={{ initial: "24px", sm: "32px" }}
		py={{ initial: "32px", sm: "64px" }}
		maxWidth="1280px"
		m="auto"
		gap={{ initial: "8px", sm: "16px", md: "32px" }}
	>
		<Text
			size={{ initial: "7", sm: "8", md: "9" }}
			style={{ color: "var(--lime-11)" }}
			mb="8px"
		>
			General Info
		</Text>
		<Flex
			direction={{ initial: "column", sm: "row" }}
			gap={{ initial: "8px", sm: "16px" }}
			mb={{ initial: "16px", sm: "24px", md: "32px" }}
			align="center"
		>
			<Flex
				direction="column"
				width="fit-content"
				p={{ initial: "12px", sm: "16px" }}
				style={{
					backgroundColor: "var(--lime-9)",
					borderRadius: "25px",
					textWrap: "nowrap",
					fontWeight: "bold",
				}}
			>
				<Text size={{ initial: "2", sm: "5", md: "6" }}>
					Date: June 13, 2026
				</Text>
				<Text size={{ initial: "2", sm: "5", md: "6" }}>Time: 3-9 PM</Text>
				<Text size={{ initial: "2", sm: "5", md: "6" }}>
					Location: York Street Yards
				</Text>
				<Text size={{ initial: "2", sm: "5", md: "6" }}>Cost: Free</Text>
			</Flex>
			<Text
				size={{ initial: "3", sm: "5", md: "6" }}
				style={{ color: "var(--lime-11)" }}
			>
				{`Denver Bike Fest is a community celebration of bikes, music, and
      connection. The festival brings together local bike groups, shops,
      artists, and food vendors to show how fun, creative, and inclusive
      Denver’s cycling community can be. Whether you ride every day or just love
      the vibe, you’re invited to join in!`}
			</Text>
		</Flex>
		<Text
			size={{ initial: "5", sm: "7", md: "8" }}
			style={{ color: "var(--lime-11)" }}
			mb="8px"
		>
			What to Expect
		</Text>
		<Flex
			direction={{ initial: "column", sm: "row" }}
			gap={{ initial: "12px", sm: "16px", md: "32px" }}
			align="center"
		>
			<Image
				src="/community-connections.png"
				alt="Community Connections"
				width={300}
				height={50}
				style={{
					border: "3px solid var(--lime-9)",
					borderRadius: "12px",
				}}
			/>
			<Flex
				direction="column"
				style={{ textAlign: "center" }}
				width="100%"
				gap="8px"
			>
				<Text
					size={{ initial: "4", sm: "6", md: "7" }}
					style={{ color: "var(--lime-11)" }}
				>
					Community Connections
				</Text>
				<Text
					size={{ initial: "3", sm: "5", md: "6" }}
					style={{ color: "var(--lime-11)" }}
				>
					Meet over 25 local bike organizations, community groups, and shops
					that make Denver a better place to ride.
				</Text>
			</Flex>
		</Flex>
		<Separator orientation="horizontal" size="4" />
		<Flex
			direction={{ initial: "column", sm: "row" }}
			gap={{ initial: "12px", sm: "16px", md: "32px" }}
			align="center"
		>
			<Image
				src="/live-music.png"
				alt="Live Music and Entertainment"
				width={300}
				height={50}
				style={{
					border: "3px solid var(--lime-9)",
					borderRadius: "12px",
				}}
			/>
			<Flex
				direction="column"
				style={{ textAlign: "center" }}
				width="100%"
				gap="8px"
			>
				<Text
					size={{ initial: "4", sm: "6", md: "7" }}
					style={{ color: "var(--lime-11)" }}
				>
					Live Music and Entertainment
				</Text>
				<Text
					size={{ initial: "3", sm: "5", md: "6" }}
					style={{ color: "var(--lime-11)" }}
				>
					Enjoy performances from local artists and bands throughout the day.
				</Text>
			</Flex>
		</Flex>
		<Separator orientation="horizontal" size="4" />
		<Flex
			direction={{ initial: "column", sm: "row" }}
			gap={{ initial: "12px", sm: "16px", md: "32px" }}
			align="center"
		>
			<Image
				src="/food.png"
				alt="Food and Refreshments"
				width={300}
				height={50}
				style={{
					border: "3px solid var(--lime-9)",
					borderRadius: "12px",
				}}
			/>
			<Flex
				direction="column"
				style={{ textAlign: "center" }}
				width="100%"
				gap="8px"
			>
				<Text
					size={{ initial: "4", sm: "6", md: "7" }}
					style={{ color: "var(--lime-11)" }}
				>
					Food and Refreshments
				</Text>
				<Text
					size={{ initial: "3", sm: "5", md: "6" }}
					style={{ color: "var(--lime-11)" }}
				>
					Grab a bite or drink from local food trucks and vendors.
				</Text>
			</Flex>
		</Flex>

		<Flex
			direction="column"
			my={{ initial: "48px", sm: "52px", md: "64px" }}
			mx="auto"
		>
			<Text
				size={{ initial: "5", sm: "6", md: "7" }}
				style={{ color: "var(--lime-11)" }}
			>
				Learn more about the
			</Text>
			<Button
				asChild
				radius="full"
				style={{
					backgroundColor: "#d8af53",
					fontFamily: "var(--font-coming-soon)",
					cursor: "pointer",
					padding: "20px",
				}}
			>
				<Link href="/partners" underline="none">
					<Text
						size={{ initial: "5", sm: "6", md: "7" }}
						style={{ color: "white" }}
					>
						2026 Partners
					</Text>
				</Link>
			</Button>
		</Flex>

		<Text
			mt="12px"
			size={{ initial: "6", sm: "7", md: "8" }}
			style={{ color: "var(--lime-11)" }}
		>
			Getting There
		</Text>
		<Flex direction={{ initial: "column", sm: "row" }} gap="32px">
			<iframe
				title="Map to York Street Yards"
				src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=York+Street+Yards,Denver+CO`}
				width="450"
				height="380"
				style={{ border: 0, maxWidth: "100%" }}
				loading="lazy"
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
					asChild
					radius="full"
					style={{
						backgroundColor: "#d8af53",
						fontFamily: "var(--font-coming-soon)",
						padding: "20px",
						cursor: "pointer",
						marginTop: "16px",
					}}
				>
					<Link
						href="https://maps.app.goo.gl/FqQBwv3KrG52Y43x7"
						underline="none"
						target="_blank"
					>
						<Text style={{ color: "white" }}>Get Directions</Text>
					</Link>
				</Button>
			</Flex>
		</Flex>
		<Text
			size={{ initial: "3", sm: "5", md: "6" }}
			style={{ color: "var(--lime-11)" }}
		>
			Denver Bike Fest is located at York Street Yards, which is directly south
			of the 39th Avenue Greenway, blocks from major bus stops and a mile from
			multiple Light Rail stops. The Yards also has ample public parking
			available.
		</Text>
		<Text
			size={{ initial: "3", sm: "5", md: "6" }}
			style={{ color: "var(--lime-11)" }}
		>
			FREE Bike Corral: In the spirit of Bike Fest, Z Cycle Shop will be
			offering free bike valet to keep your ride safe while you enjoy the
			festival! The Bike Corral will be available from 3:00 p.m. to 7:30 p.m.
			during the event. Please be sure to pick up your bike by 7:30pm!
		</Text>

		<Text
			size={{ initial: "6", sm: "7", md: "8" }}
			mt="12px"
			style={{ color: "var(--lime-11)" }}
		>
			FAQs
		</Text>
		<Accordion.Root
			type="single"
			collapsible
			style={{
				width: "100%",
				backgroundColor: "var(--lime-3)",
				border: "1px solid var(--lime-7)",
				borderRadius: "12px",
			}}
		>
			{faqs.map((q, index) => (
				<div key={q.question}>
					<Accordion.Item
						value={`item-${index}`}
						style={{ padding: "16px", width: "100%" }}
					>
						<Accordion.Trigger style={{ width: "100%" }}>
							<Flex
								direction="row"
								justify="between"
								align="center"
								width="100%"
							>
								<Text
									size={{ initial: "4", sm: "5", md: "6" }}
									style={{ color: "var(--lime-11)" }}
								>
									{q.question}
								</Text>
								<ChevronDownIcon
									className="group-data-[state=open]:rotate-180"
									aria-hidden
								/>
							</Flex>
						</Accordion.Trigger>
						<Accordion.Content style={{ paddingTop: "8px" }}>
							<Text
								size={{ initial: "3", sm: "4", md: "5" }}
								style={{ color: "var(--lime-11)" }}
							>
								{q.answer}
							</Text>
						</Accordion.Content>
					</Accordion.Item>
					{index !== faqs.length - 1 && (
						<Separator
							orientation="horizontal"
							size="4"
							style={{ backgroundColor: "var(--lime-7)" }}
						/>
					)}
				</div>
			))}
		</Accordion.Root>
	</Flex>
);

const faqs = [
	{
		question: "Are pets allowed?",
		answer:
			"While we love our furry friends, pets are not allowed inside Denver Bike Fest events located on The Yard. However, Skip Town, a dog bar and park is right next door and would love to meet your pup!",
	},
	{
		question: "How much does it cost to attend?",
		answer:
			"Denver Bike Fest is FREE and open to the public to attend. Food and beverages, along with merchandise from vendors will be for sale at the festival. If you would like to participate as a Bike Partner, vendor, or musician, please see the Get Involved page.",
	},
	{
		question: "Is the event family-friendly?",
		answer:
			"Yes! There is something for everyone at Denver Bike Fest, including little ones. All ages are welcome to come join in on the fun.",
	},
	{
		question: "Are there bathrooms?",
		answer:
			"Yes! There are multiple indoor common area bathrooms (with a total of 24 toilets/urinals) available and additional portable toilets will be available outdoors.",
	},
];
