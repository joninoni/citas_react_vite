const Alertas = ({mensaje}) => {
  return (
    <div>
         <div className="bg-red-800 text-white text-center py-3 mb-2">
            <p>{mensaje}</p>
        </div>
    </div>
  )
}

export default Alertas