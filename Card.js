import React from 'react'

const Card = (props) => {
    return (
        <section className="card">
            <div className="card--pic" style={{ backgroundImage: `url(${props.card.imageUrl})` }} />
            <div className="card--data">
                <div className="card--head">
                    <p className="card--country">
                        <i className="fa-solid fa-location-dot"></i>
                        {props.card.location}
                    </p>
                    <a  className="card--map" href={props.card.googleMapsUrl} target="_blank">
                        View on Google Maps
                    </a>
                </div>
                <div className="card--details">
                    <h1 className="card--title">{props.card.title}</h1>
                    <p className="card--dates">{props.card.startDate} - {props.card.endDate}</p>
                    <p className="card--text">{props.card.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Card;