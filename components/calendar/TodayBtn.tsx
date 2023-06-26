import { todayDateState } from "@/atoms/gaebokchi";
import { useRecoilState } from "recoil";

export interface TodayBtnProps {
  setCurrentDate: React.Dispatch<React.SetStateAction<string>>;
}

const TodayBtn = ({ setCurrentDate }: TodayBtnProps) => {
  //   const [todayDate, setTodayDate] = useRecoilState(todayDateState);

  const handleTodayClick = () => {
    setCurrentDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div
      className="date-button"
      onClick={handleTodayClick}
      style={{
        cursor: "pointer",
      }}
    >
      Today
    </div>
  );
};

export default TodayBtn;
