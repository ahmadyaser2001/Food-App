import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {
    const [details,setDetails] =useState({});
    const [ activeTab,setActiveTab]= useState('instruction')
   let params = useParams();
    const fetchDetail =  async()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.React_APP_API_KEY}`) 
        const  detailData= await data.json()
        setDetails(detailData)
    }
    useEffect(()=>{
        fetchDetail()
    },[params.name])
  return (
    <DetailsWrapper>
        <div>
            <h2>{details.title}</h2>
            <img  src={details.image} alt="" />
        </div>
            <Info>
            <Button className={activeTab === 'instructions' ? 'active':''} onClick={()=>setActiveTab("instructions")}>Instruction</Button>
            <Button className={activeTab === 'ingredients' ? 'active':''} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
            {activeTab == 'instructions' && (
                <div>
               <h5 dangerouslySetInnerHTML={{__html: details.summary}}></h5>
               <h5 dangerouslySetInnerHTML={{__html: details.instructions}}></h5>
               </div>
            )}
            {activeTab === "ingredients"  &&(
                <ul>{details.extendedIngredients.map((ingredient)=>(
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}</ul>
            )}
           
            </Info>
           
           
    </DetailsWrapper>
  )
}

const DetailsWrapper  = styled.div`
margin: 10rem;
margin-bottom: 5rem;
// display: flex;
.active{
    background:  linear-gradient(35deg,#494949,#313131);
    color: white;
}
 h2{
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
 }
 li{
    font-size: 1.2rem;
    line-height: 2.5rem;
 }
 ul{
    margin-top: 2rem;
 }
 img{
    height: 100%;
    width: 100%; 
    margin-bottom: 2rem;
    margin-left: 2rem;
 }
`;
const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
height: 4rem;
margin-bottom: 2rem;


`
const Info = styled.div`
margin-left: 10rem;
 h5{
    margin-bottom: 1rem;
    font-weight: 600;
 }
`
export default Recipe