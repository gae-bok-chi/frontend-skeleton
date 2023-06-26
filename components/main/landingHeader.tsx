import Link from "next/link";

export default function LandingHeader() {
  return (
    <header>
      <span>랜딩페이지에 들어가는 헤더 | </span>
      <Link href="/gaebokchi">로그인</Link>
    </header>
  );
}
