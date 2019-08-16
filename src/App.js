import React , { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';


class App extends Component {
  state = {
    citas: []
  }

  // Cuando la app carga
  componentDidMount()  {
    const citasLS =JSON.parse( localStorage.getItem('citas'));
    if (citasLS) {
      this.setState({
        citas: citasLS
      });
    }

  };

  // eliminamos o agregamos cita

  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  };


  crearNuevaCita = datos => {
        
    const citas = [...this.state.citas, datos];

    this.setState({
      citas
    });

  };

  // eliminar cita

  eliminarCita = citaId => {
    // copiar el state
    const citasActuales = [...this.state.citas];
    // utilizar filter
    const citas = citasActuales.filter(cita => cita.id !== citaId);
    // actualizar state
    this.setState({
      citas
    });    
  };

  render() {
    return (
      <div className="container">
        <Header titulo='Administrador Pacientes'></Header>
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita = {this.crearNuevaCita}></NuevaCita>
          </div>
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas = {this.state.citas} 
              eliminarCita = {this.eliminarCita}
            ></ListaCitas>
          </div>
          
        </div>
        
      </div>
    )
  }
}


export default App;
