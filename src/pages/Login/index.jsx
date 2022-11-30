import {useState} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleLogin(e){
        e.preventDefault();
        if(email !== '' && password !==''){
           await signInWithEmailAndPassword(auth,email,password)
           .then(()=>{
              navigate('/',{replace:true})
           })
           .catch(()=>{
            console.log("Erro ao fazer login")
           })
        }else{
            alert("Preencha todos os campos!")
        }
    }

    return (
      <div className='home-container'>
        <div className='home1'>
        <span>Veja filmes em nosso site.</span>
        <form className='form' onSubmit={handleLogin}>
            <input type="email"
                   placeholder='seuemail@server.com'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}/> <br/>
            <input type="password"
                   placeholder='******'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}/> <br/>
                   <button type="submit">Acessar</button>
        </form>
        <Link className="button-Link" to={'/register'}>
            Não possui uma conta? Cadastre-se
        </Link>
        </div>
        <div className='home2'>
        <h1>Faça login e veja os ultimos lançamentos</h1>
        </div>
      </div>
    )
}

export default Login;