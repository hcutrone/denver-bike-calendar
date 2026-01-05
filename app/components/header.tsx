"use client";

import { Button, type ButtonProps, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

export function Header() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<Flex
			width="100%"
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
			<Flex width="100%" maxWidth="1280px" justify="between" align="center">
				<Image src="/bikefest.png" alt="Logo" width={75} height={75} />
				{HeaderButtons.map(({ label, id }) => (
					<HeaderButton key={id} onClick={() => scrollToSection(id)}>
						<Text size="6">{label}</Text>
					</HeaderButton>
				))}
				<Button
					color="lime"
					variant="surface"
					radius="full"
					style={{
						padding: "20px",
						cursor: "pointer",
						fontFamily: "var(--font-coming-soon)",
					}}
				>
					<Text size="6" style={{ color: "var(--lime-12)" }}>
						Donate
					</Text>
				</Button>
			</Flex>
		</Flex>
	);
}

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

const HeaderButtons = [
	{ label: "About", id: "about" },
	{ label: "General Info", id: "general" },
	{ label: "Partners", id: "partners" },
	{ label: "Contact Us", id: "contact" },
];
