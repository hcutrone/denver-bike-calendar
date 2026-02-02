import { Button, Flex, Link, Text } from "@radix-ui/themes";
import { featuredPartners } from "../partner-data";
import { PartnerCard } from "../partners/page";

export function Partners() {
	return (
		<Flex
			id="partners"
			style={{
				backgroundColor: "var(--lime-9)",
			}}
		>
			<Flex
				p={{ initial: "24px", sm: "32px" }}
				py={{ initial: "32px", sm: "64px" }}
				direction="column"
				gap={{ initial: "8px", sm: "16px", md: "32px" }}
				maxWidth="1280px"
				m="auto"
				overflowX="hidden"
			>
				<Text size={{ initial: "7", sm: "8", md: "9" }}>
					Bike Fest Partners
				</Text>
				<Text size={{ initial: "3", sm: "5", md: "6" }}>
					Denver Bike Fest is built by the community, for the community. Whether
					you want to volunteer, sponsor, perform, or just lend a hand spreading
					the word, there’s a place for you here.
				</Text>
				<Text size={{ initial: "3", sm: "5", md: "6" }}>
					Click the button below to fill out the form to let us know how you’d
					like to get involved, and we’ll follow up with more details as we
					start planning for the next festival!
				</Text>
				<Flex gap={{ initial: "16px", sm: "32px" }} direction="column">
					{featuredPartners.map((partner) => (
						<Flex
							gap={{ initial: "8px", sm: "12px", md: "16px" }}
							direction="column"
							key={partner.header}
						>
							<Flex justify="between">
								<Text size={{ initial: "5", sm: "7", md: "8" }}>
									{partner.header}
								</Text>
								<Link
									href="/partners"
									style={{
										textDecoration: "underline",
										color: "var(--lime-3)",
									}}
								>
									See All {">"}
								</Link>
							</Flex>
							<Flex
								direction="row"
								overflowX="scroll"
								gap={{ initial: "8px", sm: "16px" }}
							>
								{partner.groups.map((group, index) => (
									<PartnerCard
										key={group.name + index.toString()}
										group={group}
									/>
								))}
								<div
									style={{
										position: "sticky",
										right: 0,
										minHeight: "100%",
										minWidth: "20px",
										display: "flex",
										background:
											"linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, var(--lime-9) 100%)",
									}}
								/>
							</Flex>
						</Flex>
					))}
					<Button
						asChild
						radius="full"
						mt={{ initial: "16px", sm: "32px" }}
						style={{
							width: "fit-content",
							padding: "20px",
							marginInline: "auto",
							fontFamily: "var(--font-coming-soon)",
							backgroundColor: "#d8af53",
							cursor: "pointer",
						}}
					>
						<Link href="/partners#contact-form" underline="none">
							<Text
								size={{ initial: "4", sm: "6", md: "7" }}
								style={{ color: "white" }}
							>
								Get Involved
							</Text>
						</Link>
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
