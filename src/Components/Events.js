import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';

function Events() {
  const[eventsObj,setEventsObj] =useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then((r) => r.json())
      .then((dataObj) => setEventsObj(dataObj))
  },[setEventsObj])

  const eventCards = eventsObj.map((eventObj) => (      
      <EventCard  eventsObj = {eventsObj} setEventsObj ={setEventsObj} key ={eventObj.id} eventName ={eventObj.eventName} description={eventObj.description} venue={eventObj.venue} host ={eventObj.host} date={eventObj.date} />
  ))

  return (
    <section id = "events">
      <div className="container">
        <div className="info">
          <h2>Here are some up and coming events</h2>
            {eventCards}  
        </div>    
      </div>
    </section>
  );
}

export default Events;