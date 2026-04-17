import m1 from "./g6.jpg";
import m2 from "./g7.jpg";
import m3 from "./g13.jpg";
import m4 from "./g14.jpg";
import m5 from "./g18.jpg";
import m6 from "./g19.jpg";
import m7 from "./g20.jpg";
import m8 from "./g21.jpg"
import m9 from  "./g22.jpg"
import m10 from "./g23.jpg"
import m11 from "./g24.jpg"
import m12 from "./g25.jpg"
import m13 from "./g26.jpg";
import m14 from "./g27.jpg";
import m15 from "./g28.jpg";
import m16 from "./g29.jpg";
import m17 from "./g30.jpg";
import m18 from "./g31.jpg";
import m19 from "./g32.jpg";
import m20 from "./g33.jpg"
import m21 from "./g1.jpg"
import g22 from './g2.jpg'
import g23 from './g4.jpg'
import g24 from './g3.jpg'
import n25 from "./g8_with_bgc.png";
import n26 from "./g9.jpg";
import n27 from "./g10.jpg";
import n28 from "./g11.jpg";
import n29 from "./g12.jpg";
import n30 from "./g16.jpg";
import n31 from "./g15.jpg";
import n32 from "./g17.jpg";
import n33 from "./g34.jpg";
import n34 from "./g35.jpg";
import n35 from "./g36.jpg";
import n36 from "./g37.jpg";

let all_product = [
  {
    id: 1,
    name: "Paul Red Smith SE Electric Guitar Custoom 24",
    category: "goods",
    image: m1,
    new_price: 1200,
    old_price: 1500,
  },
  {
    id: 2,
    name: "Gibson Firebird Dark Green and Gold",
    category: "goods",
    image: m2,
    new_price: 5800,
    old_price: 6000,
  },
  {
    id: 3,
    name: "gibson less paul black relic style finish",
    category: "goods",
    image: m3,
    new_price: 6000,
    old_price: 6500,
  },
  {
    id: 4,
    name: "jackson purple relic style finish 7 string guitar",
    category: "goods",
    image: m4,
    new_price: 2500,
    old_price: 3000,
  },
  {
    id: 5,
    name: "blue gibson sg standard 61 custom color",
    category: "goods",
    image: m5,
    new_price: 1999,
    old_price: 2500,
  },
  {
    id: 6,
    name: "dark red gibosn sg standard",
    category: "goods",
    image: m6,
    new_price: 1799,
    old_price: 2000,
  },
  {
    id: 7,
    name: "gibson less paul goldtop finish",
    category: "goods",
    image: m7,
    new_price: 5000,
    old_price: 5500,
  },
  {
    id: 8,
    name: "black gibson sg special",
    category: "goods",
    image: m8,
    new_price: 1599,
    old_price: 2000,
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "goods",
    image: m9,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "goods",
    image: m10,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "goods",
    image: m11,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "goods",
    image: m12,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m13,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m14,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m15,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m16,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m17,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m18,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m19,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: m20,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "Gibson Marcus King ES-345, Sixties Olive",
    category: "goods",
    image: m21,
    new_price: 3999,
    old_price: 4500,
  },
  {
    id: 22,
    name: "Gibson Custom Les Paul Axcess Standard Figured Floyd Rose Gloss  Cobra Burst",
    category: "goods",
    image: g22,
    new_price: 5499,
    old_price: 6000,
  },
  {
    id: 23,
    name: "Jackson JS22 7 Dinky Electric Guitar, Red Burst",
    category: "goods",
    image: g23,
    new_price: 6000,
    old_price: 7499,
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "goods",
    image: g24,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
     id: 25,
     name: "PRS Mark Tremonti Signature Guitar black edition",
     category: "goods",
     image: n25,
     new_price: 6000,
     old_price: 7000,
   },
   {
     id: 26,
     name: "Gibson Les Paul Style  8 String Elctric Guitar , cheery red",
     category: "goods",
     image: n26,
     new_price:5000,
     old_price: 6500,
   },
   {
     id: 27,
     name: "Avinator Cutom Elctric Guitar , black metal edition ",
     category: "goods",
     image: n27,
     new_price: 4090,
     old_price: 4900,
   },
   {
     id: 28,
     name: "Ibanez Prestige RG5210M, Mint Blue",
     category: "goods",
     image: n28,
     new_price: 2599,
     old_price: 3334,
   },
   {
     id: 29,
     name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
     category: "goods",
     image: n29,
     new_price: 50.0,
     old_price: 80.5,
   },
   {
     id: 30,
     name: "Gibson Les Paul (Purple Quilted Top)",
     category: "goods",
     image: n30,
     new_price: 5000,
     old_price: 6000,
   },
   {
     id: 31,
     name: "fender American Professsional II Telecaster in Dark Knight",
     category: "goods",
     image: n31,
     new_price: 2099,
     old_price: 2500,
   },
   {
     id: 32,
     name: "Gibson Ls Paaul Customs Pro Purple Edge Burst",
     category: "goods",
     image: n32,
      new_price: 4350,
     old_price: 5000,
   },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "goods",
    image: n33,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "goods",
    image: n34,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "goods",
    image: n35,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "goods",
    image: n36,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
