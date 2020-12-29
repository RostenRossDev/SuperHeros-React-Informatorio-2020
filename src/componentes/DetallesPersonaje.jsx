import React, { Component } from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    margin-left:20px;
    margin-top:20px;
`;

class DetallesPersonaje extends Component{

    render(){
        return(
            <Contenedor className="card mb-3">
                <h1 className="card-title" style={{"marginLeft":"45%"}}>{this.props.name}</h1>
                <div className="row g-1">
                    <div className="col-md-4">
                        <img src={this.props.img} alt="..." />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h3 className="card-text">Work</h3>
                            <p className="card-text">Occupation: {this.props.work.occupation}</p>
                        </div>

                        <div className="card-body ">
                            <h3 className="card-text">Appareance</h3>
                            <p className="card-text">Gender: {this.props.appearance.gender}</p>
                            <p className="card-text">Race: {this.props.appearance.race}</p>
                            <p className="card-text">Height: {this.props.appearance.height[1]}</p>
                            <p className="card-text">Eyes Color: {this.props.appearance.eyeColor}</p>
                            <p className="card-text">Hair Color: {this.props.appearance.hairColor}</p>
                        </div>

                        <div className="card-body">
                            <h3 className="card-text">Powerstats</h3>
                            <p className="card-text">Intelligence: {this.props.powerstats.intelligence}</p>
                            <p className="card-text">Strength: {this.props.powerstats.strength}</p>
                            <p className="card-text">Speed: {this.props.powerstats.speed}</p>
                            <p className="card-text">Durability: {this.props.powerstats.durability}</p>
                            <p className="card-text">Power: {this.props.powerstats.power}</p>
                            <p className="card-text">Combat: {this.props.powerstats.combat}</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card-body ">
                            <h3 className="card-text">Biography</h3>
                            <p className="card-text">Full Name: {this.props.biography.fullName}</p>
                            <p className="card-text">Alter Egos: {this.props.biography.alterEgos}</p>
                            <p className="card-text">Aliases: {this.props.biography.aliases.map(alias=>alias+" ")}</p>
                            <p className="card-text">Place OfBirth: {this.props.biography.placeOfBirth}</p>
                            <p className="card-text">First Appearance: {this.props.biography.firstAppearance}</p>
                            <p className="card-text">Publisher: {this.props.biography.publisher}</p>
                            <p className="card-text">alignment: {this.props.biography.alignment}</p>
                        </div>
                        
                        <div className="card-body">
                            <h3 className="card-text">connections</h3>
                            <p className="card-text">Group Affiliation: {this.props.connections.groupAffiliation}</p>
                            <p className="card-text">Relatives: {this.props.connections.relatives}</p>
                        </div>
                    </div>
                </div>
            </Contenedor>
        )
    }
}


export default DetallesPersonaje;