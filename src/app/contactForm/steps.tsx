'use client'

import React from 'react';
import { Steps } from 'antd';

const { Step: AntStep } = Steps;

const steps = [
  {
    // title: 'Step 1',
    // content: {currentStep===0 && <FirstPage />},
  },
  {
    // title: 'Step 2',
    // content: {currentStep===1 && <ThirdForm />},
  },
  {
    // title: 'Step 3',
    // content: {currentStep<FourthForm />},
  },
  {

  }
];

export default function StepForm({ setCurrentStep, currentStep }: { setCurrentStep: React.Dispatch<React.SetStateAction<number>>, currentStep: number }) {
  const handleClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <Steps current={currentStep} direction="horizontal"className="xl:w-[15%] 2xl:w-[15%] lg:w-[20%] md:w-[30%] sm:w-[30%] w-[50%] hover:cursor-pointer ant-steps ant-steps-item-finish ant-steps-item-icon " >
      {steps.map((item, index) => (
        <AntStep key={index}   onClick={() => {handleClick(index);console.log(currentStep,index)} }/>
      ))}
    </Steps>
  );
}
