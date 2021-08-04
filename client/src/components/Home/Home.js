import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import Spinner from "../Spinner"
import "./Home.css";
import Card from "./Card/Card";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {

  const [loading, setLoading] = useState(true);



  const dispatch = useDispatch();
  const countryy = useSelector((store) => store.country);
  const countries = useSelector((store) => store.countries);
 
  const countriess = useSelector((store) => store.countriess);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [paises, setPaises] =useState([])

  const handleClick = (e) =>{
    setCurrentPage(Number(e.target.id))
  }
  const pages= [];
  for(let i = 1; i<=Math.ceil(paises.length/itemsPerPage); i++){
    pages.push(i);
  }

  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = paises.slice(indexOfFirstItem, indexOfLastItem)

  const renderPagesNumbers = pages.map(number =>{
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });


  useEffect(() => {
    dispatch(getCountries())
    setLoading(false)
    setPaises(countries);
  }, []);

  useEffect(() => {
    setPaises(countries);
  }, [countries]);
  

 


   const renderCountries = (paises)=>{
    return (countryy?.length ? 
      
      <div className="container">
        {loading ? (<Spinner />)  : countryy.map((i) => {
          return <Card country={i} key={i.alpha3Code} />
        })}
      </div>
      :
      
          <div className="container">
            {loading ? (<Spinner />)  : paises?.map((i) => {
              return <Card country={i} key={i.alpha3Code} />
            })}
          </div>
         
    )}
      
    return (
      <div className='foundHome'>
          <SearchBar/>
          <div className='containerPageNumbers'>
            <ul className='pageNumbers'>
              <li><button>{renderPagesNumbers}</button></li>
            </ul>
          </div>
    
        <div className='foundHomee'>
          
         { renderCountries(currentItems)}
    
        </div>
        
        </div>
        
      );

};
export default Home;
