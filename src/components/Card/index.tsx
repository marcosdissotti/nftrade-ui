import { ReactComponent as EthereumIcon } from "../../assets/eth-icon.svg";

import * as S from "./styles";

const Card = (props: any) => {
  return (
    <S.Container>
      <img src={props.src} alt="" />
      <div className="ethereum-wrapper">
        <EthereumIcon />
        <div className="price-wrapper">
          <span>1.0003 ETH</span>
          <p>R$ 2,683.73</p>
        </div>
      </div>
    </S.Container>
  );
};

export default Card;
