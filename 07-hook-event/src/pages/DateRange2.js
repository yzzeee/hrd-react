import React from "react";
import moment from "moment"; // for 날짜 처리

/**
 * useReduce() 기능을 사용하여 상황에 따라 state값을 다르게 설정하는 함수
 * @param {object} state - 현재 화면에 표시되고 있는 상태값
 * @param {string} action - 날짜 간격을 의미하는 문자열
 * @returns 화면을 갱신할 상태값을 담고 있는 json 객체
 */
const setDateValue = (state, action) => {
  let sdate = null;
  switch (action) {
    case "DAY7":
      sdate = moment().add(-7, "d").format("YYYY-MM-DD");
      break;
    case "DAY15":
      sdate = moment().add(-15, "d").format("YYYY-MM-DD");
      break;
    case "MONTH1":
      sdate = moment().add(-1, "M").format("YYYY-MM-DD");
      break;
    case "MONTH3":
      sdate = moment().add(-3, "M").format("YYYY-MM-DD");
      break;
    case "MONTH6":
      sdate = moment().add(-6, "M").format("YYYY-MM-DD");
      break;
    default:
      sdate = moment().format("YYYY-MM-DD");
      break;
  }
  return { ...state, startDate: sdate };
};

const DateRange2 = () => {
  const [myDate, setMyDate] = React.useReducer(setDateValue, {
    // 날짜 형식 참고: https://momentjs.com/docs/#/displaying/
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD"),
  });

  return (
    <div>
      <h2>DateRange2</h2>
      <p>
        {myDate.startDate} ~ {myDate.endDate}
      </p>
      <button type="button" onClick={(e) => setMyDate("DAY7")}>
        7일
      </button>
      <button type="button" onClick={(e) => setMyDate("DAY15")}>
        15일
      </button>
      <button type="button" onClick={(e) => setMyDate("MONTH1")}>
        1개월
      </button>
      <button type="button" onClick={(e) => setMyDate("MONTH2")}>
        3개월
      </button>
      <button type="button" onClick={(e) => setMyDate("MONTH3")}>
        6개월
      </button>
    </div>
  );
};

export default DateRange2;
