import { useContext } from "react"
import TareasContext from '../context/TareasContext'

const useTareas = () => {
    return useContext(TareasContext)
}

export default useTareas