import * as S from './styles';
import foto from '../../assets/profile-photo.jpg';

const MyAccount = () => {
    return (
        <S.Container>
            <div className="my-info">
                <img src={foto} alt="foto-perfil" />

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
                <input type="button" className='button-save' value="Salvar"></input>

            </div>
        </S.Container>
    );
}
export default MyAccount;