import * as S from "./styles";

const Card = (props: any) => {
  console.log("src", props.src);
  return <S.Container src={props.src} alt="test"></S.Container>;
};

export default Card;
