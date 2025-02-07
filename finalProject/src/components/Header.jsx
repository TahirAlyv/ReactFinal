import myImage from '../assets/investment-icon-png-5.png';
import styled from 'styled-components'

function Header(){
    return(
        <div>
            <Div>
                <TagH2>MarketPulse</TagH2>
                <TagH3>Market Overview</TagH3>
                <IMG src={myImage} alt="Market Overview" />
            </Div>
        </div>
    )
}



let Div = styled.div`
  background-color: rgb(19, 26, 44);
  width: 100%;
  height: 80px;
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;

`;

let TagH2 = styled.h2`
    color: white;
    padding-top: 12px; 
    margin-left: 15px;
    font-size: 20px;
    font-family:Arial, Helvetica, sans-serif

`;

let TagH3=styled.h3`
    color: white;
    padding-top: 17px; 
    margin-left: 60px;
    font-size: 15px;
    font-family:Arial, Helvetica, sans-serif
`

let IMG=styled.img`
height: 25px;
margin-top: 24px;
margin-left: 5px;
color: white;

`
export default Header




