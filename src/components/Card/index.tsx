import * as S from "./styles";

const Card = (src: any) => {
  console.log("src", src);
  return <S.Container src={src}></S.Container>;
};

export default Card;
