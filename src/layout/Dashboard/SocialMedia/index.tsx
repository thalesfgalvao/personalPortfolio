import * as S from "./style";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialMedia = () => {
  return (
    <S.SocialMediaWrapper>
      <S.SocialMediaItem>
        <S.Link href="https://github.com/thalesfgalvao" target="_blank"><GitHubIcon />Github</S.Link>
      </S.SocialMediaItem>
      <S.SocialMediaItem>
        <S.Link href="https://www.linkedin.com/in/thales-marques/" target="_blank"><LinkedInIcon />Linkedin</S.Link>
      </S.SocialMediaItem>
    </S.SocialMediaWrapper>
  );
};

export default SocialMedia;
