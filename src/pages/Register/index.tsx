import * as S from './styles';
import { TiImageOutline } from "react-icons/ti";


const Register = () => {
    return (
        <S.Container>
            <div className="register">
                <p>Cadastre-se </p>
                <input type="text" placeholder='Informe seu Nome' />
                <input type="text" placeholder='Informe seu Sobrenome' />

                <p>E-mail:</p>
                <input type="text" placeholder='Digite seu E-mail' />

                <p>Senha: </p>
                <input type="password" placeholder='Digite sua Senha' />

                <p>Upload da foto de Perfil.</p>
                <label htmlFor="filePhoto">
                    <TiImageOutline/>
                    Arraste e solte ou encontre um arquivo 
                    <p>Tamanho recomendado: JPG, PNG, GIF  (1500x1500px, Max 10mb)</p>
                    </label>
                <input type="file" name="filePhoto" accept="image/*" id="filePhoto" ></input>

                <input type="button" className="button-register" value="Salvar"></input>
            </div>

        </S.Container>
    );
}

export default Register;