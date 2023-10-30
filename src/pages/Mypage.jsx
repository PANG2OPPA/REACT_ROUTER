import { Navigate, useNavigate } from "react-router-dom";

const Mypage = () => {
  const navigate = useNavigate();
  const isLogin = false;

  if (isLogin) {
    return (
      <>
        <h1>여기가 마이페이지 입니다.</h1>
        {/* <link to="/">홈페이지로 이동</link> */}
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </>
    );
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default Mypage;
