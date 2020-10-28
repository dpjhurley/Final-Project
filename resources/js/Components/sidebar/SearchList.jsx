import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchColor from "./SearchColor";
import Spinner from '../partials/Spinner/Spinner.jsx';
// import PriceSlider from './PriceSlider.jsx';


const SearchList = ({
  handleBrandCheck, 
  handleCategoryCheck, 
  handleColorCheck
}) => {
  const [ brands, setBrands ] = useState(null)
  const [ brandsLoaded, setBrandsLoaded ] = useState(false)
  const [ categories, setCategories ] = useState(null)
  const [ categoriesLoaded, setCategoriesLoaded ] = useState(false)
  const [ colors, setColors ] = useState(null)
  const [ colorsLoaded, setColorsLoaded ] = useState(false)
    
  useEffect(() => {
    fetchBrandsData();
    fetchCategoriesData();
    fetchColorsData();
  }, [])

  const fetchBrandsData = async () => {
    const resp = await fetch("api/brands", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
    const results = await resp.json()
    if (results) {
      setBrands(results);
      setBrandsLoaded(true);
    }
  }

  const fetchCategoriesData = async () => {
    const resp = await fetch("api/categories", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
    })
    const results = await resp.json();
    if (results) {
      setCategories(results);
      setCategoriesLoaded(true);
    }
  }

  const fetchColorsData = async () => {
    const resp = await fetch("api/colors", {
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }
    })
    const results = await resp.json()
    if (results) {
      setColors(results);
      setColorsLoaded(true);
    }
  }
    
  return (
    <div className="bodySidebar mainDisplaycontainer">
      {categoriesLoaded && brandsLoaded && colorsLoaded ? (
        <>
          <SearchColor
            color={colors}
            handleColorCheck={handleColorCheck}
          />
          <Search 
            search={brands}
            handleCheck={handleBrandCheck}
            title="Brand"
          />
          <Search 
            search={categories}
            handleCheck={handleCategoryCheck}
            title="Category"
          />
          <div className="bodySidebarTitle mainDisplaycontainer">Max Price</div>
              {/* <PriceSlider/> */}
        </>
      ) : (
          <Spinner/>
      )}
    </div>
  );
}
 
export default SearchList;