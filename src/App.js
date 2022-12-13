import React from "react";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import CartContextProvider from "./store/CartContextProvider.js";
function App() {

  const productCategories = [
    {
      title:'MUSIC',
      id:'1',
      productList:[
        {
          title:'1',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:12.24,
          key:'11',
        },
        {
          title:'2',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:12.24,
          key:'12',
        },
        {
          title:'3',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:12.24,
          key:'13',
        },
        {
          title:'4',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:12.24,
          key:'14',
        }
      ],
    },
    {
      title:'Merch',
      id:'2',
      productList:[
        {
          title:'5',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:12.24,
          key:'15',
        },
        {
          title:'6',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:12.24,
          key:'16',
        },
      ],
    }
  ];

  return (
    <React.Fragment>
    <CartContextProvider>
      <Header></Header>
      <Main productCategories={productCategories}></Main>
      <Footer></Footer>
    </CartContextProvider>
    </React.Fragment>
  );
}

export default App;
