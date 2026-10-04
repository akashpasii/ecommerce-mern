import React from 'react'

const ProductCart = () => {
  return (
    <div className="group md:w-80 h-auto bg-[#18181B] overflow-hidden rounded-2xl border border-transparent transition-all duration-400 ease-out hover:-translate-y-2 hover:border-orange-400/20">
            <img
              src="https://th.bing.com/th/id/OIP.prglHzuW8sDZGNRRgUgEKQHaE8?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              className="h-60 w-full rounded-t-2xl group-hover:scale-104 object-cover transition-transform duration-500 ease-[ease]"
            />
            <div className="flex flex-col gap-2 text-white p-4">
              <h4 className="text-white text-[20px] overflow-hidden font-bold text-ellipsis whitespace-nowrap">
                Oppo f17
              </h4>
              <p className="text-[#f97316] font-bold text-[20px]">₹18000</p>
              <button className="shadow-[0_4px_14px_#ea580c4d] text-white cursor-pointer inline-block text-[15px] font-semibold text-center transition-all duration-[0.3s] ease-[cubic-bezier(.4,0,0.2,1)] px-6 py-3 rounded-lg border-[none] bg-amber-600 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(234,88,12,0.5)] hover:brightness-110;">
                View Details
              </button>
            </div>
          </div>
  )
}

export default ProductCart