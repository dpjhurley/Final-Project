import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchColor from "./SearchColor";
import Spinner from '../../partials/Spinner/Spinner.jsx';
// import PriceSlider from './PriceSlider.jsx';


const SideBar = ({
  handleBrandCheck, 
  handleCategoryCheck, 
  handleColorCheck,
  colorList,
  brandList,
  categoryList
}) => {
     
  return (
    <div className="bodySidebar mainDisplaycontainer">
      {categoryList && brandList && colorList ? (
        <>
          <SearchColor
            color={colorList}
            handleColorCheck={handleColorCheck}
          />
          <Search 
            search={brandList}
            handleCheck={handleBrandCheck}
            title="Brand"
          />
          <Search 
            search={categoryList}
            handleCheck={handleCategoryCheck}
            title="Category"
          />
          {/* <div className="bodySidebarTitle mainDisplaycontainer">Max Price</div>
            <PriceSlider/> */}
        </>
      ) : (
          <Spinner/>
      )}
    </div>
  );
}
 
export default SideBar;