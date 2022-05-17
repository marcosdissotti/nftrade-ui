import { Header, Card } from "../../components";
import Molao from "../../assets/molao.png";
import * as S from "./styles";

const Home = () => {
  return (
    <S.Container>
      <Header />

      <main>
        <Card src={Molao} />
        <Card src={Molao} />
        <Card src={Molao} />
        <Card src={Molao} />
        <Card src={Molao} />
        <Card src={Molao} />
      </main>
    </S.Container>
  );
};

export default Home;
