import {
	AlertDialog,
	Button,
	Flex,
	IconButton,
	Link,
	Popover,
	Text,
} from "@radix-ui/themes";
import { useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import type { CalendarEvent, EventData } from "../types";
import { useCalendarContext } from "./calendar-context";

const DAY_IN_MILLISECONDS = 86400000;

export function createCalendarEvent(newEvent: EventData): CalendarEvent {
	return {
		id: newEvent.id,
		event: {
			title: <EventComponent {...newEvent} />,
			start: newEvent.start,
			end: newEvent.end,
		},
	};
}

const EventComponent = (event: EventData) => {
	const { openEventDialog, deleteEvent } = useCalendarContext();
	const [isDeleting, setIsDeleting] = useState(false);
	const [deletionFailed, setDeletionFailed] = useState(false);
	const dateOrTimeRange = getEventRangeString(event.start, event.end);
	const footerLinks = event.links?.map((link, idx) => (
		<Link key={idx} href={link.url.toString()}>
			{link.text}
		</Link>
	));

	return (
		<Popover.Root>
			<Popover.Trigger>
				<Flex>
					<Text>{event.title}</Text>
				</Flex>
			</Popover.Trigger>
			<Popover.Content
				className="eventPopoverContent"
				maxWidth={"min(480px, 95vw)"}
			>
				<Flex direction="column" gap="2">
					<Flex justify="between" align="center" gap="2">
						<Text>{dateOrTimeRange}</Text>
						<Flex gap="2">
							<IconButton onClick={() => openEventDialog(event)}>
								<FaPencilAlt />
							</IconButton>
							<IconButton
								loading={isDeleting}
								onClick={async () => {
									setIsDeleting(true);
									const eventID = await deleteEvent(event);
									if (!eventID) {
										setDeletionFailed(true);
									}
									setIsDeleting(false);
								}}
							>
								<FaTrashAlt />
							</IconButton>
						</Flex>
					</Flex>
					<Text>{event.body}</Text>
					{footerLinks && (
						<Flex gap="4" justify="end">
							{footerLinks}
						</Flex>
					)}
				</Flex>
				<DeleteFailedAlert show={deletionFailed} setShow={setDeletionFailed} />
			</Popover.Content>
		</Popover.Root>
	);
};

const DeleteFailedAlert = ({
	show,
	setShow,
}: {
	show: boolean;
	setShow: (val: boolean) => void;
}) => (
	<AlertDialog.Root open={show}>
		<AlertDialog.Content maxWidth="450px">
			<AlertDialog.Title>Deletion Failed</AlertDialog.Title>
			<AlertDialog.Description size="2">
				Please try again
			</AlertDialog.Description>

			<Flex gap="3" mt="4" justify="end">
				<AlertDialog.Action>
					<Button variant="solid" onClick={() => setShow(false)}>
						Okay
					</Button>
				</AlertDialog.Action>
			</Flex>
		</AlertDialog.Content>
	</AlertDialog.Root>
);

function getEventRangeString(start: Date, end: Date): string {
	const eventTimeInMs = end.getTime() - start.getTime();
	if (eventTimeInMs === DAY_IN_MILLISECONDS) {
		return start.toDateString();
	}
	const isAllDay = eventTimeInMs % DAY_IN_MILLISECONDS === 0;
	return isAllDay
		? `${start.toDateString()} - ${end.toDateString()}`
		: `${start.toLocaleTimeString()} - ${end.toLocaleTimeString()}`;
}
