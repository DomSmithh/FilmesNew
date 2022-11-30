import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import './filme-info.css';
import api from '../../services/api';

function Filmes() {
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [nome, setNome] = useState({});
    const [sinopse, setSinopse] = useState({});

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`movie/${id}`, {
                params:{
                    api_key:"8090e5ce894011bc532fd0e49a9fa889",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não encontrado")
                navigate("/",{replace: true})
                return;
            })
        }
        loadFilme();

        return ()=>{
            console.log("Componente foi desmontado")
        }
    },[navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@filme");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filme.id)
        if(hasFilme){
            toast.warn("Esse filme já esta na lista");
            return;
        }
        filmesSalvos.push(filme);
        localStorage.setItem("@filme",JSON.stringify(filmesSalvos))
        toast.success("FIlme salvo com sucesso")
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    async function addFilmes(){
    
        await addDoc(collection(db, "filmes"), {
          nome: filme.title,
          sinopse: filme.overview,
        })
        .then(() => {
          console.log("CADASTRADO COM SUCESSO")
        })
        .catch((error) => {
          console.log("ERRO " + error)
        })
    
      }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span className='span1' >{filme.overview}</span>
            <h3 className='data'>Data de Lançamento</h3>
            <span>{filme.release_date}</span>
            <strong className='avaliacao'>Avaliação: {filme.vote_average} /10</strong>
            <div className='area-buttons'>
                <button onClick={addFilmes}>Salvar</button>

                <button> <a target='blanck' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a></button>
            </div>
        </div>
    );
}   
export default Filmes;