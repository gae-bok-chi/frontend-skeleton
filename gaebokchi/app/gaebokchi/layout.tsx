'use client'
// import { useRouter } from 'next/navigation'
// import styles from '../../assets/css/TheHeader.module.css'
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {/* <header className={styles.header}></header> */}
      {children}
    </div>
  )
}