"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
	Button,
	type ButtonProps,
	Container,
	DropdownMenu,
	Flex,
	IconButton,
	Link,
	Text,
} from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export function Header() {
	return (
		<Flex
			width="100vw"
			height="64px"
			justify="center"
			style={{
				backgroundColor: "var(--lime-9)",
				position: "fixed",
				top: 0,
				zIndex: 1000,
				paddingInline: "16px",
				borderBottom: "3px solid var(--lime-6)",
			}}
		>
			<Container height="100%" display={{ initial: "none", sm: "initial" }}>
				<DesktopHeader />
			</Container>

			<Container display={{ initial: "initial", sm: "none" }} height="100%">
				<MobileHeader />
			</Container>
		</Flex>
	);
}

const DesktopHeader = () => (
	<Flex
		width="100%"
		height="100%"
		maxWidth="1280px"
		justify="between"
		align="center"
	>
		<Button
			onClick={() => scrollToSection("")}
			style={{ cursor: "pointer", background: "transparent" }}
		>
			<Image src="/bikefest.png" alt="Logo" width={75} height={75} />
		</Button>
		{HeaderButtons.map(({ label, id }) => (
			<HeaderButton key={id} onClick={() => scrollToSection(id)}>
				<Text size={{ initial: "3", sm: "6" }}>{label}</Text>
			</HeaderButton>
		))}
		<Button
			asChild
			color="lime"
			variant="surface"
			radius="full"
			style={{
				padding: "18px",
				cursor: "pointer",
				fontFamily: "var(--font-coming-soon)",
			}}
		>
			<Link
				href="https://gofund.me/026af392f"
				target="_blank"
				rel="noopener noreferrer"
				underline="none"
			>
				<Text
					size={{ initial: "3", sm: "6" }}
					style={{ color: "var(--lime-12)" }}
				>
					Donate
				</Text>
			</Link>
		</Button>
	</Flex>
);

const MobileHeader = () => (
	<Flex width="100%" height="100%" justify="between" align="center">
		<Button
			onClick={() => scrollToSection("")}
			style={{ cursor: "pointer", background: "transparent" }}
		>
			<Image src="/bikefest.png" alt="Logo" width={75} height={75} />
		</Button>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<IconButton
					radius="full"
					style={{
						cursor: "pointer",
						backgroundColor: "var(--lime-6)",
					}}
				>
					<HamburgerMenuIcon color="var(--lime-12)" height={16} width={16} />
				</IconButton>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				{HeaderButtons.map(({ label, id }) => (
					<DropdownMenu.Item key={id} onSelect={() => scrollToSection(id)}>
						<Text
							size={{ initial: "3", sm: "5", md: "6" }}
							style={{ color: "var(--lime-10)" }}
						>
							{label}
						</Text>
					</DropdownMenu.Item>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Flex>
);

const HeaderButton = ({
	children,
	...props
}: { children: React.ReactNode } & ButtonProps) => {
	const [hover, setHover] = useState(false);
	return (
		<Button
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			radius="full"
			style={{
				padding: "12px",
				color: hover ? "var(--lime-12)" : "var(--lime-3)",
				background: hover ? "var(--lime-8)" : "transparent",
				cursor: "pointer",
				fontFamily: "var(--font-coming-soon)",
			}}
			{...props}
		>
			{children}
		</Button>
	);
};

const scrollToSection = (id: string) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	} else {
		window.location.href = `/#${id}`;
	}
};

const HeaderButtons = [
	{ label: "About", id: "about" },
	{ label: "General Info", id: "general" },
	{ label: "Partners", id: "partners" },
	{ label: "Contact Us", id: "contact" },
];
