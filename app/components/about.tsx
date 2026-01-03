import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";

export const About = () => (
	<Flex
		style={{
			backgroundColor: "var(--lime-9)",
		}}
		id="about"
	>
		<Flex
			direction="column"
			style={{
				padding: "32px",
				maxWidth: "1280px",
				margin: "auto",
				gap: "8px",
			}}
		>
			<Text size={"9"}>What is Denver Bike Fest?</Text>
			<Text>
				What started as a simple idea from Emily Kleinfelter (Bike This City) on
				a Thanksgiving social ride in 2024 hosted by Z Cycle turned into the
				ultimate celebration of the city&apos;s vibrant bicycle community.
				Denver Bike Fest is all about celebrating community, connection, and the
				joy of getting around on two wheels. Hosted by Z Cycle Shop and Bike
				This City, the festival brings together local community groups,
				nonprofits, and businesses to showcase their efforts to get more people
				on bikes. Featuring live music, food trucks, and beer all sourced
				locally, Denver Bikes Fest is all about supporting and building
				community. Our first-ever Denver Bike Fest on April 26, 2025 at City
				Park Pavilion was a huge success — over 2,000 people came out to
				connect, learn, and party!
			</Text>

			<Flex direction="row" style={{ marginTop: "32px", gap: "32px" }}>
				<Image
					src="/bicycle.png"
					alt="Bike This City"
					width={300}
					height={100}
				/>
				<Flex direction="column" gap="8px">
					<Text size="8">Bike This City</Text>
					<Text style={{ lineHeight: "1.6" }}>
						Bike This City is Emily Kleinfelter, a transportation planner, road
						safety professional, and community organizer who believes bikes can
						transform how we experience our community. She brought the idea for
						Denver Bike Fest to Z Cycle Shop to team up and to bring it to life.
						Through her platform, Emily helps connect people to Denver’s bike
						community, shares real-life examples of how bikes are
						transportation, and why safe streets matter for all of us. Bike This
						City leads the organizing and outreach efforts behind Denver Bike
						Fest.
					</Text>
				</Flex>
			</Flex>
		</Flex>
	</Flex>
);
