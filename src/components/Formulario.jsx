import {useState,useEffect} from "react"
import Alertas from "./Alertas"

function Formulario({pacientes,setPacientes,paciente,setPaciente}){
    const [nombre,setNombre]=useState("")
    const [propietario,setPropietario]=useState("")
    const [email,setEmail]=useState("")
    const [fecha,setFecha]=useState("")
    const [sintomas,setSintomas]=useState("")
    const [error,setError] =useState(false)

    //se ejecuta solo si hay elementos en el objeto paciente
    // y llenamos el formulario con los datos del paciente que queremos editar
    useEffect(()=>{
       if (Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas);
       }
    },[paciente])//cambia cuando le damos click a editar
    
    //funcion que crea un id para cada paciente
    const generarId= () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).slice(0,1)
        return `${fecha} ${random}`
    }

    const handleSubmit=e=>{
        e.preventDefault()
        if([nombre,propietario,email,fecha,sintomas].includes("")){
            setError(true)
            return
        }

           setError(false)

           const objectoPaciente={
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
                id:generarId(),
           }
           if(Object.keys(paciente).length > 0){
                // editando un paciente
                // console.log(objectoPaciente);el objecto actualizado
                const pacientesActualizaados=pacientes.map( pacienteState => pacienteState.id === paciente.id ? objectoPaciente : pacienteState )
                setPacientes(pacientesActualizaados)
                setPaciente({})//reiniciando el estado del paciente
           }else{
                // agregando un paciente
                setPacientes([...pacientes,objectoPaciente])          
           }

           //guardando un paciente nuevo y creando una copia de los anteriores
           

           //reiniciando el formulario
           setNombre("")
           setPropietario("")
           setEmail("")
           setFecha("")
           setSintomas("")
    }
    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="mt-5 text-xl text-center mb-5">Añade pacientes y
            <span className="text-indigo-600 font-bold">Administrralos</span>
            </p>

            <form className="bg-white rounded-lg shadow-md py-10 px-5 mb-10"
                  onSubmit={handleSubmit}
            >
                {error&& <Alertas mensaje="Todos los campos son obligatorios"/>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                            Nombre Mascota
                    </label>

                    <input type="text"
                        id="mascota"
                        className=" placeholder-gray-400 border-2 w-full p-2 mt-2 rounded-md"
                        placeholder="Nombre de la mascota"
                        value={nombre}                        
                        onChange={ e=> setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                            Nombre Del Propietario
                    </label>

                    <input type="text"
                        id="propietario"
                        className=" placeholder-gray-400 border-2 w-full p-2 mt-2 rounded-md"
                        placeholder="Nombre del Propietario"
                        value={propietario}                        
                        onChange={ e=> setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                            Email
                    </label>

                    <input type="email"
                        id="email"
                        className=" placeholder-gray-400 border-2 w-full p-2 mt-2 rounded-md"
                        placeholder="Contacto Propietario Email"
                        value={email}
                        onChange={ e => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
                        Fecha
                    </label>

                    <input type="date"
                        id="fecha"
                        className=" placeholder-gray-400 border-2 w-full p-2 mt-2 rounded-md"
                        value={fecha}
                        onChange={ e => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                          Sintomas
                    </label>

                    <textarea
                        id="sintomas"
                        className=" placeholder-gray-400 border-2 w-full p-2 mt-2 rounded-md"
                        placeholder="Describe los Sintomas"
                        value={sintomas}
                        onChange={ e => setSintomas(e.target.value)}
                    />
                </div>

                <input type="submit" 
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
                value={Object.keys(paciente).length > 0 ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    )
}

export default Formulario