

'use client'

import { useState } from "react";
import subjects from "../common/metadata/subjects";
import { TiTick } from "react-icons/ti";
import { Button, Space,Tag } from 'antd';
import { CheckOutlined } from "@ant-design/icons";

export default function SecondStep({ setCurrentStep,error,setFormData,formData }: { setCurrentStep: React.Dispatch<React.SetStateAction<number>>,error:any,setError:React.Dispatch<React.SetStateAction<any>>,formData:any,setFormData:React.Dispatch<React.SetStateAction<any>> }) {

    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    const { CheckableTag } = Tag;

    const handleTagClick = (clickedItem: any) => {
        

        console.log(clickedItem)
       clickedItem.selected=!clickedItem.selected
       console.log(clickedItem)
    };
    const handleChange = (tag: number, checked: boolean,name:string) => {
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter((t) => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      setSelectedTags(nextSelectedTags);
      if(name!==formData?.subjects){
        setFormData({...formData,subjects:name})
      }
      console.log(formData)
    };
    return (
        <div className="flex flex-col xl:items-center 2xl:items-center lg:items-center md:items-center sm:items-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-center sm:justify-center gap-8 ">
            <div className="flex flex-row ">
                <span className="xl:text-xl 2xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm font-bold">Subjects you cover</span>
                <span className="xl:text-xl 2xl:text-xl lg:text-xl md:text-xl sm:text-xl text-sm font-bold">*</span>
            </div>

            <div className="bg-white w-[80%] xl:p-16 lg:p-16 2xl:p-16 md:p-16 sm:p-4 p-4 flex flex-col gap-20  ">
                <div className="flex flex-row flex-wrap gap-4">
                    {/* {subjects.map((item) => {
                        return ( */}
                          <Space size={[0, 2]} wrap>
                          {subjects.map((tag) => (
                            <CheckableTag
                              key={tag.id}
                              className={`w-28 p-2 items-center justify-center flex shadow-md gap-2 rounded-mdflex-row  mb-4 mr-4 text-base active:bg-black ${selectedTags.includes(tag.id) ? 'bg-black':"bg-white"}`}
                              // icon={tag.selected ? <CheckOutlined /> : undefined}
                              checked={selectedTags.includes(tag.id)}
                              onChange={(checked) => handleChange(tag.id, checked,tag.title)}
                            >
                               {/* {tag.title} */}
                                {selectedTags.includes(tag.id) && <CheckOutlined size={10}/>}
                              {tag.title}
                            </CheckableTag>
                          ))}
                        </Space>
                       
                </div>

                {error?.subject && <span className="error">You need to select any of the subjects</span>}

                <div className="flex justify-between ">
                <Button  className="bg-white text-black " size="large" onClick={()=>setCurrentStep(prev=>prev-1)}>
            Back
          </Button>
          <Button  className="bg-black text-white"  size="large" onClick={()=>setCurrentStep(prev=>prev+1)}>
            Next
          </Button>
                </div>
            </div>
        </div>
    )
}



