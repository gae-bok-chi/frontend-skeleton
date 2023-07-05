'use client'
import { useState } from 'react';
import styles from '../../styles/history/HistoryItem.module.css'

export default function HistoryItem(month: any) {
  return (
    <div className={styles.container}>
      <p>{month}</p>
    </div>
  )
}