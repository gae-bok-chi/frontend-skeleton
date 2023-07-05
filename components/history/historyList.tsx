'use client'
import { useState } from 'react';
import styles from '../../styles/history/historyList.module.css'
import { ChevronLeft, ChevronRight } from "react-feather";

export default function HistoryList() {
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  // 현재 슬라이드 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전버튼
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  // 다음버튼
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // 슬라이드의 끝으로 가면 버튼 숨김
  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex < 2; // 여기서 2는 innerContainer 안에 총 3개의 div 그룹이 있음을 의미합니다.

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        {showPrevButton && (
          <button onClick={handlePrevClick}><ChevronLeft /></button>)}
      </div>
      <div className={styles.subContainer}>
        <div className={styles.innerContainer}
          style={{ transform: `translateX(-${currentIndex * 80}vw)` }}>

          {/* 컴포넌트 분리예정 */}
          {/* {month.map((month, index) => <HistoryItem key={index} month={month} />)} */}
          {month.map((month, index) => {
            return (
              <div className={styles.item} key={index}>
                <p>{month}월</p>
                <div className={styles.month}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )
          })}
          {/* <div className={styles.item}>2</div>
          <div className={styles.item}>3</div>
          <div className={styles.item}>4</div>
          <div className={styles.item}>5</div>
          <div className={styles.item}>6</div>
          <div className={styles.item}>7</div>
          <div className={styles.item}>8</div>
          <div className={styles.item}>9</div>
          <div className={styles.item}>10</div>
          <div className={styles.item}>11</div>
          <div className={styles.item}>12</div> */}
        </div>
      </div>
      <div className={styles.button}>
        {showNextButton && (
          <button onClick={handleNextClick}>
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}