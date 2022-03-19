import { usePagination, DOTS } from '../../../../utils/usePagination'
import leftArrow from '../../../../images/leftArrow.svg'
import rightArrow from '../../../../images/rightArrow.svg'
import {
  ListItemGroup,
  PaginationItem,
  PaginationUl,
  PaginationWrapper,
} from './style'

interface Props {
  totalCount: number
  currentPage: number
  pageSize: number
  neighborCount: number
  onPageChange: (pageNum: number) => void
}

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  neighborCount,
  onPageChange,
}: Props) => {
  const paginationRange: number[] = usePagination({
    currentPage,
    neighborCount,
    pageSize,
    totalCount,
  })

  if (currentPage === 0 || paginationRange.length < 2) return null

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrev = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]

  return (
    <PaginationWrapper>
      <PaginationUl>
        {/* left arrow */}
        <ListItemGroup arrow={true}>
          <PaginationItem disabled={currentPage === 1} onClick={onPrev} arrow={true}>
            <img src={leftArrow} alt="left-arrow" /> Prev
          </PaginationItem>
        </ListItemGroup>

        <ListItemGroup>
          {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return <PaginationItem key={index}>...</PaginationItem>
            }
            return (
              <PaginationItem
                key={index}
                selected={pageNumber === currentPage}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </PaginationItem>
            )
          })}
        </ListItemGroup>
        {/* right arrow */}
        <ListItemGroup arrow={true}>
          <PaginationItem
            onClick={onNext}
            disabled={currentPage === lastPage}
            arrow={true}
          >
            Next<img src={rightArrow} alt="right-arrow" />
          </PaginationItem>
        </ListItemGroup>
      </PaginationUl>
    </PaginationWrapper>
  )
}

export default Pagination
