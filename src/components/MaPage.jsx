import { useParams } from "react-router-dom"

function MaPage () {
    const {id} = useParams()
    return <h1>Hello ma page !!{id}</h1>
    
}

export default MaPage