import Nav from "./Nav";
import ProfileInfo from "./ProfileInfo";
import SocialMedia from "./SocialMedia";
import * as S from "./style";

const Dashboard = () => {
  return (
    <S.MainContainer>
      <ProfileInfo />
      <Nav />
      <SocialMedia />
    </S.MainContainer>
  );
};

export default Dashboard;
