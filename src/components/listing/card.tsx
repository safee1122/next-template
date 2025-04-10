'use-client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Rate } from 'antd';
export default function Card({ data }) {
  const [selectedOption, setSelectedOption] = useState('reviews');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className='w-full bg-[#fafafa] p-4 flex flex-col mt-10 lg:flex-row lg:justify-between'>
        <div className='self-center'>
          <Image src={data.brandIcon} alt="Icon" width={450} height={50} />
        </div>
        <div className='flex flex-col gap-1'>
          <h1 className='font-semibold text-[21px] text-[#191919]'>{data.brandName}</h1>
          <div className="space-x-2">
            <Rate
              value={data.rating}
              onChange={handleChange}
              className="text-yellow-400 text-xl hover:text-yellow-500"
            />
            <span className=" text-[13px] text-[#191919]"> by <strong>{data.ratingCustomers} customers</strong></span>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-2 lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className='text-[15px] text-[#191919] font-bold'>Operates in</h2>
          {data.operatesIn.map((info) => <div className='flex gap-1'>
            <Image src={info.icon} alt="Icon" width={20} height={20} />
            <p className='text-[15px] text-[#191919]'>{info.location}</p>
          </div>)}
          <br></br>
          <div className='flex gap-1'><h2 className="text-[15px] text-[#191919] font-bold">Vessels number: </h2><span className='text-[15px] text-[#191919]'>{data.vesselsNumber}</span></div>
          <div className='flex gap-1'>
            <h2 className="text-[15px] text-[#191919] font-bold">Ferry types: </h2><span className='text-[15px] text-[#191919]'>{data.ferryTypes}</span>
          </div>
          <br></br>
          <h2 className="text-[15px] text-[#191919] font-bold">Popular vessels</h2 ><span className='text-[15px] text-[#00AFD3]'>{data.popularVessels?.join(",")}</span>
        </div>
        <div className='flex flex-col lg:w-1/2'>
          <div>
            <p className="text-[15px] text-[#252525]">
              {data.locationDesc}
            </p>
          </div>
          <div className='py-1 px-2 flex self-end gap-2 bg-[#e9e9e9] w-max rounded-2xl' >
            <h2 className='text-[15px] text-[#00AFD3] font-bold'>More about {data.brandName}</h2>
            <Image src="/assets/images/more-info-arror.svg" alt="Icon" width={15} height={15} />
          </div>
       </div>
      </div >
    </div>
  )
}
