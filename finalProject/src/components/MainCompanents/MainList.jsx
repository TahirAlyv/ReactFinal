import styled from "styled-components"
import { useState } from "react";
import TokenUsageChart from "./TokenUsageChart";
import { useEffect } from "react";



function MainList({ crypto, index, activeIndex, setActiveIndex }) {

  const handleOpenMenu = () => setActiveIndex(index);
  const handleCloseMenu = () => setActiveIndex(null);

  const isMenuOpen = activeIndex === index;


  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("chartData");
    return savedData ? JSON.parse(savedData) : [];
  });


  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  
    const time = `${hours}:${minutes}`;
  
    setData((prevData) => {
      const isDuplicate = prevData.some(
        (item) => item.symbol === crypto.symbol && item.date === time
      );
  
      if (!isDuplicate) {
        const newData = [
          ...prevData,
          { date: time, value: parseFloat(crypto.percent_change_24h), symbol: crypto.symbol },
        ];
  
        localStorage.setItem("chartData", JSON.stringify(newData));
        return newData;
      }
  
      return prevData;
    });
  }, [crypto]);

console.log("crypto",data)


  return (
      <div>
          <Container>
              <Row onClick={handleOpenMenu}>{crypto.symbol}</Row>
              <Row>{crypto.price_usd}</Row>
              <Row>{crypto.percent_change_24h}</Row>
              <Row>{crypto.volume24}</Row>
              <Row>{crypto.market_cap_usd}</Row>
          </Container>

          {isMenuOpen && (
              <BurgerMenu>
                  <p onClick={handleCloseMenu} style={{ cursor: "pointer"}}>Close</p>
                  <p style={{ color: "yellow" }}>Currency Name: {crypto.symbol}</p>
                  <TokenUsageChart crypto={crypto} data={data}/>
              </BurgerMenu>
          )}
      </div>
  );
}

export default MainList


let Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.6fr 1.5fr 1.5fr;
  align-items: center; 
  width: 100%;
  border: 1px solid rgb(35, 45, 66);
  height: 40px;
  box-sizing: border-box; 
  
  
`;

let Row = styled.div`
  color: white;
  text-align: center; 
  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
  font-size: 14px;
  margin-left: 27px;
  cursor: pointer;
  &: hover{
     text-decoration: underline;
  }
`;



let BurgerMenu=styled.div`
 position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: rgba(35, 45, 66, 0.95);
  color: white;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  overflow-y: auto; 
  z-index: 1000; 
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
