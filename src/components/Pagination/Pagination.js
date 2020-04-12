import React from 'react';
import './Pagination.scss';


const Pagination = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // let pages = [];
  //
  // for (let i = 1; i <= pageCount; i++ ) {
  //   pages.push(i)
  // }

  let firstPage = 1;
  let lastPage = pageCount;

  let previousPage = (props.currentPage - 1) > 0 ? props.currentPage - 1 : null;
  let nextPage = props.currentPage < lastPage ? props.currentPage + 1 : null;



  return (
      <div className="pagination">
        <div className="pagination__inner">

          <button type="button"
                  className="pagination__item pagination__arrow pagination__arrow--prev"
                  disabled={!previousPage}
                  onClick={() => props.onPageChanged(previousPage)}>
            <i className="fas fa-angle-left"></i>
          </button>



          {(props.currentPage - 4) > 0 && (
              <React.Fragment>
                <div
                    className="pagination__item"
                    onClick={() => props.onPageChanged(firstPage)}
                >
                  {firstPage}
                </div>

                <div className="pagination__divider">
                  ...
                </div>
              </React.Fragment>
          )}


          {[props.currentPage - 2, props.currentPage - 1, props.currentPage, props.currentPage + 1, props.currentPage + 2].map(page => {
            if (page > 0 && page <= lastPage) {
              return (
                  <React.Fragment key={page}>
                    {page === props.currentPage ? (
                        <div className="pagination__item active">
                          {page}
                        </div>
                    ) : (
                        <div
                            className="pagination__item"
                            onClick={() => props.onPageChanged(page)}
                        >
                          {page}
                        </div>
                    )}
                  </React.Fragment>
              );
            }

            return null;
          })}


          {(props.currentPage + 3) < lastPage && (
              <React.Fragment>
                <div className="pagination__divider">
                  ...
                </div>
                <div
                    className="pagination__item"
                    onClick={() => props.onPageChanged(lastPage)}
                >
                  {lastPage}
                </div>
              </React.Fragment>
          )}


            <button type="button"
                    className="pagination__item pagination__arrow pagination__arrow--next"
                    disabled={!nextPage}
                    onClick={() => props.onPageChanged(nextPage)}>
              <i className="fas fa-angle-right"></i>
            </button>
        </div>
      </div>
  )
};

export default Pagination;
