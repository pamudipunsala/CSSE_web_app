import axios from 'axios';
import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            items:[]
        };
    }

    componentDidMount(){
        this.displayItem();
    }

    displayItem(){
        axios.get("http://localhost:5000/items").then((res) => {
            if(res.data.success){
                this.setState({
                    items:res.data.existingItems
                });
                console.log(this.state.items);
            }
        });
    }

    filterData(items,searchKey){
        const result = items.filter((items)=>
        items.icode.includes(searchKey)||
        items.iname.includes(searchKey)||
        items.ctg.includes(searchKey)||
        items.amt.includes(searchKey)||
        items.price.includes(searchKey)
        )
        this.setState({items:result})
      }

    handleSearchArea= (e)=>{
        const searchKey =e.currentTarget.value;
        axios.get("http://localhost:5000/items").then(res=>{
          if(res.data.success){
            this.filterData(res.data.existingItems,searchKey)
      }
      });
      }

    
    render(){
        return(
            
                <div className="additem" >
                <div className="ish">
                <div style={{textAlign:"center", paddingTop:"50px"}}>
                <input className="search" type="search" placeholder="Search" name="searchQuery" onChange={this.handleSearchArea}></input><br/><br/>                     
                <div>
                    
                        {this.state.items.map((items,index) => (
                            // <div key={index}>
                                <button type="button" className='b1'><a href={'/createorder'}>
                                <label>Item Code : {items.icode}</label><br/>
                                <label>Item Name : {items.iname}</label><br/>
                                <label>Price :{items.price}</label><br/>
                                </a>
                                </button>                      
                            // </div>
                        ))}
                        
                </div>
                </div>
                </div>
                </div>
        ); 
    }
}
export default Home;