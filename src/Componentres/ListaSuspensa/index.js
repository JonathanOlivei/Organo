import './ListaSuspensa.css'


const listasuspensa = (props) =>{

    console.log(props.itens)

    return(

        <div className='Lista-Suspensa'>

            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} >
                <option value=''> </option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )



}

export default listasuspensa