import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
import Mypetlist from './Mypetlist'
import Mypetlistitem from './Mypetlistitem'
import Mypetlistcreate from './Mypetlistcreate'
import { MypetfullCalendar, Mypetrecordbox, Mypetrecordmemo, Mypetrecordmemo1, Mypetrecordmemo2 } from './mypetstyled'
import styled from 'styled-components';

const StyledFullCalendar = styled(FullCalendar)`
  td .selected-cell {
    background-color: rgba(255,220,40,.15);
		::active {
		background-color: rgba(255,220,40,.15);
	}
  }
`;

interface Event {
  text: string;
}

function Mypetcalendar() {
	const [events, setEvents] = useState<Event[]>([]);
	const [inputValueArray, setInputValueArray] = useState('');
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handlerDateClick = (arg: any) => {
		setSelectedDate(arg.date);
	};

	const handleAddEvent = (event: Event) => {
		setEvents([...events, event]);
	};

	const eventArray = events.map((event) => ({
		text: event.text,
	}));

	const handlerAddEvent = (event: Event) => {
		console.log('추가')
	};

	const customDayCellClassNames = (arg: any) => {
		if (selectedDate && arg.date.getDate() === selectedDate.getDate()) {
			return 'selected-cell';
		}
		return '';
	};

	return (
		<Mypetrecordbox>
			<MypetfullCalendar>
				<StyledFullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					dayMaxEvents={true}
					editable={true}
					expandRows={true}
					locale='ko'
					height={550}
					events={eventArray}
					eventClick={handlerDateClick}
					dateClick={handlerDateClick}
					dayCellClassNames={customDayCellClassNames}
					headerToolbar={{
						left: "prev",
						center: "title",
						right: "next"
					}}
				/>
			</MypetfullCalendar>
			<Mypetrecordmemo>

				<Mypetrecordmemo1>
					{selectedDate && (<Mypetlist />)}
				</Mypetrecordmemo1>

				<Mypetrecordmemo2>

				</Mypetrecordmemo2>
			</Mypetrecordmemo>
		</Mypetrecordbox>
	);
}

export default Mypetcalendar