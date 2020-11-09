import React from "react";

const OneCard = props => {
  //console.log(props.url);
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <a
          href={"http://" + props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Go to {props.name}
        </a>
      </div>
    </div>
  );
};

export default OneCard;
