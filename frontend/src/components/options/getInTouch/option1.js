import React from "react";

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

  return (
    <section
      className="w-full h-screen"
      id="awards"
      style={{ fontFamily: "Poppins" }}
    >
      <div
        className="w-full h-full px-4 md:px-32 pt-28"
        style={{ color: "rgba(255, 247, 233, 1)" }}
      >
        <div className="h-1/4 text-4xl font-bold md:pl-24">Get in touch!</div>
        <div className="flex flex-col md:flex-row gap-4 h-3/4 py-10 md:px-24 md:py-16">
          <div className="flex flex-col gap-y-2 h-full md:h-1/2 justify-center items-start">
            <p className="text-start text-sm font-medium capitalize tracking-wide flex items-center border p-2 rounded-md" style={{ fontFamily: "Manrope"}}>
                <span className="material-symbols-outlined text-sm md:text-lg mr-1">location_on</span>
                <span>{Address}</span>
            </p>
              <div>+91 {Phone}</div>
              <a className="hover:opacity-80" id="mailId" target="_blank" href={`mailto:${Email}`}>
                {Email}
              </a>
          </div>

          <div className="md:w-1/2 flex h-1/2 md:h-full justify-between md:justify-center items-end">
            {Object.keys(Socials).some((soc) => Socials[soc].length > 0) ? (
              <div>
                {Object.keys(Socials)
                  .filter((soc) => Socials[soc].length > 0)
                  .map((soc) => (
                    <a
                      key={soc}
                      className="mx-2"
                      target="_blank"
                      href={`${Meta[soc][1]}${Socials[soc]}`}
                    >
                      <i className={`fab fa-${Meta[soc][0]} text-3xl`}></i>
                    </a>
                  ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Option1;