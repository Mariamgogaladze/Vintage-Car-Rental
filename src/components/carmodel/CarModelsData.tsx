interface CarModel {
    key: number;
    image: string;
    price: string;
    model: string;
    year: string;
    doors: string;
    fuel: string;
    AC: string;
    transmission: string;
  }
  

const CarModelsData : CarModel[]  = [
    {   key:1,
        image: require("./../../images/Chevrolet Bel Aired.jpeg"),
        price: "120$" ,
        model:"Chevrolet Camaro",
        year:" 1970",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Manual" ,
    },
    {   key:2,
        image: require("./../../images/Ford Thunderbird34r2.jpeg"),
        price: "200$" ,
        model:"Ford Thunderbird",
        year:" 1965",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Autometic" ,
    },
    {   key:3,
        image: require("./../../images/ford-mustang.jpeg"),
        price: "250$" ,
        model:"Ford Mustang blue",
        year:"1967",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Manual" ,
    },
    {   key:4,
        image: require("./../../images/ford-mustang3.jpeg"),
        price: "250$" ,
        model:"Ford Mustang",
        year:"1967",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Manual" ,
    },
    {   key:5,
        image: require("./../../images/Jaguar E-Type5.jpeg"),
        price: "350$" ,
        model:"Jaguar E-Type",
        year:"1964",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Manual" ,
    },
    {   key:6,
        image: require("./../../images/Lamborghini Miura.jpeg"),
        price: "800$" ,
        model:"Lamborghini Miura",
        year:"1967",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Manual" ,
    },
    {   key:7,
        image: require("./../../images/VolkswagenBeetle1.jpeg"),
        price: "50$" ,
        model:"Volkswagen Beetle Green",
        year:"1972",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Manual" ,
    },
    {   key:8,
        image: require("./../../images/Volkswagen Beetle2.jpeg"),
        price: "50$" ,
        model:"Volkswagen Beetle",
        year:"1972",
        doors: "2" ,
        fuel: "Gasoline" ,
        AC : "NO",
        transmission: "Manual" ,
    },
]

export default CarModelsData;