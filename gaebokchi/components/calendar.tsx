"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "../styles/calendar.module.css";

export default function Calendar() {
  const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const renderWeekDays = () => {
    return weekDays.map((day) => (
      <th key={day}>
        <div className="w-full flex justify-center">
          <p className="day-text">{day}</p>
        </div>
      </th>
    ));
  };

  // 현재 표시되는 날짜를 상태로 관리합니다.
  const [currentDate, setCurrentDate] = useState(new Date());

  // 이전 달로 이동하는 함수
  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(previousMonth);
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    const nextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(nextMonth);
  };

  const getDaysInMonth = (year: number, month: number) => {
    // 해당 달의 마지막 날짜를 구하는 함수
    return new Date(year, month + 1, 0).getDate();
  };

  const createCalendar = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay(); // 해당 달의 첫 번째 날짜의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
    const calendar = [];
    let day = 1;

    // 주 단위로 행을 생성
    while (day <= daysInMonth) {
      const week = [];

      // 한 주(7일) 동안의 날짜를 생성
      for (let i = 0; i < 7; i++) {
        if ((day === 1 && i < firstDay) || day > daysInMonth) {
          // 날짜가 해당 달 범위를 벗어나는 경우 빈 칸 생성
          week.push(
            <td key={`empty-${i}`} className="px-4 py-4">
              <div className="w-full" />
            </td>
          );
        } else {
          // 유효한 날짜인 경우 날짜 칸 생성
          week.push(
            <td key={day}>
              <div className="cursor-pointer flex w-full justify-center">
                <p
                  className={`day-text ${
                    day === currentDate.getDate()
                      ? "text-sky-500 font-bold text-lg"
                      : ""
                  }`}
                >
                  {day}
                </p>
              </div>
            </td>
          );
          day++;
        }
      }

      // 한 주(7일)를 행으로 추가
      calendar.push(<tr key={`week-${day}`}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div className={styles["calendar-container"]}>
      <div className={styles["calendar-content"]}>
        <div className={styles["header"]}>
          <h1
            className={`text-2xl font-bold ${styles["month-label"]}`}
            style={{ cursor: "pointer" }}
          >
            {currentDate.toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h1>
          <div className={styles["navigation-buttons"]}>
            <ChevronLeft
              className={`icon icon-tabler mr-3 ${styles["navigation-icon"]}`}
              onClick={goToPreviousMonth}
            />
            <ChevronRight
              className={`icon icon-tabler ${styles["navigation-icon"]}`}
              onClick={goToNextMonth}
            />
          </div>
        </div>
        <div className={styles["table-wrapper"]}>
          <table className={styles["calendar-table"]}>
            <thead>
              <tr>{renderWeekDays()}</tr>
            </thead>
            <tbody>
              {createCalendar(
                currentDate.getFullYear(),
                currentDate.getMonth()
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
