import styles from '../../styles/gaebokchi/WeekCal.module.css'

export default function WeekCalendar() {

  const week = ['월', '화', '수', '목', '금', '토', '일']
  const hour = Array.from({ length: 11 }, (_, index) => index + 1);
  return (
    <div className={styles.container}>
      {/* 날짜 */}
      <div className={styles.week}>
        <div>
        </div>
        <div>
          <h1>{14}</h1>
          <h3>월</h3>
        </div>
        <div>
          <h1>{14}</h1>
          <h3>화</h3>
        </div>
        <div>
          <h1>{14}</h1>
          <h3>수</h3>
        </div>
        <div>
          <h1>{14}</h1>
          <h3>목</h3>
        </div>
        <div>
          <h1>{14}</h1>
          <h3>금</h3>
        </div>
        <div>
          <h1>{14}</h1>
          <h3>토</h3>
        </div>
        <div>
          <h1>{14}</h1>
          <h3>일</h3>
        </div>
        <div></div>
      </div>
      {/* 시간 */}
      <div className={styles.schedule_container}>
        <div className={styles.schedule_item}>
          <div className={styles.time}>
            <div>{"날씨"}</div>
            <div className={styles.hour}>{"12시"}</div>
            {hour.map((h, index) => (
              <div className={styles.hour} key={index} id={`오전${h}`}>{`오전${h}시`}</div>
            )
            )}
            {hour.map((h, index) => (
              <div className={styles.hour} key={index} id={`오후${h}`}>{`오후${h}시`}</div>
            )
            )}

          </div>
          <div className={styles.daily}>
            {week.map((day, idx) => (

              <div className={styles.daily_item} key={idx} id={day}>
                {hour.map((h, index) => (
                  <div key={index} id={`오전${h}`}></div>
                )
                )}
                {hour.map((h, index) => (
                  <div key={index} id={`오후${h}`}></div>
                )
                )}
              </div>
            ))}

          </div>
          <div>
          </div>
        </div>

      </div>
    </div>
  );
};

