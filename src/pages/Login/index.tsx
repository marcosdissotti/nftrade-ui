import * as S from './styles';

const Login = () => {
    return (
    <S.Container> 
        <div className='app-name'>
            NFTrade
        </div>

        <div className='buttons'>
            <input type="button" id="btnLogin" value="Logar"></input> 
            <input type="button" id="btnRegister" value="Cadastrar-se" backround-color="red"></input>
        </div>

    </S.Container>
    );
}

export default Login;