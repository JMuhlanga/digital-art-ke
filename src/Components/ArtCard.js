import React from "react";

function ArtCard({artName,artDesc,artImg,artist,postDate}) {
  return (
    <>
        <div className="card">
            <img className="card-img-top" src={artImg} alt="Card image cap" />
            <div className="card-body">
            <h5 className="card-title">{artName}</h5>
            <p className="card-text">{artDesc}</p>
            </div>
            <div className="card-footer">
            <small className="text-muted">Posted by <b>{artist}</b> on <b>{postDate}</b> </small>
            </div>
        </div>
    </>
  );
}

export default ArtCard;