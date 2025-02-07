import Footer from "./Footer";
import Header from "./Header";
import Main from "./MainCompanents/Main";
import { useState } from "react";


function MainCompa(){
    const [selectedPage, setSelectedPage] = useState(1);
    const [listSize,setListsize]= useState();
    return(
        <div>
            <Header/>
            <Main number={selectedPage} setListsize={setListsize}/>
            <Footer onPageChange={setSelectedPage} listSize={listSize} />
         
        </div>
    )
}

export default MainCompa 