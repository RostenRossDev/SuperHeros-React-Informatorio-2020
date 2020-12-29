import React, { Component } from 'react';
import Personajes from '../componentes/Personajes';


class Search extends Component{

    constructor(props){
        super(props)
        this.state={
            loading:true,
            error:null,
            data:{},
            search: this.props.searchTag
        }
    }

    componentDidMount() {
       this.getPersonajes();   
    }
    
    getPersonajes = async() => {
        this.setState({loading:true,error:null});

        try{
            //const response = await fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json');
            const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
            const data =await response.json();
            console.log(data);
            this.setState({
                loading:false, 
                data:data
            })
        }catch(error){
            console.log("Error en la pagina");
            this.setState({loading:false, error:error});
        }
    }

    render(){
        const searchTag = this.props.searchTag;
        console.log("searchTag: "+this.props.searchTag)
        return(
            
                <div className="container">
                    <h1>Characters</h1>
                    {!this.state.loading && <Personajes characters={this.state.data} search={searchTag}/>}
                    {this.state.loading && <h6 className="texr-center">Cargando...</h6>}
                </div>
        )
    }
}

export default Search;