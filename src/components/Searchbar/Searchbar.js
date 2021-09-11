import React from 'react';
import "./Searchbar.css";
 
function Searchbar(){
    return(
    <form className="search-form" action="#">
      <input type="text" className="placeholder" placeholder="Search.." name="search" />
    </form>
    );
}
export default Searchbar;