function mostrarPacientes() {
    let pacientes = []
    let localPacientes = localStorage.getItem("pacientes")
    if(localPacientes){
        pacientes = JSON.parse(localPacientes)
    }
    const tablaPacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
    pacientes.forEach(pacientes => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombrePaciente = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()

        celdaNombrePaciente.textContent = pacientes.nombre
        celdaApellido.textContent = pacientes.apellido
        celdaNumeroCedula.textContent = pacientes.cedula
        celdaEspecialidad.textContent = pacientes.especialidad
        celdaConsultorio.textContent = pacientes.consultorio
        celdaCorreo.textContent = pacientes.correo
    });
}

mostrarPacientes()