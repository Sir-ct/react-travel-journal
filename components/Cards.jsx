import React from 'react'
function Cards(props){

    
   return(
        <div className='card'>
            <div className='card-img'>
                <img src={props.item.imageUrl} alt="" />
            </div>
            <div className='card-details'>
                <div className="det-location">
                    <ion-icon name="location"></ion-icon>
                    <span>{props.item.location}</span>
                    <a href="">view on google maps</a>
                </div>
                <h1 className="det-title"> {props.item.title} </h1>
                <div className="det-date">{props.item.startDate} - {props.item.endDate}</div>
                <p className='det-description'>{props.item.description}</p>

            </div>
        </div>
   )
}
export default Cards