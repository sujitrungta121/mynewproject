// import { Button } from 'antd';
// import React, { useState } from 'react';
// import { PiPlus } from 'react-icons/pi';

// export default function ThirdForm({setCurrentStep}:{setCurrentStep:React.Dispatch<React.SetStateAction<number>>}) {
//   const [companyName, setCompanyName] = useState('');
//   const [logo, setLogo] = useState(null);
//   const [provideServicesRemotely, setProvideServicesRemotely] = useState(false);
//   const [companyDescription, setCompanyDescription] = useState('');

//   const handleLogoChange = (event) => {
//     setLogo(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Form validation and submission logic here

//     console.log('Form submitted:', {
//       companyName,
//       logo,
//       provideServicesRemotely,
//       companyDescription,
//     });
//   };

//   return (
//     <main className="flex flex-col w-full items-center justify-center gap-6">
//       <span className="text-xl font-bold">Describe YourSelf</span>
//     <div className="bg-white flex flex-col p-16 w-[60%] gap-4">
//     <form className="container mx-auto " onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
//           Student Name
//         </label>
//         <input
//           type="text"
//           id="companyName"
//           name="companyName"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="logo" className="block text-gray-700 text-sm font-bold mb-2">
//           Your Image
//         </label>
      
//         <div className="flex flex-row gap-2 w-full border rounded-md">
//             <div className="border flex flex-col p-8 h-[10rem] justify-center items-center w-[100%]">
//                 <PiPlus/>
//                 <span>Click to upload your image</span>
//             </div>
//             <div className="border flex items-center justify-center w-[100%] rounded-md">
             
//                 <span>Preview</span>
//             </div>
//         </div>
//       </div>
//       <div className="mb-4">
       
//       </div>
//       <div className="mb-4">
//         <label htmlFor="companyDescription" className="block text-gray-700 text-sm font-bold mb-2">
//          About Yourself
//         </label>
//         <textarea
//           id="companyDescription"
//           name="companyDescription"
//           value={companyDescription}
//           onChange={(e) => setCompanyDescription(e.target.value)}
//           rows={8}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           required
//         />
//       </div>
     
//       </form>
      
//       <div className="flex justify-between ">
//                 <Button  className="bg-white text-black " size="large" onClick={()=>setCurrentStep(prev=>prev-1)}>
//             Back
//           </Button>
//           <Button  className="bg-black text-white"  size="large" onClick={()=>setCurrentStep(prev=>prev+1)}>
//             Next
//           </Button>
//                 </div>
//       </div>
//       </main>
//   )}

'use client'


import { Button, Image, Input } from 'antd';
import React, { useState } from 'react';
import { PiPlus } from 'react-icons/pi';
import { message, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Span } from 'next/dist/trace';


const { TextArea } = Input;

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default function ThirdForm({setCurrentStep,formData,setFormData,error}:{setCurrentStep:React.Dispatch<React.SetStateAction<number>>,error:any,formData:any,setFormData:React.Dispatch<React.SetStateAction<any>>}) {
  // const [companyName, setCompanyName] = useState('');
  // const [logo, setLogo] = useState(null);
  // const [provideServicesRemotely, setProvideServicesRemotely] = useState(false);
  // const [companyDescription, setCompanyDescription] = useState('');


  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as FileType, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );



  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e,e.target.value);

    setFormData({...formData,[e.target.name]:[e.target.value]})
    console.log(formData)
    
  };

  return (
    <main className="flex flex-col w-full items-center justify-center gap-6">
      <span className="text-xl font-bold">Describe YourSelf</span>
    <div className="bg-white flex flex-col p-16 w-[60%] gap-4">
    <form className="container mx-auto "
    //  onSubmit={handleSubmit}
     >
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">
          Student Name
        </label>
        <Input placeholder="input with clear icon" name="studentName" id="studentName" allowClear value={formData?.studentName} onChange={onChange} />
     {error?.studentName && <span>{error?.studentName}</span>}
      </div>
    
      <div className="mb-4">
        <label htmlFor="logo" className="block text-gray-700 text-sm font-bold mb-2">
          Your Image
        </label>
      <div className="flex flex-row w-full">
        <div className="flex flex-row gap-2  border rounded-md w-[100%]">
        <Upload
        name="avatar"
       style={{width:"20px"}}
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        // style={{width:'100%'}}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      </div>
            <div className="border flex items-center justify-center w-[100%] rounded-md">
             
       {  !imageUrl ?     <span>Preview</span>:
                <Image
    width={200}
    src={imageUrl}
  />}
            </div>
            </div>
       
      </div>
      <div className="mb-4">
       
      </div>
      <div className="mb-4">
        <label htmlFor="companyDescription" className="block text-gray-700 text-sm font-bold mb-2">
         About Yourself
        </label>
        <TextArea
        name="about" id="about" 
        value={formData?.about}
      showCount
      maxLength={100}
      onChange={onChange}
      placeholder="Write about your self"
      style={{ height: 120, resize: 'none' }}
    />
      {error?.about && <span>{error?.about}</span>}
      </div>
     
      </form>
      
      <div className="flex justify-between ">
                <Button  className="bg-white text-black " size="large" onClick={()=>setCurrentStep(prev=>prev-1)}>
            Back
          </Button>
          <Button  className="bg-black text-white"  size="large" onClick={()=>setCurrentStep(prev=>prev+1)}>
            Next
          </Button>
                </div>
      </div>
      </main>
  )}
