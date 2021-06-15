import React, { useState } from "react";
import data from "../../Data";
import "./people.css";

const People = ({ peopleData }) => {
  const [current, setCurrent] = useState(0);
  const length = peopleData.length;


  const nextPerson = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);
  const prevPerson = () => {
    setCurrent(current === length - 1 ? 0 : current - 1);
  };

  
  return (
    <>
      {data.map((info, index) => {
        return (
            <div className={index === current ? 'slide active' : info} key={index}>
                {index === current && ( <div className="body">
            <div className="info-box" key={info.id}>
              <div className="index">
                <div>{info.id}/25</div>
              </div>
              <div className="person">
                <div className="names">
                  <div className="style">
                    {info.name.first} {info.name.last}
                  </div>
                </div>
                <div className="from">
                  <p className="info">From:</p>{" "}
                  <p className="style">
                    {info.city}, {info.country}
                  </p>
                </div>
                <div className="title">
                  <p className="info">Job Title:</p>{" "}
                  <p className="style">{info.title}</p>
                </div>
                <div className="job">
                  <p className="info">Employer:</p>{" "}
                  <p className="style">{info.employer}</p>
                </div>
                <div className="movies">Favorite Movies:</div>
                <ol className="list">
                  <li>{info.favoriteMovies[0]}</li>
                  <li>{info.favoriteMovies[1]}</li>
                  <li>{info.favoriteMovies[2]}</li>
                </ol>
              </div>
            </div>
            <div className="buttons">
              <button className="previous"onClick={prevPerson}> &#60; Previous</button>
              <button className="next"onClick={nextPerson}>Next &#62; </button>
            </div>
            </div>)}
          </div>
        );
      })}
    </>
  );
};

export default People;
