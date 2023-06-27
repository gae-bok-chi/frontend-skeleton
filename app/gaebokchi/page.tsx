import React from "react";
import styles from "../../styles/gaebokchi/gaebokchi.module.css"
import Calendar from "../../components/calendar/calendar";
import WeekCalendar from "@/components/weekCalendar/weekCalendar";

export default function Main() {

  return (
    <main className={styles["flex-container"]}>
      {/* 미니 캘린더랑 일정 기록 버튼 오늘 할일*/}
      <div className={styles["left-content"]}>
        <button className={styles["add-button"]}>만들기 +</button>
        <Calendar />
      </div>
      <div className={styles["right-content"]}>
        <WeekCalendar />
      </div>
    </main>
  );
}
