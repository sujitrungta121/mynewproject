
interface DropDownProps {
    data: { id: number, title: string }[];
    onItemClick: (item: string) => void;
    setFormData:React.Dispatch<React.SetStateAction<any>>;
    formData:any;
}

const DropDown: React.FC<DropDownProps> = ({ data, onItemClick,setFormData,formData }) => {

    console.log(formData,"in the dropdonw")
    return (
        <div className="bg-white flex flex-col p-4 gap-4 shadow-md  w-full">
            {data.map((item) => (
                <div key={item.id} className="dropdown-item" onClick={() =>{setFormData({...formData,interests:item.title}); onItemClick(item.title)}}>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default DropDown;
