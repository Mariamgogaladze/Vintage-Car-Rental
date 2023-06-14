
interface Testimonial {
    key: number;
    name: string;
    text: string;
    image: any; 
    location: string;
  }
const TestimonialsData : Testimonial[] = [
    {
       key:1,
       name:"Jean-Luc Dupont",
       text:" 'We embarked on a nostalgic journey by renting a classic vintage car from this extraordinary website, and it was an experience like no other! The process of reserving our dream car was as effortless as stepping back in time, and the rental rates were incredibly pocket-friendly'",
       image: require('./../../images/client1.jpeg'),
       location:"Paris",
    },
    {
        key:2,
        name:"Camille Moreau",
        text:" 'We immersed ourselves in the timeless allure of the vintage era and created memories that will last a lifetime. If you're longing for an enchanting adventure, look no further. This website will transport you to a bygone era, where elegance and charm reign supreme '",
        image: require('./../../images/client2.jpeg'),
        location:"Paris"
     }
]
export default TestimonialsData;