import React from 'react';

const FlipCard = ({ data }) => {
  return (
    <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute backface-hidden border-2 w-full h-full">
          <img src={data.image} className="w-full h-full" alt={data.title} />
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p className="my-2">{data.rating}</p>
            <p>{data.description}</p>
            <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              {data.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
