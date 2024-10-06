import React, { useState } from "react";

const Option1 = (props) => {
  const { Address, Phone, Email, Socials } = props;

  const Meta = {
    Facebook: ["facebook-f", "https://fb.me/"],
    WhatsApp: ["whatsapp", "https://wa.me/"],
    Instagram: ["instagram", "https://instagr.am/"],
    Twitter: ["twitter", "https://twitter.com/"],
    LinkedIn: ["linkedin-in", "https://linkedin.com/in/"],
    GitHub: ["github", "https://github.com/"],
    StackOverflow: ["stack-overflow", "https://stackoverflow.com/u/"],
  };

  const [feedback, setFeedback] = useState({
    email: "",
    header: "",
    body: "",
  });

  const detectChanges = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const sendFeedback = async (email, recieverEmail, header, body) => {

    console.log(232)

    const response = await fetch("https://api.restful-api.dev/objects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, recieverEmail, header, body }),
    });

    alert(response.status);
    console.log(response);
    return response.status;
  };

  const submit = async (event) => {
    event.preventDefault();

    const recieverEmail = document.getElementById('mailId').textContent;

    const status = await sendFeedback(feedback.email, recieverEmail, feedback.header, feedback.body);

    if (status === 200) {
      alert("Feedback sent successfully");
    } else {
      alert("Failed to send feedback");
    }
  };

  return (
    <section className="w-full h-screen" id="awards" style={{ fontFamily: "Poppins" }}>
      <div className="w-full h-full px-4 md:px-32 pt-24 md:pt-28" style={{ color: "rgba(255, 247, 233, 1)" }}>
        <div className="h-24 md:h-40 text-4xl font-bold md:pl-24">Get in touch!</div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 h-auto pb-2 md:px-24 md:pb-6 w-full items-center justify-center">
          <div className="border p-3 rounded-md w-4/5 md:w-1/2 h-2/3 md:h-full">
            <form onSubmit={submit} className="space-y-2 md:space-y-6 pt-2 md:pt-4">
              <div className="mb-2">
                <label htmlFor="email" className="mb-2 md:mb-3 text-sm flex font-medium text-white-300">
                  <div>Your Email</div>
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-md bg-gray-50 border border-gray-300 text-white text-sm rounded-lg block w-full p-2 md:p-3 placeholder-white bg-transparent"
                  name="email"
                  value={feedback.email}
                  autoFocus
                  onChange={detectChanges}
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="header" className="mb-2 md:mb-3 text-sm font-medium flex text-white-300">
                  <div>Subject</div>
                </label>
                <input
                  type="text"
                  id="header"
                  className="shadow-md bg-gray-50 border border-gray-300 text-white text-sm rounded-lg block w-full p-2 md:p-3 placeholder-white bg-transparent"
                  name="header"
                  value={feedback.header}
                  onChange={detectChanges}
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2 mb-2">
                <label htmlFor="body" className="mb-2 md:mb-3 text-sm font-medium flex text-white-300">
                  <div>Your Message</div>
                </label>
                <textarea
                  id="body"
                  rows="4"
                  className="shadow-md bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2 md:p-3 placeholder-white dark:border-white bg-transparent"
                  name="body"
                  value={feedback.body}
                  onChange={detectChanges}
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-2 px-3 text-md font-medium text-center text-black rounded-lg sm:w-fit dark:bg-primary-600 dark:hover:bg-primary-700"
                style={{ "backgroundColor" : "rgba(255, 252, 218, 1)" }}
              >
                Send message
              </button>
            </form>
          </div>

          <div className="flex flex-col h-1/2 md:h-full w-full gap-y-4 px-0 md:px-16 pt-8 md:pt-0 items-center justify-end md:justify-center">
            <div className="flex flex-col gap-y-2 h-full md:h-1/2 justify-center items-start">
            <p className="text-start text-sm font-medium capitalize tracking-wide flex items-center" style={{ fontFamily: "Manrope", color: "rgba(57, 57, 57, 1)" }}>
                <span className="material-symbols-outlined text-sm md:text-lg mr-1">location_on</span>
                <span>{Address}</span>
            </p>
              <div>+91 {Phone}</div>
              <a className="hover:opacity-80" id="mailId" href={`mailto:${Email}`}>
                {Email}
              </a>
            </div>

            <div className="flex h-1/2 md:h-full justify-between md:justify-center items-end">
              {Object.keys(Socials).some((soc) => Socials[soc].length > 0) ? (
                <div>
                  {Object.keys(Socials)
                    .filter((soc) => Socials[soc].length > 0)
                    .map((soc) => (
                      <a key={soc} className="mx-2 hover:text-white" href={`${Meta[soc][1]}${Socials[soc]}`}>
                        <i className={`fab fa-${Meta[soc][0]} text-3xl md:text-4xl`}></i>
                      </a>
                    ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option1;