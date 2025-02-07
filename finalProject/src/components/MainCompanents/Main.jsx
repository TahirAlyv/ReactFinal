
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import { cryptoFetch } from '../../store/cryptoFetch';
import { useDispatch,useSelector } from "react-redux";
import MainList from "./MainList"
import '../../MainCss.css';




function Main({number=1,setListsize}){

 

  let cryptoArray = useSelector(
    (state) => state.cryptoData.cryptoArray
  );
  
const [limitedCryptoArray, setLimitedCryptoArray] = useState([]);
const [activeIndex, setActiveIndex] = useState(null);

console.log(number)

useEffect(() => {

  const startNumber = (number-1) * 16;
  const endNumber = number * 16;
  
  setLimitedCryptoArray(cryptoArray.slice(startNumber, endNumber));
}, [cryptoArray,number]);


useEffect(() => {
  const totalPages = Math.ceil(cryptoArray.length / 16);
  setListsize(totalPages);
}, [cryptoArray.length]);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cryptoFetch());
  }, [dispatch]);
  

  function Search(event) {

    const searchValue = event.target.value.trim().toLowerCase();
    
    const filteredArray = cryptoArray.slice(0, 16).filter(c => 
        c.symbol.toLowerCase().includes(searchValue)
    );

    setLimitedCryptoArray(
        filteredArray.length > 0 ? filteredArray : [{ symbol: "NOT FOUND" }]
    );

}



  return(
    <div id='main' style={{backgroundColor: "#121825", width: "100%", height: "100%"}}>
      <StyledInput placeholder='Search' onChange={Search}/>
      <Column>
      
      <Headertxt>Currency Name</Headertxt>
      <Headertxt>Current Price</Headertxt>
      <Headertxt>Change in 24h</Headertxt>
      <Headertxt>Volume in 24h</Headertxt>
      <Headertxt>Market Cap</Headertxt>

      </Column>

      <MainUL>
        {limitedCryptoArray.map((crypto,index)=> (
          <MainList
            key={index}
            index={index}
            crypto={crypto}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
         
        ))}
        

      </MainUL>




    </div>
  ) 
}


export default Main

let Column=styled.div`

background-color:rgb(11, 15, 24);
width: 100%;
height: 60px;
display: flex;
border: 1px solid #444;
margin-top: 20px;
display: flex;
justify-content: space-around;

`

let Headertxt= styled.p`
color:rgb(209, 209, 209);

`

let StyledInput=styled.input`
 background-color: #121825;
  width: 99%;
  height: 40px;
  color: white;
  border: 1px solid rgb(55, 66, 90);
  border-radius: 5px;
  margin-left: 0.2%;
  margin-top: 15px
  
`


let MainUL=styled.ul`
  padding: 0;
  list-style: none;
  margin: 20px 0;

`

