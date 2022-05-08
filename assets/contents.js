import auctionitem4 from "../assets/auction-item-4.jpg"
import skelaton from"../assets/skelaton.png"
import anm from"../assets/anime.png"
import Samurai from"../assets/sam.png"
import foxman from"../assets/fox.png"
export const content = {
    header:{
        text1:"Virsys Marketplace",
        text2:"Discover, Collect & Sell NFT Digital Art",
        text3:"Here are many variations of passages of Lorem Ipsum available but the new majority have suffer alteration in by injected humour or randomised words. Lorem ipsum dolor sit amet consectetur adipiscing elits sed aliquam",
        img:[
            auctionitem4,
            Samurai,
            skelaton,
            anm,
            foxman,
        ]
    },
    auction:[
        {
            name: "Living in Circle",
            img: auctionitem4,
            bid: "2.03",
            creator: "Mobin",
            inStock:"12"
          },
          {
            name: "Panda Fighter",
            img: anm,
            bid: "7.97",
            creator: "David",
            inStock:"21"
          },
          {
            name: "Black swordsman",
            img: Samurai,
            bid: "8.03",
            creator: "Israk",
            inStock:"7"
          },
          {
            name: "Bahamut",
            img: skelaton,
            bid: "31,634",
            creator: "Shihab",
            inStock:"3"
          },
          {
            name: "Foxxey",
            img: foxman,
            bid: "31,634",
            creator: "Shihab",
            inStock:"3"
          },
    ],
    products:[
        {
            name: "Living in Circle",
            img: anm,
            bid: "2.03",
            creator: "Mobin",
            inStock:"12"
          },
          {
            name: "Living in Circle",
            img: auctionitem4,
            bid: "2.03",
            creator: "Mobin",
            inStock:"12"
          },
          {
            name: "Foxxey",
            img: foxman,
            bid: "2.03",
            creator: "Shihab",
            inStock:"12"
          },
          {
            name: "Living in Circle",
            img: Samurai,
            bid: "2.03",
            creator: "Mobin",
            inStock:"12"
          },
          {
            name: "Living in Circle",
            img: auctionitem4,
            bid: "2.03",
            creator: "Mobin",
            inStock:"12"
          },
    ],
    sellers:[
        {
            name:"Mobin",
            eth:"120",
            img:auctionitem4

        },
        {
            name:"Shihab",
            eth:"120",
            img:auctionitem4

        },
        {
            name:"Mobin",
            eth:"120",
            img:auctionitem4

        },
        {
            name:"Shihab",
            eth:"120",
            img:auctionitem4

        },
        {
            name:"Mobin",
            eth:"120",
            img:auctionitem4

        },
        {
            name:"Shihab",
            eth:"120",
            img:auctionitem4

        },
        {
            name:"Mobin",
            eth:"120",
            img:auctionitem4

        },
        {
            name:"Shihab",
            eth:"120",
            img:auctionitem4

        },

    ],
    footer:[
      {
      name:"Company",
      items:["About Us",'Contact Us',"Latest News","Terms & Conditions"]

    },
    {
      name:"Resources",
      items:["Help & Support",'Live Auction',"Item Details","Activity"]

    },
    {
      name:"Marketplace",
      items:["Art",'All NFTs',"Music","Virtual World"]

    },
  ]

}