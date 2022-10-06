import React from "react";

function EventCard({eventName,description,venue,host,date}) {
  return (
    <>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{eventName}</h5>
                <p className="card-text">{description} Held at <b>{venue}</b> by <b>{host}</b> on <b>{date}</b> </p>
                <a href="#content-footer" class="btn btn-primary">Want to Attend?</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default EventCard;