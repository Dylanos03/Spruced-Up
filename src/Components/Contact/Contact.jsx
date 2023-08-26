import React from "react";

function Contact() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full my-24 px-4">
        <div className=" flex flex-col gap-6 w-full">
          <h3 className=" text-3xl font-bold">Contact</h3>
          <form action="Contact" className="flex flex-col gap-2 w-full">
            <input
              className="w-full placeholder:text-ForestGreen-700 bg-ForestGreen-100 bg-opacity-50 text-ForestGreen-700 rounded-md p-2"
              type="text"
              name="name"
              id="nameBox"
              placeholder="Name"
            />
            <input
              className="w-full placeholder:text-ForestGreen-700 bg-ForestGreen-100 bg-opacity-50 text-ForestGreen-700 rounded-md p-2"
              type="email"
              name="email"
              id="emailBox"
              placeholder="Email"
            />
            <select
              className="w-full placeholder:text-ForestGreen-700 bg-ForestGreen-100 bg-opacity-50 text-ForestGreen-700 rounded-md p-2"
              name="Service"
              id="Service"
            >
              <option value="buying">Buy</option>
              <option value="selling">Sell</option>
              <option value="refurb">Refurb</option>
              <option value="other">Other</option>
            </select>
            <textarea
              className="w-full placeholder:text-ForestGreen-700 bg-ForestGreen-100 bg-opacity-50 text-ForestGreen-700 rounded-md p-2 "
              type="text"
              name="Message"
              id="MessageBox"
              placeholder="Message"
              rows={10}
            />
            <button className="w-full bg-ForestGreen-500 text-white p-4 rounded-md cursor-pointer">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
