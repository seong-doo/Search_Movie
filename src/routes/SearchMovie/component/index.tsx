import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'

export interface IPaginationProps {
  initialPage: number
  marginPagesDisplayed: number
  pageCount: number
  pageRangeDisplayed: number
  handlePageChange: ({ selected }: { selected: number }) => void
}

const Paginetion: React.FC<IPaginationProps> = ({
  initialPage,
  marginPagesDisplayed,
  pageCount,
  pageRangeDisplayed,
  handlePageChange,
}) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={pageCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={handlePageChange}
      containerClassName={styles.pagination}
      activeClassName={styles.pageActive}
      pageLinkClassName={styles.pageLink}
      breakLinkClassName={styles.breakLink}
      previousLinkClassName={styles.previousLink}
      pageClassName={styles.pageItem}
      breakClassName={styles.breakItem}
      nextClassName={styles.nextItem}
      previousClassName={styles.previousItem}
    />
  )
}

export default Paginetion
