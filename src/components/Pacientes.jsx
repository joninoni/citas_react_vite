const Pacientes = ({paciente,setPaciente,eliminarPaciente}) => {

    const handleEliminar = () => {

        confirm("¿Estas seguro de eliminar este paciente?")
        
        if(confirm){
            eliminarPaciente(paciente.id)
        }
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md rounded-xl px-5 py-10">
        <p className="font-bold uppercas mb-3">
            Nombre: {""}
        <span className="font-normal normal-case text-gray-700">{paciente.nombre}</span>
        </p>

        <p className="font-bold uppercase mb-3">
            Propietarrio: {""}
        <span className="font-normal normal-case text-gray-700">{paciente.propietario}</span>
        </p>
        
        <p className="font-bold uppercase mb-3">
            Email: {""}
        <span className="font-normal normal-case text-gray-700">{paciente.email}</span>
        </p>

        <p className="font-bold uppercase mb-3">
            Fecha: {""}
        <span className="font-normal normal-case text-gray-700">{paciente.fecha}</span>
        </p>

        <p className="font-bold uppercase mb-3">
            Sintomas: {""}
        <span className="font-normal normal-case text-gray-700">{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between">
            <button 
            className="py-2 px-10 bg-indigo-600 text-white uppercase hover:bg-indigo-700 rounded-lg"
            onClick={()=> setPaciente(paciente)}//al hacer click modificamos el estado del paciente
            >
                Editar
            </button>
            <button 
            className="py-2 px-10 bg-red-600 text-white uppercase hover:bg-red-700 rounded-lg"
            onClick={handleEliminar}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Pacientes