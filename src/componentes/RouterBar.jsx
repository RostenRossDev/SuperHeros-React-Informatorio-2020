import {React, Component} from 'react';
import Home from '../paginas/Home'
import About from '../paginas/About'
import Detalles from '../paginas/Detalles'
import Search from '../paginas/Search'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './NavBar';

class  RouterBar extends Component {
    state={
        searchTag:''
    }

    handleSearch =(search)=>{
    this.setState({searchTag:search})
    }

    render(){
        const searchTag =this.state.searchTag
        return(
            <Router>
                <div>
                    <NavBar handleSearch={this.handleSearch} />
                    <Switch>
    
                        <Route exact path="/about" component={About} />
    
                        <Route exact path="/" component={Home} />
                          
                        <Route exact path="/detalles/:handle" component ={Detalles} />    
    
                        <Route exact path="/search/:handle" >
                            <Search searchTag={searchTag}/>
                        </Route>
    
                    </Switch>
                </div>
            </Router>
        );
    }
   
    
}

export default RouterBar;