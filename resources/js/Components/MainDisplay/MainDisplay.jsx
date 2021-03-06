import React, { useState, useEffect } from "react";
import InformationBanner from "./InformationBanner/InformationBanner.jsx";
import SideBar from "./Sidebar/SideBar.jsx";
import ShoeList from "./ShoeList/ShoeList";
import Spinner from '../partials/Spinner/Spinner.jsx';
import Pagination from "../partials/Pagination.jsx";

const MainDisplay = ({
    data,
    loading,
    extension,
    search,
    handleExtensionChange,
    colorList,
    brandList,
    categoryList
}) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ shoesPerPage, setShoesPerPage ] = useState(12);
    const [ filterByColor, setFilterByColor ] = useState([]);
    const [ filterByBrand, setFilterByBrand ] = useState([]);
    const [ filterByCategory, setFilterByCategory ] = useState([]);

    const handleBrandCheck = (e) => {
        if (filterByBrand.includes(e.target.value)) {
            setFilterByBrand(filterByBrand.filter(
                    brand => brand !== e.target.value
            ))
        } else {
            setFilterByBrand(filterByBrand.concat(e.target.value))
        }
    };

    const handleCategoryCheck = (e) => {
        if (filterByCategory.includes(e.target.value)) {
            setFilterByCategory(filterByCategory.filter(
                    category => category !== e.target.value
            ))
        } else {
            setFilterByCategory(filterByCategory.concat(e.target.value));
        }
    };

    const handleColorCheck = (e) => {
        if (filterByColor.includes(e.target.value)) {
            setFilterByColor(filterByColor.filter(
                    color => color !== e.target.value
            ));
        } else {
            setFilterByColor(filterByColor.concat(e.target.value));
        }
    };

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / shoesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    const indexOfLastShoe = currentPage * shoesPerPage;
    const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;

    let filteredShoes = [];
    if (filterByBrand.length > 0 ) {
        data.forEach(shoe => {
            filterByBrand.forEach(brand => {
                if (shoe.brand_id == brand ) {
                    filteredShoes.push(shoe);
                }
            });
        });
    }

    if (filterByCategory.length > 0) {
        data.forEach(shoe => {
            filterByCategory.forEach(category => {
                if (shoe.category_id == category) {
                    filteredShoes.push(shoe);
                }
            });
        });
    }

    if (filterByColor.length > 0) {
        data.forEach(shoe => {
            filterByColor.forEach(color => {
                let regex = new RegExp(color, "i");
                if (shoe.color.match(regex) != null && !filteredShoes.includes(shoe)) {
                    filteredShoes.push(shoe);
                }
            });
        });
    }

    if (
        filterByBrand.length == 0 &&
        filterByCategory.length == 0 &&
        filterByColor.length == 0
    ) {
        filteredShoes = data;
        console.log(data)
    }

    return (  
        <>
            <InformationBanner 
                count={filteredShoes} 
                brand={filterByBrand}
                extension={extension}
                search={search}
                handleExtensionChange={handleExtensionChange}
            />
            <div className="shoes">
                <SideBar
                    handleBrandCheck={handleBrandCheck}
                    handleCategoryCheck={handleCategoryCheck}
                    handleColorCheck={handleColorCheck}
                    colorList={colorList}
                    brandList={brandList}
                    categoryList={categoryList}
                />
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="shoes__right">
                        {filteredShoes.length > 0 ? (
                            <>
                                <ShoeList
                                    shoes={filteredShoes.slice(
                                        indexOfFirstShoe,
                                        indexOfLastShoe
                                    )}
                                />
                                <Pagination
                                    shoesPerPage={shoesPerPage}
                                    totalShoes={filteredShoes.length}
                                    paginate={paginate}
                                    previousPage={previousPage}
                                    nextPage={nextPage}
                                />
                            </>
                        ) : (
                            <div className="shoes__right__noShoes">Sorry, we have not found any matches for your query.</div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
 
export default MainDisplay;
