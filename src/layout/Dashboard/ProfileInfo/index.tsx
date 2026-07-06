import * as S from "./style";

const ProfileInfo = () => {
  return (
    <S.ProfileInfoContainer>
      <S.ProfilePicture>100x100</S.ProfilePicture>
      <S.ProfileInformation>
        <S.ProfileTitle>Oi, sou o Thales Marques!</S.ProfileTitle>
        <S.ProfileLabel>Desenvolvedor Fullstack</S.ProfileLabel>
      </S.ProfileInformation>
    </S.ProfileInfoContainer>
  );
};

export default ProfileInfo;
