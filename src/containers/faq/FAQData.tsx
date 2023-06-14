interface FAQTYPE {
    answer: string;
    question: string;
    key: number;
  }
  
const FAQData : FAQTYPE[] =[
    {
        key:1,
        question:"What sets rental car deals apart from the rest?",
        answer :"Rental car deals possess a distinctive charm, captivating discerning individuals with their timeless appeal and intelligent offerings. They transcend ordinary transactions, offering an exquisite blend of affordability, convenience, and sophistication. These exclusive deals enable adventurers to embark on extraordinary journeys, navigating the roads of exploration with elegance and grace. With a touch of classic allure, rental car deals provide an avenue to create treasured memories, weaving together the tapestry of travel in a way that is truly unforgettable",
    },
    {
        key:2,
        question:" How do I find such low rental car prices?",
        answer :"Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
    {
        key:3,
        question:"How do I find the car rental deals?",
        answer :"You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    }
]

export default FAQData;