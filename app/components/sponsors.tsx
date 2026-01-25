import { Flex, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

const sponsorTiers = [
	{
		name: "Tandem",
		logo: "/tandem.png",
		color: "#af9096",
	},
	{
		name: "Cargo",
		logo: "/cargo.png",
		color: "#d8af53",
	},
	{
		name: "Commuter",
		logo: "/commuter.png",
		color: "#879bb4",
	},
	{
		name: "Cruiser",
		logo: "/cruiser.png",
		color: "#8f9b93",
	},
	{ name: "Strider", logo: "/strider.png", color: "#d5c487" },
];

export function Sponsors() {
	const SponsorHeader = ({
		name,
		logo,
		color,
	}: {
		name: string;
		logo: string;
		color: string;
	}) => (
		<Flex
			direction="column"
			align="center"
			width={{ initial: "90px", sm: "140px", md: "165px" }}
			gap="8px"
			p={{ initial: "4px", sm: "8px", md: "16px" }}
			ml={{ initial: "12px", sm: "16px" }}
		>
			<Image src={logo} alt={name} width={100} height={50} />
			<Text
				size={{ initial: "2", sm: "5" }}
				style={{
					color: "white",
					fontWeight: "bold",
					backgroundColor: color,
					borderRadius: "50px",
					width: "100%",
					textAlign: "center",
				}}
			>
				{name}
			</Text>
		</Flex>
	);
	return (
		<Flex direction="column" gap="16px">
			<Flex
				py={{ initial: "12px", sm: "20px" }}
				style={{
					backgroundColor: "var(--lime-9)",
					justifyContent: "center",
					textAlign: "center",
				}}
			>
				<Text size={{ initial: "6", sm: "8" }}>Thank you to our sponsors:</Text>
			</Flex>
			{sponsorTiers.map((tier) => (
				<Flex direction="column" key={tier.name} gap="16px">
					<SponsorHeader {...tier} />
					<Separator
						orientation="horizontal"
						size="4"
						style={{ height: "10px" }}
					/>
				</Flex>
			))}
		</Flex>
	);
}
