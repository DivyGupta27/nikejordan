import React, { useContext, useState } from 'react';
import Carousel from './Carousel';
import Button from './Button';
import shoedata from '../contextapi/shoedata';
import ShoeCard from './ShoeCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const { fetchdata, isLoading } = useContext(shoedata);
  const [page, setPage] = useState(1);
  const pageitems = 9;

  // Safe pagination calculation
  const totalItems = fetchdata?.shoes?.length || 0;
  const totalPages = Math.ceil(totalItems / pageitems);
  const startIndex = (page - 1) * pageitems;
  const endIndex = page * pageitems;
  const pagination = fetchdata?.shoes?.slice(startIndex, endIndex) || [];

  // Pagination controls
  const handlePrevious = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(totalPages, p + 1));

  return (
    <div>
      <Carousel />
      <div className="flex items-center justify-center flex-col">
        <div className="capitalize text-7xl font-extrabold text-center">
          a shoe as tough <br /> as luka's game
        </div>
        <p className="text-base text-center">
          The training styles that aren't afraid to put in the work.
        </p>
      </div>
      <Button />

      <div className="text-4xl font-medium m-5">Latest collection</div>
      
      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center w-full gap-7 mt-6 flex-wrap">
          {Array(8).fill().map((_, index) => (
            <div key={index} className="w-64">
              <Skeleton height={200} />
              <Skeleton count={3} />
            </div>
          ))}
        </div>
      ) : (
        <>

          <div className="flex justify-center w-full gap-7 mt-6 flex-wrap">
            {pagination.length > 0 ? (
              pagination.map((shoe) => (
                <ShoeCard
                  key={shoe._id}
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
              <div className="text-center py-12 text-xl w-full">
                No shoes found in the collection
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={handlePrevious}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      <ToastContainer />
    </div>
  );
};

export default Home;