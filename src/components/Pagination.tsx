type PaginationProps = {
  nextPageUrl?: string;
  prevPageUrl?: string;
  setCurrentUrl: (url: string) => void;
};

export default function Pagination({
  nextPageUrl,
  prevPageUrl,
  setCurrentUrl,
}: PaginationProps) {
  const handleNext = () => {
    if (nextPageUrl) {
      setCurrentUrl(nextPageUrl);
    }
  };

  const handlePrev = () => {
    if (prevPageUrl) {
      setCurrentUrl(prevPageUrl);
    }
  };

  return (
    <div className="my-4">
      <button
        className={`btn ${
          !prevPageUrl ? "btn-gray" : "btn-yellow"
        } disabled:btn-gray disabled:cursor-not-allowed disabled:opacity-75`}
        onClick={handlePrev}
        disabled={!prevPageUrl}
      >
        Previous
      </button>
      <button
        className={`btn ${
          !nextPageUrl ? "btn-gray" : "btn-yellow"
        }  btn-yellow disabled:btn-gray disabled:cursor-not-allowed disabled:opacity-75`}
        onClick={handleNext}
        disabled={!nextPageUrl}
      >
        Next
      </button>
    </div>
  );
}
