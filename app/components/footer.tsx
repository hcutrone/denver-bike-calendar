import { Avatar, Box, Flex, Link, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";

export function Footer() {
	return (
		<Flex
			direction="column"
			p="4"
			gap="12px"
			align="center"
			style={{ backgroundColor: "var(--lime-9)" }}
		>
			<Flex
				direction={{ initial: "column", xs: "row" }}
				align="center"
				gap="8px"
				justify="center"
				mx="auto"
			>
				<Text size={{ initial: "2", md: "3" }}>Made with 🫶🏻 by</Text>
				<Box>
					<Avatar
						src="/harrison.jpeg"
						fallback="HC"
						alt="Harrison Cutrone"
						size="2"
					/>
					<Text size={{ initial: "2", md: "3" }} style={{ marginLeft: "8px" }}>
						Harrison Cutrone (
						<Link
							href="https://instagram.com/harrisoncutrone"
							style={{ fontSize: "inherit", cursor: "pointer" }}
							underline="always"
						>
							@harrisoncutrone
						</Link>
						)
					</Text>
				</Box>
			</Flex>
			<Separator size="3" style={{ backgroundColor: "var(--lime-7)" }} />
			<Flex
				direction={{ initial: "column", xs: "row" }}
				align="center"
				gap="8px"
				justify="center"
				mx="auto"
			>
				<Text size={{ initial: "2", md: "3" }}>Organized with 🫶🏻 by</Text>
				<Box>
					<Avatar
						src="/bike-this-city.png"
						fallback="EK"
						alt="Emily Klienfelter"
						size="2"
					/>
					<Text size={{ initial: "2", md: "3" }} style={{ marginLeft: "8px" }}>
						Emily Klienfelter (
						<Link
							href="https://instagram.com/bike.this.city"
							style={{ fontSize: "inherit", cursor: "pointer" }}
							underline="always"
						>
							@bikethiscity
						</Link>
						)
					</Text>
				</Box>
			</Flex>
			<Separator size="3" style={{ backgroundColor: "var(--lime-7)" }} />
			<Image
				src="/bikefest.png"
				alt="Logo"
				width={200}
				height={200}
				style={{ margin: "auto" }}
			/>
		</Flex>
	);
}
