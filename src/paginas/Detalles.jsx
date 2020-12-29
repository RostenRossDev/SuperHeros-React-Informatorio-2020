import React, { Component } from 'react'
import DetallesPersonaje from '../componentes/DetallesPersonaje';

class Detalles extends Component{
    state = {
        data:{},
        loading:true,
        error:null
    }

    componentDidMount(){
        this.getDetalle();
    }

    getDetalle = async () => {
        this.setState({ loading:true, error:null});
        const {handle} = this.props.match.params;
        try{
            const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${handle}.json`);
            const data =await response.json();
            console.log(data);
            this.setState({
                loading:false, 
                data:data,
            })
        }catch(error){
            console.log("Error en la pagina");
            this.setState({loading:false, error:error});
        }
    
    };
    render(){
        return(
            <div>
            {!this.state.loading && <DetallesPersonaje key={this.state.data.id} 
                                               id={this.state.data.id}
                                               name={this.state.data.name} 
                                               img={this.state.data.images.md}
                                               work={this.state.data.work}
                                               appearance={this.state.data.appearance}
                                               biography={this.state.data.biography}
                                               powerstats={this.state.data.powerstats}
                                               connections={this.state.data.connections}
                                               />}

            {this.state.loading && <h6 className="texr-center">Cargando...</h6>}
            {this.state.error && <h6 className="texr-center">Ocurrio un error:{this.state.error}</h6>}
            </div>
        );
    }
}

export default Detalles;