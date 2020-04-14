import React from 'react';
import './Pagination.scss';


const Pagination = ({onPageChanged, pageSize, currentPage, totalUsersCount, ...props}) => {

  let pageCount = Math.ceil(totalUsersCount / pageSize);


  let firstPage = 1;
  let lastPage = pageCount;

  let previousPage = (currentPage - 1) > 0 ? currentPage - 1 : null;
  let nextPage = currentPage < lastPage ? currentPage + 1 : null;



  return (
      <div className="pagination">
        <div className="pagination__inner">

          <button type="button"
                  className="pagination__item pagination__arrow pagination__arrow--prev"
                  disabled={!previousPage}
                  onClick={() => onPageChanged(previousPage)}>
            <i className="fas fa-angle-left"/>
          </button>



          {(currentPage - 4) > 0 && (
              <React.Fragment>
                <div
                    className="pagination__item"
                    onClick={() => onPageChanged(firstPage)}
                >
                  {firstPage}
                </div>

                <div className="pagination__divider">
                  ...
                </div>
              </React.Fragment>
          )}


          {[currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2].map(page => {
            if (page > 0 && page <= lastPage) {
              return (
                  <React.Fragment key={page}>
                    {page === currentPage ? (
                        <div className="pagination__item active">
                          {page}
                        </div>
                    ) : (
                        <div
                            className="pagination__item"
                            onClick={() => onPageChanged(page)}
                        >
                          {page}
                        </div>
                    )}
                  </React.Fragment>
              );
            }

            return null;
          })}


          {(currentPage + 3) < lastPage && (
              <React.Fragment>
                <div className="pagination__divider">
                  ...
                </div>
                <div
                    className="pagination__item"
                    onClick={() => onPageChanged(lastPage)}
                >
                  {lastPage}
                </div>
              </React.Fragment>
          )}


            <button type="button"
                    className="pagination__item pagination__arrow pagination__arrow--next"
                    disabled={!nextPage}
                    onClick={() => onPageChanged(nextPage)}>
              <i className="fas fa-angle-right"/>
            </button>
        </div>
      </div>
  )
};

export default Pagination;
