import { PaginationContainer } from "./styles";

interface Type {
  pages: number;
  setCurrentPage: (pages: number) => void;
}

const Pagination = ({ pages, setCurrentPage }: Type): JSX.Element => {
  return (
    <PaginationContainer>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
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
