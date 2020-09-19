import React from "react";
import axios from "axios";

const DepartmentList = () => {
  /** 화면에 표시할 상태값 -> 초기값을 빈 배열로 정의 */
  const [department, setDepartment] = React.useState([]);

  /** 검색어 입력 요소에 연결할 참조 변수 */
  const myKeywordInput = React.useRef();

  /** 검색 버튼에 대한 클릭 이벤트 */
  const onButtonClick = (e) => {
    (async function () {
      try {
        // Ajax를 구현할 부분
        const response = await axios.get(
          "http://itpaper.co.kr/demo/react/api/dept_list.php",
          {
            params: {
              keyword: myKeywordInput.current.value,
            },
          }
        );
        console.log("Ajax 연동 성공");
        console.log(response.data);
        console.groupEnd();

        // 상태값에 Ajax 연동 결과 갱신
        setDepartment(response.data.item);
      } catch (e) {
        // try 블록을 수행하는 도중 에러가 발생하면 try의 수행을 중단하고
        // 이곳으로 프로그램 제어가 이동한다.
        console.error("Ajax 연동 실패");
        console.error(e);
        // console.error(e.response.status + "'n" + e.response.data);
      }
    })();
  };

  /** 페이지 열림과 동시에 실행되는 부분 */
  React.useEffect(() => {
    onButtonClick();
  }, []);

  return (
    <div>
      <h2>학과 목록</h2>

      <form>
        <input type="text" name="keyword" ref={myKeywordInput} />
        <button type="button" onClick={onButtonClick}>
          검색
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>
          {department.length > 0 ? (
            department.map((item, index) => {
              return (
                <tr key={item.deptno}>
                  <td>{item.deptno}</td>
                  <td>{item.dname}</td>
                  <td>{item.loc}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="3" align="center">
                검색결과가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
