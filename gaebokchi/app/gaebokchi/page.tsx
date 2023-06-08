import React from "react";
import styles from "./page.module.css";
import Calendar from "../../components/calendar";

export default function Main() {
  return (
    <main className={styles["flex-container"]}>
      {/* 미니 캘린더랑 일정 기록 버튼 오늘 할일*/}
      <div className={styles["left-content"]}>
        <button className={styles["add-button"]}>만들기 +</button>
        <Calendar />
      </div>
      <div className={styles["right-content"]}>
        {/* 주간 달력 나오는 부분 */}
        주간 달력
      </div>
    </main>
  );
}
