const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  
  const {nombre, propietario, email, fecha, sintoma, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?')
    if(respuesta) {
      eliminarPaciente(id)
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl my-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">
          {sintoma}
        </span>
      </p>
      <div className="flex justify-between mt-10">
        <button 
          type="button"
          className="py-2 px-10 text-indigo-600 hover:text-white hover:bg-indigo-700 font-bold uppercase rounded-md"
          onClick={() => {setPaciente(paciente)}}
          >Editar</button>
        <button 
          type="button"
          className="py-2 px-10 text-red-600 hover:text-white hover:bg-red-700 font-bold uppercase rounded-md"
          onClick={handleEliminar}
          >Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;
