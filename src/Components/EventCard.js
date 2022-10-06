import React from "react";

function EventCard({eventName,description,venue,host,date}) {
  return (
    <>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{eventName}</h5>
                <p className="card-text">{description} Held at {venue} by {host} on {date} </p>
                <a href="#content-footer" class="btn btn-primary">Want to Attend?</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default EventCard;