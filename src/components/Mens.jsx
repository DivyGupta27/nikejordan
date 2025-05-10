import React, { useContext, useState } from 'react';
import ShoeCard from './ShoeCard';
import ShoeData from '../contextapi/shoedata';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Mens = () => {
  const { fetchdata } = useContext(ShoeData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const mensShoes = fetchdata?.shoes?.filter((shoe) => shoe.gender === 'Men') || [];

  // Pagination logic
  const totalPages = Math.ceil(mensShoes.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = mensShoes.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <div className="text-4xl font-medium m-[20px]">Mens Collection</div>
      <div className="flex justify-center w-full gap-7 mt-6 flex-wrap">
        {fetchdata ? (
          currentShoes.map((shoe, i) => (
            <ShoeCard
            key={shoe._id || i}
              name={shoe.name}
              category={shoe.category}
              price={shoe.price}
              color={shoe.color}
              gender={shoe.gender}
              image={shoe.image}
              inStock={shoe.inStock}
            />
          ))
        ) : (
          Array(itemsPerPage)
            .fill()
            .map((_, index) => (
              <div key={index} className="w-64">
                <Skeleton height={200} />
                <Skeleton count={3} />
              </div>
            ))
        )}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-8 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx + 1)}
            className={`px-3 py-1 rounded ${currentPage === idx + 1 ? 'bg-black text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Mens;
