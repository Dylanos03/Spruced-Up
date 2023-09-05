import React, { useState } from "react";
import ImgCollection from "../../Content/ImageRow1";

function Portfolio() {
  const [imgSelected, setImgSelected] = useState(false);
  const [selected, setSelected] = useState("");

  const handleImgClick = (imgsrc) => {
    setImgSelected(!imgSelected);
    setSelected(require("../../Content/ImageRow1/" + imgsrc + ".jpeg"));
  };

  const handleImgExit = () => {
    setImgSelected(!imgSelected);
    setSelected("");
  };

  return (
    <div id="Portfolio" className=" py-4 flex flex-col gap-4 my-24 ">
      {imgSelected && (
        <div
          onClick={handleImgExit}
          className="fixed flex items-center justify-center top-0 left-0 z-100 w-full h-full bg-black bg-opacity-80"
        >
          <img
            src={selected}
            alt="large"
            className="scale-125"
            onClick={handleImgExit}
          />
        </div>
      )}
      <h2 className="text-2xl font-bold my-8 lg:text-4xl ">My Previous Work</h2>
      <div className="w-full max-w-7xl my-5 mx-auto gap-3 columns-2 md:columns-4 lg:columns-6 lg:gap-5 px-2">
        {ImgCollection.map((img, i) => (
          <div className="cursor-pointer w-full mb-3 lg:mb-5">
            <img
              src={require("../../Content/ImageRow1/" + img.src + ".jpeg")}
              alt={img.src}
              className="w-full"
              onClick={() => handleImgClick(img.src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
