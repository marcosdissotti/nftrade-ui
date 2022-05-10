import { Card, Header } from "../../components";
import * as S from "./styles";
// import molao from "../../assets/molao.png";

const Home = () => {
  return (
    <S.Container>
      <Header />

      <main>
        <Card
          src={require("http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png")}
        />
        <Card
          src={require("http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png")}
        />
        <Card
          src={require("http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png")}
        />
        <Card
          src={require("http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png")}
        />
      </main>
    </S.Container>
  );
};

export default Home;
