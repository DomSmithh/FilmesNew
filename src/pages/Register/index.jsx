import {useState} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  async  function handleRegister(e){
        e.preventDefault();
        if(email !== '' && password !==''){
          await createUserWithEmailAndPassword(auth,email,password)
          .then(()=>{
             navigate('/login',{replace:true})
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
        <h1>Cadastre-se</h1>
        <span>vamos criar sua conta.</span>
        <form className='form' onSubmit={handleRegister}>
            <input type="email"
                   placeholder='seuemail@server.com'
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}/> <br/>
            <input type="password"
                   placeholder='******'
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}/> <br/>
                   <button type="submit">Cadastrar</button>
        </form>
        <Link className="button-Link" to={'/login'}>
            Já possui conta? faça o login.
        </Link>
      </div>
    )
}

export default Register;
  