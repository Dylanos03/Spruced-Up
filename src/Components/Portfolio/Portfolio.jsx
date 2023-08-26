import React from "react";
import ImgRow1 from "../../Content/ImageRow1";
import ImgRow2 from "../../Content/ImageRow2";
import ImgRow3 from "../../Content/ImageRow3";

function Portfolio() {
  return (
    <div className=" py-4 flex flex-col gap-4 my-24">
      <h2 className="text-2xl font-bold my-8 lg:text-4xl">My Previous Work</h2>
      <div
        className=" relative
        overflow-hidden w-max flex"
      >
        <div className=" flex whitespace-nowrap  animate-sliding-left">
          {ImgRow1.map((item, index) => (
            <img
              className=" px-2 h-72 "
              key={index}
              src={require("../../Content/ImageRow1/" + item.src + ".jpeg")}
            />
          ))}
        </div>
        <div className="flex whitespace-nowrap  animate-sliding-left">
          {ImgRow1.map((item, index) => (
            <img
              className=" px-2 h-72 "
              key={index}
              src={require("../../Content/ImageRow1/" + item.src + ".jpeg")}
            />
          ))}
        </div>
      </div>
      <div
        className=" relative
        overflow-hidden w-max flex"
      >
        <div className=" flex whitespace-nowrap  animate-sliding-left">
          {ImgRow2.map((item, index) => (
            <img
              className=" px-2 h-72 "
              key={index}
              src={require("../../Content/ImageRow2/" + item.src + ".jpeg")}
            />
          ))}
        </div>
        <div className="flex whitespace-nowrap  animate-sliding-left">
          {ImgRow2.map((item, index) => (
            <img
              className=" px-2 h-72 "
              key={index}
              src={require("../../Content/ImageRow2/" + item.src + ".jpeg")}
            />
          ))}
        </div>
      </div>
      <div
        className=" relative
        overflow-hidden w-max flex"
      >
        <div className=" flex whitespace-nowrap  animate-sliding-left">
          {ImgRow3.map((item, index) => (
            <img
              className=" px-2 h-72 "
              key={index}
              src={require("../../Content/ImageRow3/" + item.src + ".jpeg")}
            />
          ))}
        </div>
        <div className="flex whitespace-nowrap  animate-sliding-left">
          {ImgRow3.map((item, index) => (
            <img
              className=" px-2 h-72 "
              key={index}
              src={require("../../Content/ImageRow3/" + item.src + ".jpeg")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
