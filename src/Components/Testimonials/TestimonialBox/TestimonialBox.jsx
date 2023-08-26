import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function TestimonialBox(props) {
  return (
    <div className="bg-ForestGreen-100 w-80 text-ForestGreen-900 bg-opacity-25 text-left p-4 rounded-lg flex flex-col gap-2 drop-shadow-xl">
      <div>{Array(props.rating).fill(<FontAwesomeIcon icon={faStar} />)}</div>
      <p className="text-sm">{props.reviewText}</p>
      <p className="text-right">from {props.name}</p>
    </div>
  );
}

export default TestimonialBox;
