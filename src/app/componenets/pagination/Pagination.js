const Pagination = ({ studentsDataItems,chunkNumber,setChunkNumber }) => {
  const totalPages = Math.ceil(studentsDataItems?.length / 10);
// console.log(studentsDataItems)
// console.log(chunkNumber)


  let paginator = () => {
    let arr = [];
    for (let i = 0; i < totalPages; i++) {
      arr.push(
        <li key={i}>
          <a
            onClick={() => setChunkNumber(i)}
            className="p-4 bg-gray-400 hover:bg-gray-500 text-white rounded-lg cursor-pointer"
          >
            {i+1}
          </a>
        </li>,
      );
    }
    return arr;
  };
  return (
    <nav
      aria-label="Page navigation"
      className="mt-8 flex items-center justify-center"
    >
      <ul className="flex items-center gap-1">
        {/* Previous Button */}

        <li>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-gray-400 transition-all duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </a>
        </li>

        {/* Page 1 - Active */}

        {paginator()}

        {/* Next Button */}
        <li>
          <a
            href="#"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-transparent text-gray-400 transition-all duration-200 ease-in-out hover:bg-gray-100 hover:text-gray-700"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
