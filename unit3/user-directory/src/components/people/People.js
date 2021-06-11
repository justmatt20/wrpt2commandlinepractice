import React, { Component } from 'react'
import data from '../../Data'
import './people.css'


class People extends Component {
    constructor() {
        super()
            this.state = {
                people: []
            }
        
    }

    getNext = (i) => {
        for (let i = 0; i <= data.length; i++) {
           return i
            }
        
                
            }
    
    
    getPrev = () => {
        for (let i=0; i<=data.length; i--) {
            return data[i]
        }
    
    }


render () {
    // console.log(data)
    
    const mappedPeople = data.map((info) => (
       
                    <div className="info-box" key={info.id}>
                        <div className="index">
                            <div>{info.id}/25</div>
                        </div>
                        <div className="person">
                        <div className="names">
                            <div className="style">{info.name.first} {info.name.last}</div>
                            </div>
                            <div className="from">
                        <p className="info">From:</p> <p className="style">{info.city}, {info.country}</p>
                        </div>
                        <div className="title">
                        <p className="info">Job Title:</p> <p className="style">{info.title}</p>
                        </div>
                        <div className="job">
                        <p className="info">Employer:</p> <p className="style">{info.employer}</p>
                        </div>
                        <div className="movies">Favorite Movies:</div>
                        <ol className="list">
                            <li>{info.favoriteMovies[0]}</li>
                            <li>{info.favoriteMovies[1]}</li>
                            <li>{info.favoriteMovies[2]}</li>
                        </ol>
                        </div>
                    </div>
    ));
        return (
            <div className="body">
        
            <div>{mappedPeople[0]}</div>  
           
            <div className="buttons">
                <button  onClick={this.getPrev}> &#60; Previous</button>
               <button  onClick={this.getNext}>Next  &#62; </button>
            </div>
            </div>
            
        )
    
    
}}
export default People;