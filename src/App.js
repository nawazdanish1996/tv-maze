import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  // Actor API: https://api.tvmaze.com/search/people?q=akon
  // Shows API: https://api.tvmaze.com/search/shows?q=friends

  const Actor = async () =>{
      let resp = await fetch("https://api.tvmaze.com/search/people?q=akon");
      setData(await resp.json());
      document.getElementById("inp").value = "";
  }

  return (
    <div className="master">
      <div className="App">
        <div className="container p-5">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h1 className='fi'>TVmaze</h1>
              </div>

              <div className="col-md-12 col-sm-12">
                <h1 className='se'>Search your favourite shows</h1>
              </div>

              <div className="col-md-12 col-sm-12 d-flex mt-xl-5 mt-lg-3 mt-md-2">
                <div className="form-check">
                  <input onClick={Actor} className='form-check-input' id='flexRadioDefault1' type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault1">
                      Actor
                  </label>
                </div>

                <div className="form-check ms-4">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Shows
                  </label>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mt-2">
                <input id='inp' className="form-control form-control-sm " type="text" placeholder="eg: Friends..." />
                <p id='ifnotfound'></p>
              </div>
            </div>
        </div>
      </div>

      {/* Card */}

            <div className='content p-5'>
              <div className="container">
                  <div className="row">
      {
        
       data.map((val, ind)=>{
              return(
                      <div className="col-md-4 mb-4" key={ind}>
                          <div className="card" style={{width: "18rem"}} >
                            <img className="card-img-top" src="/" alt='card-img' />
                              <div className="card-body">
                                <h5 className="card-title">{val.person.name}</h5>
                                <p className="card-text">{}</p>
                                <p className=' float-end text-success'>Rating: {val.score}</p>
                              </div>
                          </div>
                      </div>
              )
          })
        }
              </div>
          </div>
        </div>
    </div>
  )
}

export default App;
