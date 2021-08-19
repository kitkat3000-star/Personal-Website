import styled from "styled-components";
import website from "../assets/website.png";
import app from "../assets/app.png";
import travelous from "../assets/travelous.png";
import basic from "../assets/basic.png";
import extra from "../assets/extra.png";
import blog from "../assets/blog.png";

const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover{
    color: pink;
  }
`;

export const featuredPortfolio = [
    {
      id: 1,
      title:  <Link href="https://drive.google.com/file/d/1JieDY8tocMiBcddIjp08xWHKOUS0sfk7/view?usp=sharing">Personal sample websites</Link>,
      img: website,

    },
    {
      id: 2,
      title: <Link href="https://drive.google.com/file/d/1A_oG9-FMqaH7AN5RdVpQn94y6incWvSD/view?usp=sharing">Basic Banking System</Link>,
      img: basic,
      
    },
    {
      id: 3,
      title: <Link href="">Blog Website</Link>,
      img: blog,
     
    },
    {
      id: 4,
      title:<Link href="https://drive.google.com/file/d/1N4f4uBSLgISJDb77ZhWMexxxwKSTDNMe/view?usp=sharing">SmartPark App</Link>,
      img: app,

    },
    {
      id: 5,
      title: <Link href="https://uxfol.io/himaja.kakade">Its Travelous</Link>,
      img: travelous,
    },
    {
      id: 6,
      title: <Link href="https://drive.google.com/file/d/1vcA1ULQx74lEiBu8o2YftnhR9U_ZXP7R/view?usp=sharing">More Portfolio designs</Link>,
      img: extra,
    },
  ];
  
  export const webPortfolio = [
    {
      id: 1,
      title: <Link href="https://drive.google.com/file/d/1JieDY8tocMiBcddIjp08xWHKOUS0sfk7/view?usp=sharing">Personal sample websites</Link>,
      img: website,

    },
    {
      id: 2,
      title: <Link href="https://www.linkedin.com/posts/himaja-k-617897188_thesparksfoundation-gripjuly21-webdevelopment-ugcPost-6819196940375474176-e8ib">Basic Banking System</Link>,
      img: basic,
    },
    {
      id: 3,
      title: <Link href="https://drive.google.com/file/d/1CLM92RxkjtjUfHfEkaFHyIWrzAPElcTR/view?usp=sharing">Blog Website</Link>,
      img: blog,
    },

  ];
  
  export const mobilePortfolio = [
    {
      id: 1,
      title: <Link href="https://drive.google.com/file/d/1N4f4uBSLgISJDb77ZhWMexxxwKSTDNMe/view?usp=sharing">SmartPark App</Link>,
      img: app,

    },
    {
      id: 2,
      title: <Link href="https://uxfol.io/himaja.kakade">Its Travelous</Link>,
      img: travelous,
    },
    {
      id: 3,
      title: <Link href="https://drive.google.com/file/d/1vcA1ULQx74lEiBu8o2YftnhR9U_ZXP7R/view?usp=sharing">More Portfolio designs</Link>,
      img: extra,
  
    },

  ];
  
  export const designPortfolio = [
    // {
    //   id: 1,
    //   title: "Work in Progress",
      
    // },
   
  ];
  
