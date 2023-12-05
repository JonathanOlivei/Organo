import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botão from '../Botão'
import { useState } from 'react'

const Formulario = (props) => {

    
   const [nome,setNome] = useState('')
   const [cargo, setCargo] = useState('')
   const [imagem,setImagem] = useState('')
   const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setImagem('')
        setCargo('')
        setTime('')
   }

    return (
        <section className='Formulario'>

            
            <form onSubmit={aoSalvar}>
                <h2>Prencha os dados para criar um colaborador:</h2>
                <CampoTexto obrigatorio={true} 
                label='Nome' 
                placeholder='Digite seu nome:' 
                valor = {nome}
                aoAlterado = {valor => setNome(valor)}
                />

                <CampoTexto obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite seu cargo:' 
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)}
                />
                
                <CampoTexto 
                label='Imagem '
                 placeholder='Digite o endereço da imagem:' 
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}  
                />

                <ListaSuspensa obrigatorio={true} 
                label='Time' 
                itens={props.times}
                valor = {time}
                aoAlterado =  {valor => setTime(valor)}
                />

                <Botão> 
                    Criar Card
                </Botão>
            </form>
        </section>
    )
}

export default Formulario