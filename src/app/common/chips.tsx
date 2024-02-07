import { IoClose } from "react-icons/io5";

interface ChipsProps {
    items: string[];
}

const Chips: React.FC<ChipsProps> = ({ items }) => {
    console.log(items, "items");
    return (
        <div className="flex flex-row flex-wrap gap-4">
            { items.map((item, index) => {
                return (
                    <div className="chips " key={index}>
                    <span className="text-xs">{item}</span>
                    <IoClose color="white" />
                </div>
                )
             
                })}
        </div>
    );
};

export default Chips;
