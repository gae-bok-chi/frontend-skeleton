import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>개복치를 소개하는 랜딩페이지</h1>
      <Link href="/gaebokchi">gaebokchi</Link>
      <Link href="/gaebokchi/history">history</Link>
      <Link href="/gaebokchi/todolist">todolist</Link>
    </main>
  )
}