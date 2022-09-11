import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const Actor = async () =>{
    const response = await fetch("https://api.tvmaze.com/search/people?q=akon");
    setData(await response.json())
  }

  const Shows = async () =>{
    const response = await fetch("https://api.tvmaze.com/search/shows?q=friends");
    setData(await response.json())
  }

  const Srch = (e) => {
    setSearchData(e.target.value)
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
                  <input onClick={Actor()} className='form-check-input' id='flexRadioDefault1' type="radio" name="flexRadioDefault" />
                  <label className="form-check-label" for="flexRadioDefault1">
                      Actor
                  </label>
                </div>

                <div className="form-check ms-4">
                  <input onClick={Shows()} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label className="form-check-label" for="flexRadioDefault2">
                    Shows
                  </label>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 mt-2">
                <input onChange={Srch} id='inp' className="form-control form-control-sm " type="text" placeholder="eg. Friends..." />
              </div>
            </div>
        </div>
      </div>

      {/* Card */}

            <div className='content p-5'>
              <div className="container">
                  <div className="row">
      {
        searchData.length>=1?data.map((val, ind)=>{
          let my = "";

              if(val.person === undefined){
                val=String(val.show.name)
              }

              if(val.show === undefined){
                val=String(val.person.name)
              }

              my=my.toLowerCase();
              if(searchData === my.substring(0, searchData.length)){
                return <Movie my={val} key={ind} />
              }
          }):null
        }
              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
