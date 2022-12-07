import { useNavigate } from "react-router-dom";
import PageWrapper from "../component/Wrapper/PageWrapper";
import { useUserContext } from "../contexts/UserContext";

function SplashPage(props) {
  const navigate = useNavigate();

  const {user} = useUserContext();
  console.log('spl');
  console.log(user);
  if (!user)
    navigate("/login");


  return (
    <PageWrapper>
        로그인 여부를 확인중입니다.
    </PageWrapper>
  );
}

export default SplashPage;
