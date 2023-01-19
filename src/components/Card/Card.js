import React from 'react'
import PropTypes from 'prop-types'
const Card = ({movie}) =>{
    if(movie.Poster!='N/A'){
        return(
            <div className='col-md-4'>           
                <div className='card'>
                <img src={movie.Poster} alt={`${movie.Title}`} className='card-img-top'/>
                    <div className='card-body'>
                        <h4>{movie.Title}</h4>
                        <p>{movie.Year} - {movie.Type}</p>
                    </div>                
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    movie: PropTypes.shape({
        Title : PropTypes.string,
        Poster : PropTypes.string,
        Year : PropTypes.string,
        Type : PropTypes.string
    }).isRequired

}
export default Card