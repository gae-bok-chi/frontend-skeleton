'use client'
import { useRecoilValue } from 'recoil';
import styles from '../../styles/gaebokchi/WeekCal.module.css'
import { currentDateState } from '@/atoms/gaebokchi';

export default function WeekCalendar() {
  // 오늘
  const today = new Date().toLocaleDateString()
  // 현재 표시되는 날짜
  const currentDate = useRecoilValue(currentDateState);

  /** 선택한 주의 날짜 구하는 함수 **/
  function getWeekDates(dateString: string) {

    const date = new Date(dateString);

    const firstDayOfWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
    const weekDates = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate() + i);
      const formattedDate = currentDate.toLocaleDateString();
      weekDates.push({ 'formattedDate': formattedDate, 'date': currentDate.getDate() });
    }

    return weekDates;
  }

  const weekDays = ['일', '월', '화', '수', '목', '금', '토']

  const hour = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className={styles.container}>
      <table >
        {/* 요일 표시  */}
        <thead className={styles.week}>
          <tr>
            <th></th>
            {weekDays.map((day) => (
              <th key={day}>
                <h3>{day}</h3>
              </th>))}
          </tr>
        </thead>
        <tbody >
          {/* 날짜 표시 */}
          <tr className={styles.date}>
            <td></td>
            {getWeekDates(currentDate).map((date) => (
              <td key={date.formattedDate}
                className={date.formattedDate && date.formattedDate == today ? styles.today : ''}>
                <h3>{date.date}</h3>
              </td>))}
          </tr>
          {/* 시간 */}
          {hour.map((h, index) => (
            <tr className={styles.hour} key={index} id={`오전${h}`}>
              <td className={styles.time}>
                <span >
                  {`오전${h}시`}
                </span>
              </td>
              {weekDays.map((day, idx) => (
                <td className={styles.daily_item} key={idx} id={day}></td>
              ))}
            </tr>
          )
          )}
          {hour.map((h, index) => (
            <tr className={styles.hour} key={index} id={`오후${h}`}>
              <td className={styles.time}>
                <span>
                  {`오후${h}시`}
                </span>
              </td>
              {weekDays.map((day, idx) => (
                <td className={styles.daily_item} key={idx} id={day}></td>
              ))}
            </tr>
          )
          )}
        </tbody>
      </table>
    </div>
  );
};

