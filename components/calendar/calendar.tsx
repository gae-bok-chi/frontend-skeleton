"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from "../../styles/gaebokchi/calendar.module.css"
import TodayBtn from "./TodayBtn";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

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
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // const [todayDate, setTodayDate] = useRecoilState(todayDateState);

  // useEffect(() => {
  //   setCurrentDate(todayDate);
  // }, [todayDate]);

  // 이전 달로 이동하는 함수
  const goToPreviousMonth = async () => {
    const year = new Date(currentDate).getFullYear();
    const month = new Date(currentDate).getMonth();
    if ([1, 3, 5, 7, 8, 10].includes(month)) {
      const day = new Date(year, month, -29).toISOString().split("T")[0];
      setCurrentDate(day);
    } else if ([4, 6, 9, 11].includes(month)) {
      const day = new Date(year, month, -28).toISOString().split("T")[0];
      setCurrentDate(day);
    } else {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        const day = new Date(year, month, -27).toISOString().split("T")[0];
        setCurrentDate(day);
      } else {
        if (month == 0) {
          const day = new Date(year, month, -29).toISOString().split("T")[0];
          setCurrentDate(day);
        } else {
          const day = new Date(year, month, -26).toISOString().split("T")[0];
          setCurrentDate(day);
        }
      }
    }
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    const year = new Date(currentDate).getFullYear();
    const month = new Date(currentDate).getMonth() + 2;
    if ([1, 3, 5, 7, 8, 10].includes(month)) {
      const day = new Date(year, month, -29).toISOString().split("T")[0];
      setCurrentDate(day);
    } else if ([4, 6, 9, 11].includes(month)) {
      const day = new Date(year, month, -28).toISOString().split("T")[0];
      setCurrentDate(day);
    } else {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (month == 12 || month == 13) {
          const day = new Date(year, month, -29).toISOString().split("T")[0];
          setCurrentDate(day);
        } else {
          const day = new Date(year, month, -27).toISOString().split("T")[0];
          setCurrentDate(day);
        }
      } else {
        if (month == 12 || month == 13) {
          const day = new Date(year, month, -29).toISOString().split("T")[0];
          setCurrentDate(day);
        } else {
          const day = new Date(year, month, -26).toISOString().split("T")[0];
          setCurrentDate(day);
        }
      }
    }
  };

  const goToPreviousYear = () => {
    const year = new Date(currentDate).getFullYear() - 1;
    const month = new Date(currentDate).getMonth() + 1;
    if ([1, 3, 5, 7, 8, 10].includes(month)) {
      const day = new Date(year, month, -29).toISOString().split("T")[0];
      setCurrentDate(day);
    } else if ([4, 6, 9, 11].includes(month)) {
      const day = new Date(year, month, -28).toISOString().split("T")[0];
      setCurrentDate(day);
    } else {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (month == 12 || month == 13) {
          const day = new Date(year, month, -29).toISOString().split("T")[0];
          setCurrentDate(day);
        } else {
          const day = new Date(year, month, -27).toISOString().split("T")[0];
          setCurrentDate(day);
        }
      } else {
        if (month == 12 || month == 13) {
          const day = new Date(year, month, -29).toISOString().split("T")[0];
          setCurrentDate(day);
        } else {
          const day = new Date(year, month, -26).toISOString().split("T")[0];
          setCurrentDate(day);
        }
      }
    }
  };

  const goToNextYear = () => {
    const year = new Date(currentDate).getFullYear() + 1;
    const month = new Date(currentDate).getMonth() + 1;
    if ([1, 3, 5, 7, 8, 10].includes(month)) {
      const day = new Date(year, month, -29).toISOString().split("T")[0];
      setCurrentDate(day);
    } else if ([4, 6, 9, 11].includes(month)) {
      const day = new Date(year, month, -28).toISOString().split("T")[0];
      setCurrentDate(day);
    } else {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        if (month == 12 || month == 13) {
          const day = new Date(year, month, -29).toISOString().split("T")[0];
          setCurrentDate(day);
        } else {
          const day = new Date(year, month, -27).toISOString().split("T")[0];
          setCurrentDate(day);
        }
      } else {
        if (month == 12 || month == 13) {
          const day = new Date(year, month, -29).toISOString().split("T")[0];
          setCurrentDate(day);
        } else {
          const day = new Date(year, month, -26).toISOString().split("T")[0];
          setCurrentDate(day);
        }
      }
    }
  };

  const getDaysInMonth = (year: number, month: number) => {
    // 해당 달의 마지막 날짜를 구하는 함수
    return new Date(year, month + 1, 0).getDate();
  };

  const createCalendar = (currentDate: any, year: number, month: number) => {
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
            <td key={`empty-${day}-${i}`} className="px-4 py-4">
              <div className="w-full" />
            </td>
          );
        } else {
          const clickedDay = day + 1; // 클릭한 날짜를 임시 변수에 저장
          // 유효한 날짜인 경우 날짜 칸 생성
          week.push(
            <td key={day} style={{ padding: "0px" }}>
              <div
                style={{
                  // margin: "8px",
                  textAlign: "center",
                  lineHeight: "37px",
                  fontSize:
                    day === new Date(currentDate).getDate() ? "15px" : "15px",
                  width:
                    day === new Date(currentDate).getDate() ? "37px" : "37px",
                  height:
                    day === new Date(currentDate).getDate() ? "37px" : "37px",
                  backgroundColor:
                    day === new Date(currentDate).getDate() ? "#88C5FA" : "",
                  color:
                    day === new Date(currentDate).getDate()
                      ? "#ffffff"
                      : "#000000",
                  borderRadius:
                    day === new Date(currentDate).getDate() ? "50%" : "",
                }}
                className="cursor-pointer flex w-full justify-center"
                onClick={() => {
                  setCurrentDate(
                    new Date(year, month, clickedDay)
                      .toISOString()
                      .split("T")[0]
                  );
                }}
              >
                <p
                  className={`day-text ${day === new Date(currentDate).getDate() ? "font-bold" : ""
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
      calendar.push(<tr key={`week-${calendar.length}`}>{week}</tr>);
    }

    return calendar;
  };

  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);

  return (
    <div className={styles["calendar-container"]}>
      <div className={styles["calendar-content"]}>
        <div className={styles["header"]}>
          <h1
            className={`text-2xl font-bold ${styles["month-label"]}`}
            style={{ cursor: "pointer" }}
          >
            {new Date(currentDate).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h1>
          <div className={styles["navigation-buttons"]}>
            <div
              style={{
                marginRight: "35px",
                cursor: "pointer",
              }}
            >
              <FaAngleUp
                className={styles["FaAngleUp"]}
                onClick={() => {
                  goToPreviousYear();
                }}
              />
              <FaAngleDown
                className={styles["FaAngleDown"]}
                onClick={() => {
                  goToNextYear();
                }}
              />
            </div>
            <div className={styles["todayBtn"]}>
              <TodayBtn setCurrentDate={setCurrentDate} />
            </div>
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
                new Date(currentDate),
                new Date(currentDate).getFullYear(),
                new Date(currentDate).getMonth()
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
