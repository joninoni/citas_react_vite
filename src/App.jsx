import {useState,useEffect} from "react"//los componenetes de react se importan con llaves
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes,setPacientes] = useState([])//es para agregar un nuevo paciente
  const [paciente,setPaciente] = useState({})//es para editar un paciente

  function eliminarPaciente(id){
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  useEffect(()=>{
      const pacientesLs=()=>{
          const pacientesLs=JSON.parse(localStorage.getItem("pacientes")) ?? [];
          setPacientes(pacientesLs)
      }
      pacientesLs()
  },[])

  useEffect(()=>{

    localStorage.setItem("pacientes",JSON.stringify(pacientes))

  },[pacientes])

  return(

      <div className="container mx-auto mt-20">

          <Header/>

          <div className="mt-12 md:flex">

            <Formulario
                pacientes={pacientes}
                setPacientes={setPacientes}
                paciente={paciente}//se esta pasando el paciente ya modificado por que ya se la ha dado editar      
                setPaciente={setPaciente}
            />
            <ListadoPacientes
                pacientes={pacientes}
                setPaciente={setPaciente}  
                eliminarPaciente={eliminarPaciente}
            />
            
          </div>
          
      </div>
  )     
}

export default App
