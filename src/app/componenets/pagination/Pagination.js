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
            className="p-4 bg-gray-400 hover:bg-gray-500 text-white rounded-lg cursor-pointer h-10 w-10 flex items-center justify-center"
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
      <ul className="flex flex-wrap items-center gap-4 p-6 max-h-[500px]">
        {/* Previous Button */}

     

        {/* Page 1 - Active */}

        {paginator()}

        {/* Next Button */}
     
      </ul>
    </nav>
  );
};

export default Pagination;
