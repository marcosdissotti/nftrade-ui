import { FaBars } from "react-icons/fa";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.Main>
        <h1>NFTrade</h1>
        <FaBars size={24} />
      </S.Main>
      <S.Slogan>
        <h2>Explore, compre e venda</h2>
        <span>Sua Arte Digital</span>
      </S.Slogan>

      <input></input>
    </S.Container>
  );
};

export default Header;
