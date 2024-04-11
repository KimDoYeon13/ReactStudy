import "./Main.css";

//JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
//    -> Boolean(true/false), undefined, null은 렌더링X
//    -> [객체]obj = { a: 1 } => {obj} 렌더링x, {obj.a} 렌더링o
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다 -> return값에서!
//    -> 빈태그(<></>)로 묶어도 됨

const Main = () => {
  const user = {
    name: "이정한",
    isLogin: true,
  };

  // 1)
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
  // 2)
  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
