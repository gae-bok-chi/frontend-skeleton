import styles from '../../styles/history/history.module.css'
import HistoryYear from '@/components/history/historyYear'
import HistoryList from '@/components/history/historyList'
export default function History() {

  return (
    <div className={styles.container}>
      <HistoryYear />
      <h1>History</h1>
      <HistoryList />
    </div>
  )
}

