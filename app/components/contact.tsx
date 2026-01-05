"use client";

import emailjs from "@emailjs/browser";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { Label, Toast } from "radix-ui";
import { useRef, useState } from "react";

if (
	!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
	!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
) {
	throw new Error("EmailJS environment variables are not set");
}

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

function validForm(form: HTMLFormElement) {
	const name = form.querySelector<HTMLInputElement>("#name")?.value.trim();
	const email = form.querySelector<HTMLInputElement>("#email")?.value.trim();
	const message = form
		.querySelector<HTMLTextAreaElement>("#message")
		?.value.trim();

	return !!name && !!email && !!message;
}

export function ContactUs() {
	const [error, setError] = useState<string | null>(null);
	const [showToast, setShowToast] = useState(false);
	const formRef = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formRef.current) return;
		const form = formRef.current;

		if (!validForm(form)) {
			setError("Please fill out all fields.");
			setShowToast(true);
			return;
		}

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				form,
			)
			.then(() => {
				form.reset();
			})
			.catch(() => {
				setError("Email failed to send.");
			})
			.finally(() => setShowToast(true));
	};

	return (
		<Flex
			p={{ initial: "16px", sm: "24px", md: "32px" }}
			direction="column"
			gap={{ initial: "8px", sm: "16px" }}
			id="contact"
			style={{
				backgroundColor: "var(--lime-3)",
			}}
		>
			<Text
				size={{ initial: "6", sm: "8", md: "9" }}
				style={{
					color: "var(--lime-11)",
				}}
			>
				Contact Us
			</Text>
			<Text
				size={{ initial: "3", sm: "5", md: "6" }}
				style={{ color: "var(--lime-11)" }}
			>
				Have any questions, suggestions, or just want to say hi? We&apos;d love
				to hear from you! Your feedback and involvement help us make the
				festival better each year.
			</Text>

			<form ref={formRef} onSubmit={sendEmail}>
				<Flex gap="8px" direction="column" maxWidth={"400px"} m="auto">
					<Box>
						<Label.Root htmlFor="name">
							<Text
								size={{ initial: "3", sm: "5", md: "6" }}
								style={{ color: "var(--lime-11)" }}
							>
								Name:
							</Text>
						</Label.Root>
						<TextField.Root
							id="name"
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
			</form>
			<ResponseToast open={showToast} setOpen={setShowToast} error={error} />
		</Flex>
	);
}

const ResponseToast = ({
	open,
	setOpen,
	error,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	error: string | null;
}) => {
	return (
		<Toast.Provider swipeDirection="down">
			<Toast.Root
				open={open}
				onOpenChange={setOpen}
				style={{
					backgroundColor: error ? "var(--red-2)" : "var(--lime-2)",
					borderColor: error ? "var(--red-7)" : "var(--lime-7)",
					borderWidth: "2px",
					borderStyle: "solid",
					padding: "8px",
					paddingRight: "16px",
					borderRadius: "8px",
					width: "fit-content",
				}}
			>
				<Flex direction="row" gap="12px" align="center">
					{error ? (
						<CrossCircledIcon color="var(--red-9)" />
					) : (
						<CheckCircledIcon color="var(--lime-9)" />
					)}
					<Box>
						<Toast.Title
							style={{
								textWrap: "nowrap",
							}}
						>
							{error ? "Error sending message" : "Message sent"}
						</Toast.Title>
						<Toast.Description style={{ textWrap: "nowrap" }}>
							{error ? error : "Thank you for your feedback!"}
						</Toast.Description>
					</Box>
				</Flex>
			</Toast.Root>
			<Toast.Viewport
				style={{
					position: "fixed",
					bottom: 0,
					left: "50%",
					transform: "translateX(-50%)",
					padding: "12px",
					width: "fit-content",
					zIndex: 1000,
				}}
			/>
		</Toast.Provider>
	);
};
