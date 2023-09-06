import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faSterlingSign,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div id="About" className="flex justify-center my-4 lg:my-24">
      <div className="flex  flex-col lg:flex-row  rounded-t-lg max-w-6xl lg:items-center gap-4">
        <div
          className=" px-4 lg:w-2/3 text-center lg:text-left
        "
        >
          <h2 className="text-2xl lg:text-4xl py-4 font-semibold">About Me</h2>
          <p className="text-md lg:text-lg">
            I’ve always had an interest in interior design and love sprucing up
            the rooms in our house. <br />
            <br /> A change in circumstances gave me the opportunity to have a
            go at up-cycling my own furniture and bring it back to life. <br />
            <br />
            Before, it was all too easy to sell it, or bin it, because it no
            longer matched the room or colours. I started with a couple of
            smaller items, an old coffee table and side table. <br /> <br /> I
            was pleased with the results, so I decided to take myself to the
            auction and plucked up the courage to bid on a couple of bits.{" "}
            <br /> <br /> And there my new venture began and I haven’t looked
            back!
          </p>
        </div>
        <div className=" px-4 lg:w-1/2">
          <div className="py-8">
            <h2 className="text-2xl lg:text-4xl py-4 font-semibold">
              What I do
            </h2>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
            <div className="py-4">
              <FontAwesomeIcon
                icon={faSterlingSign}
                color="#164712"
                className=" h-16 w-16 pb-4"
              />
              <h3 className="text-xl font-semibold">Sell</h3>
              <p className="text-md">
                I'm selling some spruced up furniture, have a look on my{" "}
                <a
                  className="underline"
                  href="https://www.instagram.com/spruced_up_stuff/?hl=en"
                >
                  facebook
                </a>{" "}
                and see what I'm offering!
              </p>
            </div>
            <div className="py-4">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                color="#164712"
                className=" h-16 w-16 pb-4"
              />
              <h3 className="text-xl font-semibold">Buy</h3>
              <p className="text-md">
                Got some old furniture you don’t need? I can take that off your
                hand if I see potential...
              </p>
            </div>
            <div className="py-4">
              <FontAwesomeIcon
                icon={faPaintBrush}
                color="#164712"
                className=" h-16 w-16 pb-4"
              />
              <h3 className="text-xl font-semibold">Refurb</h3>
              <p className="text-md">
                Got some furniture that needs a bit of TLC? Book a consultation
                today and I can give you a price!
              </p>
            </div>
            <div className="py-4">
              <div className="pb-2">
                <h3 className="text-xl font-semibold">Follow me on socials!</h3>
              </div>
              <div className="flex justify-center gap-2 items-center py-2 cursor-pointer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="#164712"
                  className="h-8 w-8 cursor-pointer"
                  href="https://www.instagram.com/spruced_up_stuff/?hl=en"
                />
                <a
                  href="https://www.instagram.com/spruced_up_stuff/?hl=en"
                  target="_blank"
                >
                  @spruced_up_stuff
                </a>
              </div>
              <div className="flex justify-center gap-2 items-center py-2 cursor-pointer">
                <FontAwesomeIcon
                  icon={faFacebook}
                  color="#164712"
                  className="h-8 w-8 cursor-pointer"
                  href="https://www.facebook.com/SprucedUpStuff"
                />
                <p>
                  <a
                    href="https://www.facebook.com/SprucedUpStuff"
                    target="_blank"
                  >
                    sprucedupstuff
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
