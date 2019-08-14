import React, { Component } from 'react'
import uuid from 'uuid';
const stateInicial = { 
    cita: {
        id: uuid(),
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }, 
    error : false
};

class NuevaCita extends Component {
    state = { 
        ...stateInicial        
    }

    handleChange = (e) => {
       
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name]: e.target.value,
               
            }
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        //extraer valores del state
        const { mascota, propietario, fecha, hora , sintomas } = this.state.cita;
        // validar campos obligatorios
        if( mascota === '' || propietario  === '' || fecha  === '' || hora  === '' || sintomas  === '' ) {
            this.setState({
                error: true
            }); 

            return;
        } else {
            this.setState({
                error: false
            }); 

        }
        // agregar la cita al state de App

        this.props.crearNuevaCita(this.state.cita);

        this.setState({
            ...stateInicial
        });
    };

    render() {

        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Complete el formulario para una nueva cita.
                    </h2>
                    {error ? <div className="alert alert-danger mt-2 mb-5 text-center"> Todos los campos son obligatorios </div> : null}
                    <form onSubmit= {this.handleSubmit} >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label"> Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange= {this.handleChange}
                                    value= {this.state.cita.mascota}
                                />
                            </div>                          
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label"> Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="propietario"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño"
                                    name="propietario"
                                    onChange= {this.handleChange}
                                    value= {this.state.cita.propietario}
                                />
                            </div>                          
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label"> Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"                                   
                                    name="fecha"
                                    onChange= {this.handleChange}
                                    value= {this.state.cita.fecha}
                                />
                            </div>                          
                     
                            <label className="col-sm-4 col-lg-2 col-form-label"> Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"                                   
                                    name="hora"
                                    onChange= {this.handleChange}
                                    value= {this.state.cita.hora}
                                />
                            </div>                          
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control" 
                                    name="sintomas" 
                                    onChange= {this.handleChange}
                                    value= {this.state.cita.sintomas}
                                > </textarea>
                            </div>                          
                        </div>
                        <div className="form-group row">
                            <button className="btn btn-success py-3 mt-2 btn-block">Agregar Cita</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NuevaCita;