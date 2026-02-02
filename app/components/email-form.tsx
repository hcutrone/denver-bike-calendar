"use client";

import emailjs from "@emailjs/browser";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import { Toast } from "radix-ui";
import { useRef, useState } from "react";

if (
	!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
	!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
) {
	throw new Error("EmailJS environment variables are not set");
}

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export function EmailForm({
	template,
	validate,
	children,
}: {
	template: string;
	validate: (form: HTMLFormElement) => boolean;
	children: React.ReactNode;
}) {
	const [error, setError] = useState<string | null>(null);
	const [showToast, setShowToast] = useState(false);
	const formRef = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!formRef.current) {
			return;
		}
		const form = formRef.current;

		if (validate(form)) {
			setError("Please fill out all fields.");
			setShowToast(true);
			return;
		}

		emailjs
			.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, template, form)
			.then(() => {
				form.reset();
			})
			.catch(() => {
				setError("Email failed to send.");
			})
			.finally(() => setShowToast(true));
	};

	return (
		<>
			<form ref={formRef} onSubmit={sendEmail} style={{ width: "100%" }}>
				{children}
			</form>
			<ResponseToast open={showToast} setOpen={setShowToast} error={error} />
		</>
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
