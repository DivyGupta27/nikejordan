import React, { useContext, useState } from 'react';
import ShoeCard from './ShoeCard';
import ShoeData from '../contextapi/shoedata';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Womens = () => {
  const { fetchdata } = useContext(ShoeData);
  const shoesArray = fetchdata?.shoes || [];

  const womenshoes = shoesArray.filter((shoe) => shoe.gender === 'Women');

  const [page, setPage] = useState(1);
  const pageItems = 9;
  const totalPages = Math.ceil(womenshoes.length / pageItems);

  const startIndex = (page - 1) * pageItems;
  const endIndex = page * pageItems;
  const paginatedShoes = womenshoes.slice(startIndex, endIndex);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div>
      <div className="text-4xl font-medium m-[20px]">Women's Collection</div>
      <div className="flex justify-center w-full gap-7 mt-6 flex-wrap">
        {paginatedShoes.length > 0 ? (
          paginatedShoes.map((shoe, i) => (
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
          Array(8)
            .fill()
            .map((_, index) => (
              <div key={index} className="w-64">
                <Skeleton height={200} />
                <Skeleton count={3} />
              </div>
            ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center my-6 gap-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2">Page {page} of {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Womens;
