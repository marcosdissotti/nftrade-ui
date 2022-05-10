import * as S from "./styles";
import { FaBars } from "react-icons/fa";

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

      <S.Search>
        <S.FaSearch size={28} color="#555555" />
        <input placeholder="Pesquisar artes" />
      </S.Search>
    </S.Container>
  );
};

export default Header;
