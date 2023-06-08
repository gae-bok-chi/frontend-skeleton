"use client";
// import { useRouter } from 'next/navigation'
// import styles from '../../assets/css/TheHeader.module.css'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header
        className="flex items-center justify-between px-4 py-2"
        style={{ height: "80px", borderBottom: "3px solid black" }}
      >
        <div className="flex items-center">
          <div className="logo">Logo</div>
          <button className="date-button">Today</button>
        </div>
        <div className="flex items-center">
          <button className="other-button">Button 1</button>
          <button className="other-button">Button 2</button>
          <button className="other-button">Button 3</button>
          <button className="other-button">Button 4</button>
        </div>
      </header>
      {children}
    </div>
  );
}
