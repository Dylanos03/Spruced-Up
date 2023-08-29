import React from "react";
import TestimonialBox from "./TestimonialBox/TestimonialBox";

function Testimonials() {
  const TestimonialsDetails = [
    {
      name: "Hannah",
      text: "Great affordable price, got back to me within two weeks and looks great in our living room",
      rating: 5,
    },
    {
      name: "Christina",
      text: "Spruced Up Stuff transformed some well made but dated pine furniture for us, and they look great! Very pleased with the work and the service.",
      rating: 5,
    },
    {
      name: "Will",
      text: "Brought some bar stools and table recently, very friendly & professional service, a superb quality final finished product done to specification requested. Definitely recommend this business to anyone looking for a great deal of revamped furniture. It’s 5 star rating from me. Thanks Angela, I will be back to see you for more spruced up stuff very soon.",
      rating: 5,
    },
    {
      name: "Sam",
      text: "Really happy with the sprucing up of my units from a dark grey to a lovely cream. Fantastic end result! Will definitely be using again",
      rating: 5,
    },
    {
      name: "Sindy",
      text: "I am so thrilled with my beautiful table and chairs that I have commissioned Angela to Spruce up my Sideboard to match. Excellent service will use again and again",
      rating: 5,
    },
  ];

  return (
    <div id="Testimonials" className="flex justify-center">
      <div className="max-w-6xl">
        <div>
          <h3 className="text-2xl lg:text-4xl font-semibold text-ForestGreen-700">
            Testimonials
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center my-8 gap-4">
          {TestimonialsDetails.map((value, index) => (
            <TestimonialBox
              key={index}
              name={value.name}
              reviewText={value.text}
              rating={value.rating}
            />
          ))}
        </div>
        <a
          href="https://www.google.com/search?q=spruced+up+stuff&rlz=1C5CHFA_enGB1020GB1020&oq=spruced+up+stuff&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgnGK8BGMcBGIoFMgYIAhBFGDsyCAgDEAAYFhgeMggIBBAAGBYYHjIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDM0MjRqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x47d82b0f3102d659:0x282c8d74c9f942f9,3,,,,"
          className="underline"
        >
          Leave a review
        </a>
      </div>
    </div>
  );
}

export default Testimonials;
