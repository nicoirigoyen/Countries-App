// import { getCountries, getCountriesPag } from "../../redux/actions";
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// const Pagination = () => {

// const [loading, setLoading] = useState(true);
// const [currentPage, setCurrentPage] = useState(1);
// const [itemsPerPage, setitemsPerPage] = useState(10);
// const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
// const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
// const [paises, setPaises] =useState([])

// const dispatch = useDispatch();
//   const countryy = useSelector((store) => store.country);
//   const countries = useSelector((store) => store.countries);

// const handleClick = (e) =>{
//   setCurrentPage(Number(e.target.id))
// }
// const pages= [];
// for(let i = 1; i<=Math.ceil(paises.length/itemsPerPage); i++){
//   pages.push(i);
// }

// const indexOfLastItem = currentPage*itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = paises.slice(indexOfFirstItem, indexOfLastItem)

// const renderPagesNumbers = pages.map(number =>{
//   if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//     return (
//       <li
//         key={number}
//         id={number}
//         onClick={handleClick}
//         className={currentPage == number ? "active" : null}
//       >
//         {number}
//       </li>
//     );
//   } else {
//     return null;
//   }
// });
// useEffect(() => {
//   dispatch(getCountries())
//   setLoading(false)
//   setPaises(countries);
// }, []);

// useEffect(() => {
//   setPaises(countries);
// }, [countries]);

// return (
//   <div className='foundHome'>

//       <div className='containerPageNumbers'>
//         <ul className='pageNumbers'>
//           <li><button>{renderPagesNumbers}</button></li>
//         </ul>
//       </div>

//     <div className='foundHomee'>
      
//      { renderCountries(currentItems)}

//     </div>
    
//     </div>
    
//   );
// }

// export default Pagination;