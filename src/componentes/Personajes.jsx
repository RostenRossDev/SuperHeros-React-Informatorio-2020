import React, {Component} from 'react';
import Personaje from './Personaje';
import InfiniteScroll from 'react-infinite-scroll-component';
class Personajes extends Component{

    render(){

        let characters=null;
        if (this.props.search){
            const searchTag = this.props.search.toUpperCase();
            characters= this.props.characters.map((p)=>{ 
                console.log("nombree: "+p.name.toUpperCase()+"/// id: "+p.id+"/// searcherTag: "+searchTag)
                if(p.name.toUpperCase().includes(searchTag) || searchTag.toUpperCase().includes(p.name) || this.props.search === p.id){
                   return  <Personaje key={p.id} id={p.id} name={p.name} img={p.images.sm} biography={p.work}/>
                }
            });
        }else{
            characters= this.props.characters.map((p)=><Personaje key={p.id} id={p.id} name={p.name} img={p.images.sm} 
                                                        biography={p.work}/>);
        }
        
        
        return (
            <>
            <InfiniteScroll
                dataLength={this.props.characters.length}
                hasMore={true}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
            >
                <div className="row mb-2">
                    {characters}
                </div>
            </InfiniteScroll>
            </>
        );
    }           
}

export default Personajes;