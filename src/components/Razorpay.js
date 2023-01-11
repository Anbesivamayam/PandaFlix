import React, { useState } from "react";

const Razorpay = () => {
  const [amount, setamount] = useState(1);

  const pricingPlan = [
    {
      planName: "Basic Plan",
      price: 399,
      planList: [
        "Support Mobile only",
        "Maximum 1 Users",
        "Streaming Quality upto 720p",
        "Limited Regions",
        "No LiveStream",
        "Basic Support",
      ],
    },
    {
      planName: "Standard",
      price: 799,
      planList: [
        "Support Mobile and Laptop",
        "Maximum 4 Users",
        "Streaming Quality upto 1080p",
        "Major Regions",
        "LiveStream for 2 hours",
        "24/7 support",
      ],
    },
    {
      planName: "Premium",
      price: 999,
      planList: [
        "Support Mobile and Laptop",
        "Maximum 8 Users",
        "Streaming Quality upto 4K",
        "All Regions",
        "Unlimited Streaming",
        "24/7 support",
      ],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const amt = e.target.value;
    setamount(parseInt(amt));
    if (parseInt(amt) === "") {
      alert("Please select an subcategory to proceed");
    } else {
      let options = {
        key: "rzp_test_CfJ6wdMGjImGtK",
        key_secret: "GLS94Peo3QRUBOrCXKhRQv4D",
        amount: parseInt(amt) * 100,
        currency: "INR",
        name: "PANDAFLIX ",
        description:
          "By sending the amount you own a share or a mutual fund with the company. By order of the Peaky Blinders",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "PandaFlix PVt ltd.",
          email: "arun.dot007@gmail.com",
          contact: "8220822692",
        },
        notes: {
          address: "PandaFlix Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      let pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div className="dark:bg-[#0E0F11] bg-[#F7F7F7] h-full 4k:h-screen py-6 md:py-12 ">
      <section>
        <div className=" mx-auto px-6 md:px-4 w-full ">
          <section className="">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-medium text-black  dark:text-white mb-4 md:mb-6">
                PandaFlix Membership Plans
              </h1>
              <p className="text-gray-500 xl:mx-12">
                You have 3 plans to choose from our Movie Plans from our
                Membership plans
              </p>
            </div>
            <main className="px-6  grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">
              {pricingPlan.map((item, index) => {
                return (
                  <div key={index} className="mt-2 md:mt-12  ">
                    <div className="my-3 md:my-6 ">
                      <div
                        className="border-t-8 border-solid border-white bg-white text-center max-w-sm mx-auto
               hover:border-indigo-600 transition-colors duration-300"
                      >
                        <div className="p-4 md:py-8">
                          <h4 className="font-medium leading-tight text-xl md:text-2xl mb-2">
                            {item.planName}
                          </h4>
                          <p className="text-gray-600"></p>
                        </div>
                        <div className=" hover:bg-[#4c51bf] hover:text-white bg-indigo-100 p-6 transition-colors ease-linear duration-300">
                          <div className="">
                            <span className=" text-2xl md:text-4xl font-semibold">
                              &#8377; {item.price}
                            </span>
                            /year
                          </div>
                        </div>
                        <div className="p-6">
                          <ul className="px-7 leading-loose">
                            {item.planList.map((list, index) => {
                              return (
                                <li key={index} className="flex flex-col">
                                  {list}
                                </li>
                              );
                            })}
                          </ul>
                          <div className="mt-6 py-4">
                            <button
                              className="bg-indigo-600 text-md 4k:text-xl text-white py-2 px-6 rounded
                     hover:bg-indigo-700 transition-colors duration-500"
                              value={item.price}
                              onClick={handleSubmit}
                            >
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </main>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Razorpay;
  {/* <main>
        <h2 className="text-3xl">Razorpay Payment </h2>

        <div className="p-12 gap-4 flex flex-col justify-center items-center bg-slate-300 ">
          <label htmlFor="">Enter your amount for shareholder</label>
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </main> */}