import React from 'react';

function Movies(props) {
  return (
    <React.Fragment>
        <div className='content p-5'>
        <div className="container">
        <div className="row">
        {
            props.data.map((vall, ind)=>{
                return(
                    <div className="col-md-4 mb-4" key={ind}>
                        <div className="card" style={{width: "18rem"}} >
                            <img className="card-img-top" src="/" alt='card-img' />
                                <div className="card-body">
                                    <h5 className="card-title">{vall.person.name}</h5>
                                    <p className="card-text">{}</p>
                                    <p className=' float-end text-success'>Rating: {vall.score}</p>
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

export default Movies;