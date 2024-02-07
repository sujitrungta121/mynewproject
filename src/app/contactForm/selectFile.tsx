'use client'

import React, { useCallback, useEffect } from 'react';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
import { Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { Span } from 'next/dist/trace';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}


const Selection = ({setCurrentStep,error,setError,formData,setFormData}:{setCurrentStep: React.Dispatch<React.SetStateAction<number>>,error:any,setError:React.Dispatch<React.SetStateAction<any>>,formData:any,setFormData:React.Dispatch<React.SetStateAction<any>>}) => {
    
  const handleChange = useCallback((value: string[]) => {
    setFormData({...formData, interests: value});
    console.log(formData);
    console.log(`selected ${value}`);
}, [formData, setFormData]);







    return(
    <div className="flex flex-col gap-2">
    
    <div className="flex flex-row border p-4 items-center gap-4 justify-center w-full">
        <SearchOutlined />
  <Space style={{ width: '100%', border:"none"}} direction="vertical" className="ant-select-multiple ant-select-selection-overflow">
    <Select
      mode="multiple"
      // allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
    // value={formData?.interests}
      onChange={handleChange}
      options={options}
      
    />
 
  </Space>
 
  <Button type="primary" className="bg-black" size="large" onClick={()=>setCurrentStep(prev=>prev+1)}>
            Next
          </Button>
  </div>
   {error.interest && error.subject && <p className="error">you have to select atleast on of your interest</p>}
   </div>
)}

export default Selection;