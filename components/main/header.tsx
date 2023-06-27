"use client";
import styles from "../../styles/gaebokchi/header.module.css";
import TodayBtn from "../calendar/TodayBtn";
import { useRecoilState } from "recoil";
import { currentDateState } from "../../atoms/gaebokchi";
import { ChevronLeft, ChevronRight, Link } from "react-feather";

export default function Header() {
  // 현재 표시되는 날짜를 상태로 관리합니다.
  const [currentDate, setCurrentDate] = useRecoilState(currentDateState);

  // 현재 날짜에서 일주일 이전 날짜로 바뀌게 하는 것
  const goToPreviousWeeks = () => {
    const prevWeekDate = new Date(currentDate);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    setCurrentDate(prevWeekDate.toISOString().split("T")[0]);
  };

  // 현재 날짜에서 일주일 지난 날짜로 바뀌게 하는 것
  const goToNextWeeks = () => {
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    setCurrentDate(nextWeekDate.toISOString().split("T")[0]);
  };

  return (
    <header
      className="flex items-center justify-between px-4 py-2"
      style={{ height: "80px", borderBottom: "3px solid black" }}
    >
      <div className="flex items-center">
        <div className="logo">Logo</div>
      </div>
      <div>
        {new Date(currentDate).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </div>
      <ChevronLeft
        className={`icon icon-tabler mr-3 ${styles["navigation-icon"]}`}
        onClick={goToPreviousWeeks}
      />
      <ChevronRight
        className={`icon icon-tabler ${styles["navigation-icon"]}`}
        onClick={goToNextWeeks}
      />
      <div className={styles["todayBtn"]}>
        <TodayBtn />
      </div>
      <div className="flex items-center">{/* 이미지 넣어야함 */}</div>
    </header>
  );
}
