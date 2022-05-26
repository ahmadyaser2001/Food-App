import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Search() {
 const [searchRecipes, setSearchRecipes] =useState([]);
 let params = useParams()
  const getSearch = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.React_APP_API_KEY}&query=${name}`)
    const recipes = await data.json();
     setSearchRecipes(recipes.results);

  } 

  useEffect(()=>{
    getSearch(params.search);
  },[params.search])
  return (
  
    <Grid>
      {searchRecipes.map((item)=>{
        return(
          <Crad key={item.id}>
            <Link to={'/recipe/'+ item.id}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
            </Link>
          </Crad>
        )
      })}
    </Grid>
  )
}


const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit,minmax(20rem, 1fr));
grid-gap: 3rem;

`;
const Crad = styled.div`
img{
  width: 100%;
  border-radius: 2rem;
}
a{
  text-decoration: none;
}
h4{
  text-align: center;
  padding: 1rem;
}


`;
export default Search