import React from 'react';

function Shows(props) {
  return (
    <React.Fragment>
        <div className='content p-5'>
        <div className="container">
        <div className="row">
        {
            props.data1.map((val, index)=>{
                return(
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card" style={{width: "18rem"}} >
                            <img className="card-img-top" src="/" alt='card-img' />
                                <div className="card-body">
                                    <h5 className="card-title">{val.show.language}</h5>
                                    <p className="card-text">{val.show.language}</p>
                                    <p className=' float-end text-success'>Score: {val.score}</p>
                                </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Shows;