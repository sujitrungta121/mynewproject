import React from 'react';

type DropDownProps = {
  dropDownItem: string[];
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropDown: React.FC<DropDownProps> = ({ dropDownItem, setDropDown }) => {
  const handleMouseEnter = () => {
    console.log("mouse entered")
    setDropDown(true);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave")

    setDropDown(false);
  };

  return (
    <main
      className="bg-white z-2 flex flex-col absolute top-6 right-6 w-40 gap-2 visible  p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {dropDownItem.map((item) => (
        <div key={item} className="border-b p-2">
          <span className="text-sm">{item}</span>
        </div>
      ))}
    </main>
  );
};

export default DropDown;
