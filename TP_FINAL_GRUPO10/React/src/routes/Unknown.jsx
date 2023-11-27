import { Link } from "react-router-dom"
export const Unknown = () => {
    return(
        <>
            <Link to='/'>
                <button className="btn btn-secondary btn-lg">Regresar a inicio</button>
            </Link> 
        </>
        
    )
}