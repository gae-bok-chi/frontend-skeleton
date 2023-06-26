import { useRecoilState } from "recoil";
import { currentDateState } from "../../atoms/gaebokchi";

const TodayBtn = () => {
  const [currentDate, setCurrentDate] = useRecoilState(currentDateState);

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
