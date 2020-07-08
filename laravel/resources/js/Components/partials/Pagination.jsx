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
                    {'<'}
                </a>
                {pageNumbers.map((number, i) => (
                    <a 
                        key={i} 
                        href="!#" 
                        className="pagination__link"
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
                    {'>'}
                </a>
            </nav>
        );
    }
}
 
export default Pagination;
