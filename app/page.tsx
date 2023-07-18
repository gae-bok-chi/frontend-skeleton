import styles from "./page.module.css";
import Image from 'next/image';
import Link from "next/link";
import { useEffect } from "react";
import fav_fish from "../public/fav_fish.png";

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
      <Image width="96" height="96" src={fav_fish} alt="fish"/>
        <div>DayFish</div>
        <br></br>
        <div>나만의 <span style={{color: '#3290FF'}}>물고기</span>와 함께 성장하는 일정 관리 프로젝트!
        </div>
      </div>
      <div className={styles.container2}>
        {/* <p>심심한 일정관리 말고</p>
        <p>재미있는 일정관리 어떠세요?</p>
        <p>체계적이고 경쾌한 일정관리</p>
        <p>나만의 개복치를 키우며 일정관리!</p> */}
        {/* <p>저랑 같이 물고기 키워 보실래요?</p> */}
        <p>🐟&nbsp;&nbsp;나만의 <span style={{color: '#3290FF'}}>물고기</span>를 키워보세요&nbsp;&nbsp;🐟</p>
        <p>할 일을 끝내면 나오는 먹이로 물고기 키우기!</p>
        <p>일정관리도 하고 나만의 물고기를 키워봐요</p>
        <div></div>
        <p>지금도 물고기는 당신을 기다려요&nbsp;🐟</p>

        <button className={styles.loginBtn}>
          LOGIN / JOIN US
        </button>
      </div>
        
      <div className={styles.container4}>
        <Link href="/gaebokchi">gaebokchi</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/history">history</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/todolist">todolist</Link>
      </div>
    </main>
  );

}

export default Home;