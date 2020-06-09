import imgPricing1 from "../../images/app/pricing/01.png";
import imgPricing2 from "../../images/app/pricing/02.png";
import imgPricing3 from "../../images/app/pricing/03.png";

const data = {
  pricings: [
    {
      thumb: imgPricing1,
      name: "Stealth Mode (6 mo)",
      price: "$90",
      description:
        "Still working on your idea? Or hacking a side project? 6 Months access to tweak your plan, before you even incorporate.",
      link: "#",
      btnText: "Get Package",
      services: [
        {
          content: "Push Notification.",
          className: "--on",
        },
        {
          content: "Startup Checklists.",
          className: "--on",
        },
        {
          content: "Automated Suggestions.",
          className: "--off",
        },
        {
          content: "Profitability Analytics.",
          className: "--off",
        },
        {
          content: "24/7 Support.",
          className: "--off",
        },
      ],
    },
    {
      thumb: imgPricing2,
      name: "Launch Mode (6 mo)",
      price: "$900",
      description:
        "You are go for launch. We help you through incorporation through your first sales. ",
      link: "#",
      btnText: "Get Package",
      services: [
        {
          content: "Push Notification.",
          className: "--on",
        },
        {
          content: "Offline Synchronization.",
          className: "--on",
        },
        {
          content: "SQL Database.",
          className: "--on",
        },
        {
          content: "Speech & Text Analytics.",
          className: "--on",
        },
        {
          content: "24/7 Support.",
          className: "--off",
        },
      ],
    },
    {
      thumb: imgPricing3,
      name: "Growth Mode (6 mo)",
      price: "$9000",
      description:
        "Your revenue and value are growing. For less than the salary of a personal assistant, you get a COO built for scaling, that doesn't sleep at night, so that you can.",
      link: "#",
      btnText: "Get Package",
      services: [
        {
          content: "Push Notification.",
          className: "--on",
        },
        {
          content: "Offline Synchronization.",
          className: "--on",
        },
        {
          content: "SQL Database.",
          className: "--on",
        },
        {
          content: "Speech & Text Analytics.",
          className: "--on",
        },
        {
          content: "24/7 Support.",
          className: "--on",
        },
      ],
    },
  ],
};
export default data;
