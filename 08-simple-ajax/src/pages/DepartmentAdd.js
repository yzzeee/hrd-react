import React from "react";
import axios from "axios";

const DepartmentAdd = ({ history }) => {
  const onDepartmentSave = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;
    console.log("dname: %s, loc: %s", dname, loc);

    (async function () {
      try {
        const form = new FormData();
        form.append("dname", dname);
        form.append("loc", loc);
        // Ajax를 구현할 부분
        const response = await axios.post(
          "http://itpaper.co.kr/demo/react/api/dept_write.php",
          form
        );
        console.log("Ajax 연동 성공");
        console.log(response.data);
        console.groupEnd();

        // 목록 페이지로 이동
        history.push("/department_list");
      } catch (e) {
        // try 블록을 수행하는 도중 에러가 발생하면 try의 수행을 중단하고
        // 이곳으로 프로그램 제어가 이동한다.
        console.error("Ajax 연동 실패");
        console.error(e);
        // console.error(e.response.status + "'n" + e.response.data);
      }
    })();
  };
  return (
    <div>
      <h2>학과 추가</h2>
      <form onSubmit={onDepartmentSave}>
        <div>
          <label htmlFor="dname">학과명</label>
          <input type="text" name="dname" id="dname"></input>
        </div>

        <div>
          <label htmlFor="loc">학과위치</label>
          <input type="text" name="loc" id="loc"></input>
        </div>
        <button>저장하기</button>
      </form>
    </div>
  );
};

export default DepartmentAdd;
