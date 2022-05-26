import React, { useEffect, useState } from 'react'
import './style.css'
import styled from 'styled-components';
import {Splide,SplideSlide} from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom';

function Populer() {
  const [popular,setPopular] = useState([])

  useEffect(()=>{
    getPopular();
  },[]);

  const getPopular = async ()=>{
    const check = localStorage.getItem("popular");

    if(check){
      setPopular(JSON.parse(check))
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_APP_API_KEY}&number=9`)
      const data = await api.json()
      setPopular(data.recipes)
      localStorage.setItem("popular",JSON.stringify(data.recipes))
      
    }
  };
  return (
    <div>
        <Wrapper>
              <h3>Populae Picks</h3>
              <Splide options={
                {
                  perPage:3,
                  arrows:false,
                  pagination:false,
                  drag:'free',
                  gap:'5rem'
                }
                }>
              {popular.map((recipe)=>{
                return(
                  <SplideSlide key={recipe.id}>
                  <Card>
                   <Link to={'/recipe/'+recipe.id}>
                    <p className='p1'>{recipe.title}</p>
                    <Gradient/>
                    <img className='img' src={recipe.image} alt={recipe.title} />
                    </Link>
                  </Card>
                  </SplideSlide>
                );
              })}
              </Splide>
             </Wrapper> 
         </div>
  );
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`

min-height: 25tem;
overflow: hidden;
position: relative;

 
 
`;
const Gradient = styled.div`
z-index: 3;
position: absolute;
// width: 100%;
// height: 100%;
border-radius: 5rem;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Populer