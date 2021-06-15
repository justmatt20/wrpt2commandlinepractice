import React from 'react'
import data from '../src/Data'
import People from './components/people/People'
import Header from './components/header/Header'
import '../src/App.css'


class App extends React.Component {

render() {
      return (
        
            
     <div>
       <Header />
       <People  peopleData={data}/>
        </div>
        
      )}}

         
  
  
  
        
        


export default App;
