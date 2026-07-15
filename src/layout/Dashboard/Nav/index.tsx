import * as S from "./style";
import { ButtonMenu } from "../../../components/ButtonMenu";
import RestoreIcon from '@mui/icons-material/Restore';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Nav = () => {
  return (
    <S.Wrapper>
      <ButtonMenu icon={<WorkOutlineOutlinedIcon />} menuOption="Projetos" />
      <ButtonMenu icon={<RestoreIcon />} menuOption="Experiência" />
      <ButtonMenu icon={<PermIdentityIcon />} menuOption="Sobre" />
      <ButtonMenu icon={<EmailOutlinedIcon />} menuOption="Contato" />
    </S.Wrapper>
  );
};

export default Nav;
