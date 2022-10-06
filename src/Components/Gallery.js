import React, { useEffect, useState } from 'react';
import ArtCard from './ArtCard';



function Gallery() {
  const [artObj ,setArtObj] =useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/artPieces")
      .then((r) => r.json())
      .then((dataObj) => setArtObj(dataObj))
  },[setArtObj])

  const artCard = artObj.map((aObj)=>(
    <ArtCard artObj={artObj} setArtObj={setArtObj} key={aObj.id} artName={aObj.artName} artDesc={aObj.artDesc} artImg={aObj.artImg} artist={aObj.artist} postDate={aObj.postDate}  />
  ))

  return (
    <section id = "gallery">

            <div className="container">

                <div className="info">

                    <h2>Here are some  featured Works This Week</h2>

                    <div className="card-group">
                      
                      {artCard}

                    </div>

                </div>                
    
            </div>

        </section>
  );
}

export default Gallery;