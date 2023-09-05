import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { MypetfullCalendar, Mypetrecordbox } from './mypet.style';

interface CalendarProps {
	onDateClick: (date: Date, id: number) => void;
}

function MyPetCalendar({ onDateClick }: CalendarProps) {
	const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 선택된 날짜 상태 추가

	const generateDateId = (date: Date): number => {
		return date.getTime();
	};

	const handleDateClick = (arg: any) => {
		const dateId = generateDateId(arg.date); // 날짜에 대한 ID 생성
		onDateClick(arg.date, dateId); // 새로운 시그니처에 날짜와 ID 전달
		setSelectedDate(arg.date); // 클릭한 날짜를 선택된 날짜 상태에 저장
	};

	const dateCellClassNames = (arg: any) => {
		if (selectedDate && arg.date.getTime() === selectedDate.getTime()) {
			return 'selected-date';
		}
		return '';
	};

	return (
		<Mypetrecordbox>
			<MypetfullCalendar>
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView="dayGridMonth"
					dayMaxEvents={true}
					editable={true}
					expandRows={true}
					locale="ko"
					height={550}
					weekends={true}
					dateClick={handleDateClick} // 업데이트된 핸들러 사용
					dayCellClassNames={dateCellClassNames} // 선택된 날짜의 클래스 적용
					headerToolbar={{
						left: 'prev',
						center: 'title',
						right: 'next',
					}}
				/>
			</MypetfullCalendar>
		</Mypetrecordbox>
	);
}

export default MyPetCalendar;
