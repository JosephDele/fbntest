import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const data = [
  {
    heading: "CATEGORIES",
    items: ["Loan", "Insurance", "Ways To Bank", "Family"],
  },
  {
    heading: "BANKING",
    items: [
      "Corporate Information",
      "Personal Banking",
      "Business Banking",
      "Private Banking",
      "Loan Calculator",
      "Vendor Portal",
      "Download Forms",
    ],
  },
  {
    heading: "SECURITY",
    items: ["BVN", "Anti-Fraud", "Security Tips", "Secure Code"],
  },
  {
    heading: "CONTACT US",
    items: [
      "Feedback and Complaints",
      "Whistleblowing",
      "Find a Branch",
      "Contact Form",
      "Find an Agent",
      "Agent Network",
    ],
  },
  {
    heading: "LEGAL",
    items: ["Terms of use", "Privacy Policy", "Cookies Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primaryBlue py-8">
      <div className="flex max-w-maxWidth px-4 gap-4 lg:px-0 sm:flex-row flex-col mx-auto justify-between ">
        <img src="/logobare.png" className="w-fit h-[70px]" alt="logo" />
        <div className="flex gap-4">
          <span className="inline-flex bg-[#002f51] h-fit p-2 rounded-full ">
            <FaFacebookF size={20} color="white" />
          </span>
          <span className="inline-flex bg-[#002f51] h-fit p-2 rounded-full ">
            <FaTwitter size={20} color="white" />
          </span>
          <span className="inline-flex bg-[#002f51] h-fit p-2 rounded-full ">
            <FaInstagram size={20} color="white" />
          </span>
          <span className="inline-flex bg-[#002f51] h-fit p-2 rounded-full ">
            <FaYoutube size={20} color="white" />
          </span>
          <span className="inline-flex bg-[#002f51] h-fit p-2 rounded-full ">
            <FaLinkedinIn size={20} color="white" />
          </span>
        </div>
      </div>

      <div className="max-w-maxWidth mx-auto flex flex-wrap gap-10 px-4 lg:px-0 justify-between text-white my-10 py-10 border-y-2 border-primaryYellow">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            <h2>{item.heading}</h2>
            <div className="flex flex-col gap-2">
              {item.items.map((item, index) => (
                <p
                  className="text-[#9fb1c2] cursor-pointer text-sm lg:text-base"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-maxWidth mx-auto flex lg:flex-row flex-col gap-4 px-4 lg:px-0 lg:items-center justify-between">
        <p className="text-xs lg:text-sm text-[#9fb1c2]">
          &copy; 2022. First Bank of Nigeria Ltd. An FBNHoldings Company.
        </p>
        <button
          className="text-sm text-white"
          onClick={() => window.scroll(0, 0)}
        >
          Back To Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
