import { Box, Button, Card, Flex, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export function Partners() {
	return (
		<Flex
			p={{ initial: "16px", sm: "24px", md: "32px" }}
			direction="column"
			gap={{ initial: "8px", sm: "16px" }}
			id="partners"
			style={{
				backgroundColor: "var(--lime-9)",
			}}
			overflowX="hidden"
		>
			<Text size={{ initial: "6", sm: "8", md: "9" }}>Bike Fest Partners</Text>
			<Text size={{ initial: "3", sm: "5", md: "6" }}>
				Denver Bike Fest is built by the community, for the community. Whether
				you want to volunteer, sponsor, perform, or just lend a hand spreading
				the word, there’s a place for you here.
				<br />
				<br />
				Click the button below to fill out the form to let us know how you’d
				like to get involved, and we’ll follow up with more details as we start
				planning for the next festival!
			</Text>
			<Flex gap={{ initial: "16px", sm: "32px" }} direction="column">
				{partners.map((partner) => (
					<Flex gap="8px" direction="column" key={partner.header}>
						<Flex justify="between">
							<Text size={{ initial: "5", sm: "7", md: "8" }}>
								{partner.header}
							</Text>
							<Link
								href="/partners"
								style={{ textDecoration: "underline", color: "var(--lime-3)" }}
							>
								See All {">"}
							</Link>
						</Flex>
						<Flex direction="row" overflowX="scroll" gap="8px">
							{partner.groups.splice(0, 5).map((group, index) => (
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
				<Button
					radius="full"
					style={{
						width: "fit-content",
						padding: "20px",
						margin: "auto",
						fontFamily: "var(--font-coming-soon)",
						backgroundColor: "#d8af53",
						cursor: "pointer",
					}}
				>
					<Text
						size={{ initial: "4", sm: "6", md: "7" }}
						style={{ color: "white" }}
					>
						Join Us!
					</Text>
				</Button>
			</Flex>
		</Flex>
	);
}

const communityGroups = [
	{
		name: "Bike and Brew Denver",
		logo: "/partners/bike-and-brew.png",
	},
	{
		name: "Bike and Brew Denver",
		logo: "/partners/bike-and-brew.png",
	},
	{
		name: "Bike and Brew Denver",
		logo: "/partners/bike-and-brew.png",
	},
	{
		name: "Bike and Brew Denver",
		logo: "/partners/bike-and-brew.png",
	},
	{
		name: "All Bodies on Bikes",
		logo: "/partners/all-bodies-on-bikes.png",
	},
];

const nonProfits = [
	{
		name: "All Bodies on Bikes",
		logo: "/partners/all-bodies-on-bikes.png",
	},
	{
		name: "All Bodies on Bikes",
		logo: "/partners/all-bodies-on-bikes.png",
	},
	{
		name: "All Bodies on Bikes",
		logo: "/partners/all-bodies-on-bikes.png",
	},
	{
		name: "All Bodies on Bikes",
		logo: "/partners/all-bodies-on-bikes.png",
	},
	{
		name: "All Bodies on Bikes",
		logo: "/partners/all-bodies-on-bikes.png",
	},
];

const localBusinesses = [
	{
		name: "Campus Cycles",
		logo: "/partners/campus-cycles.png",
	},
	{
		name: "Campus Cycles",
		logo: "/partners/campus-cycles.png",
	},
	{
		name: "Campus Cycles",
		logo: "/partners/campus-cycles.png",
	},
	{
		name: "Campus Cycles",
		logo: "/partners/campus-cycles.png",
	},
	{
		name: "Campus Cycles",
		logo: "/partners/campus-cycles.png",
	},
];

const partners = [
	{ header: "Community Groups", groups: communityGroups },
	{ header: "NonProfit/Government", groups: nonProfits },
	{ header: "Local Businesses", groups: localBusinesses },
];
