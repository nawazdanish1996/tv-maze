import React from 'react';

function Movies(props) {
  return (
    <React.Fragment>
        <div className='content p-5'>
        <div className="container">
        <div className="row d-flex">
{
    props.val.person === undefined ?(
            <div className="col-md-4 mb-2">
                <div className="card" style={{width: "18rem"}} >
                    { props.val.show.image != null?
                    (
                    <img className="card-img-top" src={props.val.show.image.medium} alt='card-img' />
                    ):
                    (
                        <img className="card-img-top" src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs=" alt='card-img' />
                    )
                    } 
                    <div className="card-body">
                        <h5 className="card-title">{props.val.show.name}</h5>
                        <p className="card-text">{}</p>
                        <p className=' text-success'>Rating: {}</p>
                    </div>
                </div>
            </div>
    ):(
            <div className="col-md-4 mb-2">
                <div className="card" style={{width: "18rem"}} >
                { props.val.person.image != null?
                    (
                    <img className="card-img-top" src={props.val.person.image.medium} alt='card-img' />
                    ):
                    (
                        <img className="card-img-top" src="https://media.istockphoto.com/vectors/movie-time-vector-illustration-cinema-poster-concept-on-red-round-vector-id911590226?k=20&m=911590226&s=612x612&w=0&h=HlJtSKF-fLsKFy1QJ-EVnxXkktBKNS-3jUQPXsSasYs=" alt='card-img' />
                    )
                } 
                    <div className="card-body">
                        <h5 className="card-title">{props.val.person.name}</h5>
                        <p className="card-text">{}</p>
                        <p className=' float-end text-success'>Rating: {}</p>
                    </div>
                </div>
            </div>
            )
}
            </div>
            </div>
            </div>
    </React.Fragment>
  )
}

export default Movies;