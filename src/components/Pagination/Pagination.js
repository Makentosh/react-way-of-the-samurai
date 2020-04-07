import React from 'react';
import './Pagination.scss';


const Pagination = ({...props}) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++ ) {
    pages.push(i)
  }


  return (
      <div className="pagination">
        <div className="pagination__inner">
          { pages.slice(0, 5).map((page, index) => {
            return <button  key={index} type="button" className={`pagination__item ${props.currentPage === page ? 'active' : ''}`}
                            onClick={() => props.onPageChanged(page)}>
              {page}
            </button>}
          )}
        </div>

      </div>
  )
};

export default Pagination;
