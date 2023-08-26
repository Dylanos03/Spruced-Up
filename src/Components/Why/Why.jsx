import React from "react";
import WhyImg from "../../Content/Dresser001.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faCertificate,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

function Why() {
  return (
    <div className="flex justify-center my-24">
      <div className="flex flex-col lg:flex-row max-w-6xl lg:items-center">
        <div className="p-4 lg:w-1/2">
          <img src={WhyImg} alt="Dresser" className="rounded-2xl" />
        </div>
        <div className="flex flex-col p-4 lg:w-1/2 text-left">
          <div>
            <h2 className="text-xl font-semibold text-center lg:text-left lg:text-3xl">
              Why buy refurbished?
            </h2>
          </div>
          <div className="my-6">
            <div className="flex justify-start gap-4 items-center my-2">
              <FontAwesomeIcon
                icon={faLeaf}
                style={{ color: "#0C2B0A" }}
                className="h-8"
              />
              <h3 className="text-lg font-medium">Sustainable</h3>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              porro quo ut sint perspiciatis illum, praesentium odit laborum
              voluptatibus dolorem laudantium debitis repellat reiciendis est
              esse? Placeat amet soluta corporis.
            </p>
          </div>
          <div className="my-6">
            <div className="flex lg:justify-start  gap-4 items-center my-2">
              <FontAwesomeIcon
                icon={faCertificate}
                style={{ color: "#0C2B0A" }}
                className="h-8"
              />
              <h3 className="text-lg font-medium">Unique</h3>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              porro quo ut sint perspiciatis illum, praesentium odit laborum
              voluptatibus dolorem laudantium debitis repellat reiciendis est
              esse? Placeat amet soluta corporis.
            </p>
          </div>
          <div className="my-6">
            <div className="flex lg:justify-start  gap-4 items-center my-2">
              <FontAwesomeIcon
                icon={faPalette}
                style={{ color: "#0C2B0A" }}
                className="h-8"
              />
              <h3 className="text-lg font-medium">Personalisable</h3>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              porro quo ut sint perspiciatis illum, praesentium odit laborum
              voluptatibus dolorem laudantium debitis repellat reiciendis est
              esse? Placeat amet soluta corporis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
