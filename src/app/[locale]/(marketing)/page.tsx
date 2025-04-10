'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { Button, ConfigProvider, Rate, Select } from 'antd';
import Card from '@/components/listing/card';
import Filter from '@/components/filter/filter';
const data = [{
  brandIcon: "/assets/images/blue-star-card.svg",
  brandName: "Blue Star Ferries",
  rating: 4.5,
  ratingCustomers: "1,342",
  operatesIn: [{ location: "Greece", icon: "/assets/images/greece-icon.svg" }],
  vesselsNumber: 8,
  ferryTypes: "8 normal",
  popularVessels: ["Blue Star Delos", "Blue Start Naxos"],
  locationDesc: `Blue Star Ferries is currently the biggest ferry company in Greece.
            It is a member of Attica Group, one of the most significant companies in the Greek shipping industry.
            Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star ...
            Adriatic and Ionian Sea between Greece and Italy. Later on, from 1980 until 2000 the company developed rapidly and started bringing into action ferries both in Greece and abroad.`

},
{
  brandIcon: "/assets/images/seajet-card.svg",
  brandName: "Seajets",
  rating: 3.5,
  ratingCustomers: "2,467",
  operatesIn: [{ location: "Greece", icon: "/assets/images/greece-icon.svg" }],
  vesselsNumber: 17,
  ferryTypes: "10 normal and 7 high-speed ferries",
  popularVessels: ["WorldChampion jet", "Seajet 2"],
  locationDesc: `Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. 
The company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.
Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion), other parts of the mainland (Thessaloniki, Kavala, Peloponnese) and ...
Crete (Rethymno and Heraklion) to the islands of the Cyclades (Mykonos, Santorini, Paros, Naxos and more), the Sporades and the Northern Aegean Islands. The timetables are renewed every year before the tourist season and the connections are available on a daily basis.`

},
{
  brandIcon: "/assets/images/anek-card.svg",
  brandName: "Anek-Superfast",
  rating: 3.5,
  ratingCustomers: "667",
  operatesIn: [{ location: "Greece", icon: "/assets/images/greece-icon.svg" }, { location: "Italy", icon: "/assets/images/italy-icon.svg" }],
  vesselsNumber: 6,
  ferryTypes: "Normal ferries",
  popularVessels: ["Superfast XII", "Superfast XI"],
  locationDesc: `Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. 
The goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology.
The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also makes the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu and ...
Igoumenitsa).

Anek-Superfast uses 6 ferries of various sizes in total that can carry from 900 to 2200 passengers, depending on the vessel. Their speed also varies, from 21 to 31 knots. All of them have garages for cars and motorbikes, with the capacity to carry from 170 to 900 vehicles per vessel.

The ferries offer many facilities, from restaurants and cafe-bars to shops and play areas for children. Some of them also provide additional entertainment facilities. Moreover, various types of cabins and seats are available, as well as special cabins and kennels for pets.`

}]
export default function Index() {
  const [showFilter, setShowFilter] = useState(false)

  return (
    <>
      <div className="mt-4">
        <h1 className="font-semibold text-[21px] text-[#191919] m-0 p-0">Ferry operators</h1>
        <p className="text-[13px] m-0 p-0">
          Discover the
          <span className="font-bold"> 57 ferry operators</span>
          we work with
        </p>
      </div>
      <div className='p-2 flex gap-1 mt-4'>
        <Button
          className='w-25'
          type="text"
          style={{
            backgroundColor: '#fafafa', // Light grey background
            border: 'none', // Remove border if needed
          }}
          onClick={() => setShowFilter(!showFilter)}
        >
          <div className='flex gap-x-2'>
            <Image src="/assets/images/filters-icon.svg" alt="Icon" width={15} height={15} />
            filters
          </div>

        </Button>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#D3D3D3',
              colorBgContainer: '#fafafa',
              colorBorder: "#fafafa"
            },
          }}
        >
          <Select
            prefix={<div className='flex gap-x-1'>
              <Image src="/assets/images/sort-icon.svg" alt="Icon" width={15} height={15} />
              Sort by:
            </div>}
            suffixIcon={<Image src="/assets/images/down-arrow.svg" alt="Icon" width={10} height={10} />}
            defaultValue="Reviews"
            options={[
              { value: 'Reviews', label: 'Reviews' },
            ]}
            style={{
              width: '100%',
              border: 'none',
              boxShadow: 'none',
              maxWidth: '300px', 
            }}
          />
        </ConfigProvider>
        <Button
          className='w-30'
          type="text"
          style={{
            backgroundColor: '#fafafa', // Light grey background
            border: 'none', // Remove border if needed
          }}
        >
          <div className='flex gap-x-2'>
            <Image src="/assets/images/search-icon.svg" alt="Icon" width={15} height={15} />
            Search
          </div>
        </Button>
      </div>
      <div className='lg:flex'>
        {showFilter && <div className='p-4  mt-10 lg:w-1/2'>
          <Filter />
        </div>}
        <div>
          {data?.map((data) => <Card key={data.brandName} data={data} />)}
        </div>
      </div>

    </>
  );
};
