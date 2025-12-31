import { Flex, Text } from "@radix-ui/themes";
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
			width="165px"
			gap="8px"
			style={{
				marginLeft: "32px",
				padding: "16px",
			}}
		>
			<Image src={logo} alt={name} width={100} height={50} />
			<Text
				size="5"
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
	const Divider = ({ width, color }: { width: string; color: string }) => (
		<div style={{ height: "10px", width, backgroundColor: color }}></div>
	);
	return (
		<Flex direction="column" gap="16px">
			<Flex
				style={{
					backgroundColor: "var(--lime-9)",
					justifyContent: "center",
					paddingBlock: "20px",
				}}
			>
				<Text size="9">Thank you to our sponsors:</Text>
			</Flex>
			{sponsorTiers.map((tier, index) => (
				<Flex direction="column" key={tier.name} gap="16px">
					<SponsorHeader {...tier} />
					<Divider
						width={`${((index + 1) / sponsorTiers.length) * 100}%`}
						color={tier.color}
					/>
				</Flex>
			))}
		</Flex>
	);
}
