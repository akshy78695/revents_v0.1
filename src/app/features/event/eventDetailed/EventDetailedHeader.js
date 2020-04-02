import React from "react";
import { Link } from "react-router-dom";
// import drinks from "/assets/drinks.jpg"

const EventDetailedHeader = ({event}) => {
    let {title, date, hostedBy, id} = event
    return (
        <div>
            <div
                className=""
                style={{
                    position: "relative",
                    color: "white"
                }}
            >
                <img
                    src="https://www.theinnonthelake.co.uk/content/dam/pcdg/common/offers/drinks/pcp-ln19-drinksmenu-cocktails-img.jpg.asset/1580459596674.jpg"
                    alt=""
                    // style={{ width: "100%" }}
                    className="img-fluid"
                />
                <div className="px-4" style={{position:"absolute",bottom:"40px"}}>
                    <p className="h2 font-weight-bold">{title} </p>
                    <p className="h5">{date}</p>
                    <p className="h5">Hosted by <strong>{hostedBy}</strong></p>
                </div>
            </div>
            <div className="card" style={{width:"100%"}}>
                <div className="card-body py-2">
                    <button className="btn btn-secondary btn-sm mx-2">Cancel my event</button>
                    <button className="btn btn-primary btn-sm mx-2">Join this event</button>
                    <Link to={`/manage/${id}`} className="btn btn-info btn-sm float-right">Manage Event</Link>
                </div>
            </div>
        </div>
    );
};

export default EventDetailedHeader;
