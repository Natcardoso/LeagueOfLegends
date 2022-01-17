import { PaginationContainer } from "./styles";

interface Type {
  pages: number;
  setCurrentPage: (pages: number) => void;
}

const Pagination = ({ pages, setCurrentPage }: Type): JSX.Element => {
  window.scrollTo(0, 0);

    return (
      <PaginationContainer>
        {Array.from(Array(pages), (item, index) => {
          return (
            <button
              className="buttonPagination"
              key={index}
              value={index}
              onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}
            >
              {index + 1}
            </button>
          );
        })}
      </PaginationContainer>
    );
};

export default Pagination;
