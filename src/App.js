import React from "react";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
function App() {

  const productCategories = [
    {
      title:'MUSIC',
      productList:[
        {
          title:'1',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:'$12.24',
        },
        {
          title:'1',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:'$12.24',
        },
        {
          title:'1',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:'$12.24',
        },
        {
          title:'1',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:'$12.24',
        }
      ],
    },
    {
      title:'Merch',
      productList:[
        {
          title:'1',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:'$12.24',
        },
        {
          title:'1',
          img:'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          description:'Good Product',
          price:'$12.24',
        },
      ],
    }
  ];

  return (
    <React.Fragment>
      <Header></Header>
      <Main productCategories={productCategories}></Main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
