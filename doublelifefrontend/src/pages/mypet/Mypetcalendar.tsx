import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction"
import Mypetlist from './Mypetlist'
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
  title: string;
}

function Mypetcalendar() {
	const [events, setEvents] = useState<Event[]>([]);
	const [inputValueArray, setInputValue] = useState('');
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);

	const handlerDateClick = (arg: any) => {
		setSelectedDate(arg.date);
	};

	const handleAddEvent = (event: Event) => {
		setEvents([...events, event]);
	};

	const eventArray = events.map((event) => ({
		title: event.title,
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
					<Mypetlistcreate onAddEvent={handlerAddEvent} setInputValue={setInputValue} />
					{selectedDate && (<Mypetlist selectedDate={selectedDate} />)}
				</Mypetrecordmemo1>

				<Mypetrecordmemo2>

				</Mypetrecordmemo2>
			</Mypetrecordmemo>
		</Mypetrecordbox>
	);
}

export default Mypetcalendar