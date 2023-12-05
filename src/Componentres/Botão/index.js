import './Botão.css'

const Botão = (props) => {
    return(
        <button className='Criar_card'>
            {props.children}
        </button>
    )
}


export default Botão