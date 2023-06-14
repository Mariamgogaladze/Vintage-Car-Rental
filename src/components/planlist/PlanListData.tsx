interface Plan {
  image: any; 
  title: string;
  text: string;
  key: any;
}

const PlanData: Plan[] = [
  {
    key: 1,
    title: "Select Car",
    text: "Unlock a World of Vintage Cars. Explore our Extensive Collection Tailored to Meet Your Driving Desires.",
    image: require("./../../images/vector2.png"), 
  },
  {
    key: 2,
    title: "Contact Operator",
    text: "Connect with Our Vintage Car Experts. Experience Exceptional Service and Expert Guidance.",
    image: require("./../../images/contact.webp"), 
  },
  {
    key: 3,
    title: "Let's Drive",
    text: "Let's Drive in Style. Explore the Open Road with Our Exquisite Fleet.",
    image: require("./../../images/vector3.png"), 
  },
];

export default PlanData;
