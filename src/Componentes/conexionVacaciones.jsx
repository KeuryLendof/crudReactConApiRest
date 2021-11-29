

const Conexion = (props) => {

    console.log(props)

    let inicio = props.fechaInicio
    let fin = props.fechaFin
    

    return(
        <div>
            <h5>{inicio}</h5>
            <h5>{fin}</h5>
        </div>
    )
}

export default Conexion;