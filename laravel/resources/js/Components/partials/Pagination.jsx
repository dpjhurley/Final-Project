import React from 'react';

class Pagination extends React.Component {
    
    render() { 
        const { shoesPerPage, totalShoes, paginate, nextPage, previousPage } = this.props;
        const pageNumbers = [];

        for(let i=1; i <=Math.ceil(totalShoes / shoesPerPage); i++) {
            pageNumbers.push(i)
        }
        return (  
            <nav className="pagination">
                <a 
                    href="!#" 
                    className="pagination__link"
                    onClick={previousPage}
                >
                   <i className="fas fa-arrow-circle-left fa-2x"></i>
                </a>
                {pageNumbers.map((number, i) => (
                    <a 
                        key={i} 
                        href="!#" 
                        className="pagination__link number"
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </a>
                ))}
                <a 
                    href="!#" 
                    className="pagination__link"
                    onClick={nextPage}
                >
                    <i className="fas fa-arrow-circle-right fa-2x"></i>
                </a>
            </nav>
        );
    }
}
 
export default Pagination;
