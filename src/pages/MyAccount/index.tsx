import * as S from './styles';
// import { Header } from '../../components';
import foto from '../../assets/profile-photo.jpg';

const MyAccount = () => {
    return (
    <S.Container>
        {/* <Header/> */}
        <div className="my-info">
            {/* <img src="https://lh3.googleusercontent.com/a-/AOh14GjkiXtkGu8I4L-1T1r703nidWTOvrTGpJXZwR31lg=s317-p-rw-no" alt="login-photo" /> */}
            <img src={foto} alt="foto-perfil"/>

            <h2> Thiago Martins </h2>
            
        </div>

        <div className="edit-profile">
            <p>Editar seu Perfil: </p>
            <input type="text" placeholder=' Nome' />
            <input type="text" placeholder=' Sobrenome' />

            <p>E-mail:</p>
            <input type="text" placeholder=' Digite seu E-mail' />

            <p>Senha: </p>
            <input type="password" placeholder='Digite sua Senha' />

            <input type="button" id="btnSaveEdit" value="Salvar"></input>

        </div>
    </S.Container>
    );
}

export default MyAccount;