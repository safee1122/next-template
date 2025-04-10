'use-client'
import { Checkbox, Radio, Select } from 'antd'
import React, { useState } from 'react'
import Image from 'next/image';

export default function Filter() {
  const [value, setValue] = useState('option1');

  const onChange = e => {
    console.log('Selected:', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className='border border-gray-200 rounded-lg p-4 space-y-4'>
      <h1 className='font-bold text-[20px] text-[#191919]'>Filters</h1>
      <h2 className='font-bold text-[17px] text-[#191919]'>Operating In</h2>
      <Select
        prefix={<Image src="/assets/images/geo-icon.svg" alt="Icon" width={10} height={10} />
}
        showSearch
        placeholder="Select a Country"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: '1', label: 'Jack' },
          { value: '2', label: 'Lucy' },
          { value: '3', label: 'Tom' },
        ]}
      />
      <div className="border-t border-gray-200 pt-4">
        <div className="space-y-2">
          <label className="font-medium text-gray-700">Ferry Types:</label>
          <Checkbox.Group onChange={onChange} className="flex gap-4">
            <Checkbox value="option1">Normal Ferries</Checkbox>
            <Checkbox value="option2">High Speed Ferries</Checkbox>
          </Checkbox.Group>
        </div>
      </div>
    </div>
  )
}
