import React, {Component} from 'react';
import CardList from './components/card-list/card-list.components';
import './App.css'
import Search from './components/search/search.component';

class App extends Component{
 constructor(){
   super();

   this.state={
     monsters:[],
     searchField:''  
   }
 }

 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(users=>this.setState({monsters:users}))   
 }

 handleChange = e => this.setState({searchField:e.target.value})

 render(){
   const {monsters, searchField}=this.state;
   const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
   return(
     <div className='App'>
       <h1>Users</h1>
       <img src={this.state.images} alt="" />
       <Search
         placeholder='search users'
         handleChange={this.handleChange}
       />
       <CardList monsters={filteredMonsters}/> 
     </div>
   )
 }
}




export default App;