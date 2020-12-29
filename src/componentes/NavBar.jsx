import React,{Component} from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Menu = styled.ul`
    display:flex;
    background-color:#333;
    padding-left:0;
    margin-top:0;
    margin-bottom:0;
    list-style:none;
`
const MenuItem = styled.li`
    padding:1rem;
`
const MenuShearch =styled.li`
    padding:1rem;
    margin-left:20%;
    width:300px;
`;
const MenuLink = styled(Link)`
    text-decoration:none;
    text-transform:uppercase;
    color:#fff;
`;
const SearchItem = styled.input`
    border-radius:5px;
    border:1px;
    margin-right:20px;
    height:35px;
`;

const Text = styled.p`
    font-size:2.9rem;
    color:white;
    display: inline-block;
    width:550px;
`;

class NavBar extends Component {
    constructor (props){
        super(props);
        this.state={
            search:"",
            isSerchingTag:false
        };
        this.handleSearchInput=this.handleSearchInput.bind(this);
    }

    handleSearchInput=(e)=>{
        this.setState({search:e.target.value})
    }
    render(){
        const {handleSearch}=this.props
        const {search} =this.state
        return(
            <nav>
                <Menu>
                        <MenuItem>
                            <MenuLink to="/"><Button>Home</Button></MenuLink>
                        </MenuItem>

                        <MenuItem>
                            <MenuLink to="/about"><Button>About</Button></MenuLink>
                        </MenuItem>
                        
                        <MenuItem>
                            <Text>Sci-Fi Characters</Text>
                        </MenuItem>

                        <MenuShearch>
                            <SearchItem 
                                placeholder="Search name" 
                                value={search}
                                onChange={this.handleSearchInput}/>
                            <Link 
                                to={{pathname:`/search/${search}`}}>
                                    <Button variant="success" onClick={()=>handleSearch(search)}>Search</Button>
                            </Link>
                        </MenuShearch>

                </Menu>
            </nav>
        )
    }
}

NavBar.propTypes ={
    handleSearch:PropTypes.func.isRequired
}

export default NavBar;