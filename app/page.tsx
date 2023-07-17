import styles from "./page.module.css";
import Link from "next/link";
import { useEffect } from "react";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1>개복치를 소개하는 랜딩페이지</h1>
//       <Link href="/gaebokchi">gaebokchi</Link>
//       <Link href="/history">history</Link>
//       <Link href="/todolist">todolist</Link>
//     </main>
//   );
// }

const Home = () => {
  // useEffect(()=> {
  //   // 스크롤 이벤트 처리
  //   const handleScroll = (e:any) => {
  //     e.preventDefault();
  //   };
  // })

  return(
    <main className={styles.main}>
      <div className={styles.container1}>
        <p>심심한 일정관리 말고</p>
        <p>재미있는 일정관리 어떠세요?</p>
        <p>체계적이고 경쾌한 일정관리</p>
        <p>나만의 개복치를 키우며 일정관리!</p>
      </div>
    </main>
  );

}

export default Home;