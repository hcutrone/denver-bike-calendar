"use client";

import {
	Box,
	Button,
	Card,
	Flex,
	Heading,
	Inset,
	Text,
	TextArea,
	TextField,
} from "@radix-ui/themes";
import Image from "next/image";
import { Label } from "radix-ui";
import { CollapsiblePartnerGrid } from "../components/client/partners-grid";
import { EmailForm } from "../components/email-form";
import { partners } from "../partner-data";

export default function PartnersPage() {
	return (
		<Flex
			maxWidth="1280px"
			m="auto"
			width="100%"
			minHeight="100vh"
			p="32px"
			mt="64px"
			direction="column"
			gap={{ initial: "16px", sm: "32px" }}
		>
			<Heading
				as="h1"
				trim="end"
				size={{ initial: "6", sm: "8", md: "9" }}
				style={{ color: "var(--lime-10)" }}
			>
				Bike Fest Partners
			</Heading>
			<Text
				style={{ color: "var(--lime-10)" }}
				size={{ initial: "3", sm: "5", md: "6" }}
			>
				{
					"Denver Bike Fest is proud to partner with so many amazing local groups, organizations, and businesses."
				}
			</Text>
			{partners.map((partner) => (
				<CollapsiblePartnerGrid key={partner.header} partner={partner} />
			))}

			<Flex
				id="contact-form"
				direction={{ initial: "column", sm: "row" }}
				width="100%"
				gap="16px"
			>
				<Flex align="center" direction="column" gap="32px" p="12px">
					<Text
						style={{ color: "var(--lime-10)" }}
						size={{ initial: "3", sm: "5", md: "6" }}
					>
						{
							"Interested in partnering with Denver Bike Fest next year? Fill out this form and we'll get in touch!"
						}
					</Text>
					<Box
						style={{
							borderRadius: "12px",
							border: "2px solid var(--lime-8)",
							overflow: "hidden",
						}}
					>
						<Image
							src="/bike-n-brew-table.jpeg"
							alt="Partner Image"
							width={300}
							height={300}
						/>
					</Box>
				</Flex>
				<EmailForm
					template={process.env.NEXT_PUBLIC_PARTNER_EMAILJS_TEMPLATE_ID!}
					validate={() => true}
				>
					<Flex gap="8px" direction="column" maxWidth={"400px"} mx="auto">
						<Box>
							<Label.Root htmlFor="repName">
								<Text
									size={{ initial: "3", sm: "5", md: "6" }}
									style={{ color: "var(--lime-11)" }}
								>
									Representative Name:
								</Text>
							</Label.Root>
							<TextField.Root
								id="repName"
								style={{ fontFamily: "var(--font-coming-soon)" }}
							/>
						</Box>
						<Box>
							<Label.Root htmlFor="groupName">
								<Text
									size={{ initial: "3", sm: "5", md: "6" }}
									style={{ color: "var(--lime-11)" }}
								>
									Group Name:
								</Text>
							</Label.Root>
							<TextField.Root
								id="groupName"
								style={{ fontFamily: "var(--font-coming-soon)" }}
							/>
						</Box>
						<Box>
							<Label.Root htmlFor="link">
								<Text
									size={{ initial: "3", sm: "5", md: "6" }}
									style={{ color: "var(--lime-11)" }}
								>
									Website/Social Link:
								</Text>
							</Label.Root>
							<TextField.Root
								id="link"
								style={{ fontFamily: "var(--font-coming-soon)" }}
							/>
						</Box>
						<Box>
							<Label.Root htmlFor="email">
								<Text
									size={{ initial: "3", sm: "5", md: "6" }}
									style={{ color: "var(--lime-11)" }}
								>
									Email:
								</Text>
							</Label.Root>
							<TextField.Root
								id="email"
								style={{ fontFamily: "var(--font-coming-soon)" }}
								type="email"
							/>
						</Box>
						<Box>
							<Label.Root htmlFor="message">
								<Text
									size={{ initial: "3", sm: "5", md: "6" }}
									style={{ color: "var(--lime-11)" }}
								>
									Message:
								</Text>
							</Label.Root>
							<TextArea
								id="message"
								size="3"
								resize={"vertical"}
								style={{ fontFamily: "var(--font-coming-soon)" }}
							/>
						</Box>
						<Button
							type="submit"
							radius="full"
							style={{
								width: "fit-content",
								padding: "18px",
								margin: "auto",
								marginTop: "8px",
								fontFamily: "var(--font-coming-soon)",
								backgroundColor: "#d8af53",
								cursor: "pointer",
							}}
						>
							<Text
								size={{ initial: "3", sm: "5", md: "6" }}
								style={{ color: "white" }}
							>
								Submit
							</Text>
						</Button>
					</Flex>
				</EmailForm>
			</Flex>
		</Flex>
	);
}

export const PartnerCard = ({
	group,
}: {
	group: { name: string; logo: string };
}) => (
	<Card
		style={{
			minWidth: "150px",
			maxWidth: "150px",
			backgroundColor: "var(--lime-4)",
			textAlign: "center",
			paddingBottom: "4px",
		}}
	>
		<Flex gap="8px" direction="column" align="center" height="100%">
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
				my="auto"
				size="4"
				style={{
					color: "var(--lime-12)",
					fontFamily: "var(--font-coming-soon)",
				}}
			>
				{group.name}
			</Text>
		</Flex>
	</Card>
);
