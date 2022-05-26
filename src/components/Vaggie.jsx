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


const Vaggie = () => {

  const [vaggie,setVaggie] = useState([])

  useEffect(()=>{
    getVaggie();
  },[]);

  const getVaggie = async ()=>{
    const check = localStorage.getItem("vaggie");

    if(check){
      setVaggie(JSON.parse(check))
    }else{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_APP_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.json()
      setVaggie(data.recipes)
      localStorage.setItem("vaggie",JSON.stringify(data.recipes))
      
    }
  };
  return (
    <div>
        <Wrapper>
              <h3>Vaggie Picks</h3>
              <Splide options={
                {
                  perPage:3,
                  arrows:false,
                  pagination:false,
                  drag:'free',
                  gap:'5rem'
                }
                }>
              {vaggie.map((recipe)=>{
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
  )
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
export default Vaggie