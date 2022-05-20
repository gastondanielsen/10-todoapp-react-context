import { createContext, useState } from "react";

const TareasContext = createContext();

const TareasProvider = ({children}) => {
    
    const [tareas, setTareas] =  useState([]);
    const [edit, setEdit] = useState(null);

    // CREAR UNA NUEVA TAREA
    const crearTarea = (tarea) => {
        const nuevaTarea = {
        ...tarea,
        estado: false,
        };
        setTareas([nuevaTarea, ...tareas]);
    };

    // ELIMINAR UNA TAREA
    const eliminarTarea = (id) => {
        const eliminar = tareas.filter((tarea) => tarea.id !== id);
        setTareas(eliminar);
    };

    // CAMBIAR EL ESTADO DE UNA TAREA
    const cambiarEstado = (id) => {
        const estadoActualizado = tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, estado: !tarea.estado } : tarea
        );
        setTareas(estadoActualizado);
    };

    // EDITAR UNA TAREA
    const editarTarea = (tarea) => {
        const actualizarTarea = tareas.map((item) =>
        item.id === tarea.id ? tarea : item
        );
        setTareas(actualizarTarea);
        setEdit(null);
    };

    return (
        <TareasContext.Provider
            value={{
                tareas,
                crearTarea,
                eliminarTarea,
                cambiarEstado,
                editarTarea,
                edit,
                setEdit
            }}
        >
            {children}
        </TareasContext.Provider>
    );
};

export { TareasProvider };

export default TareasContext;