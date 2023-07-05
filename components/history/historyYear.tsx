'use client'
import { useState } from 'react';
import styles from '../../styles/history/historyYear.module.css'

export default function HistoryYear() {

  const [year, setYear] = useState(2023);

  return (
    <div className={styles.container}>
      <button onClick={() => { setYear(year - 1) }}>-</button>
      <span>{year}</span>
      <button onClick={() => { setYear(year + 1) }}>+</button>
    </div>
  )
}