import { Link } from "react-router-dom"
export const Unknown = () => {
    return(
        <>
            <h1>⚒⚒ Esta pagina Esta en Contruccion ⚒⚒</h1>
            <h2>Lo sentimos 😪</h2>
            <Link to='/'>
                <button className="btn btn-secondary btn-lg">Regresar a inicio</button>
            </Link> 
        </>
        
    )
}