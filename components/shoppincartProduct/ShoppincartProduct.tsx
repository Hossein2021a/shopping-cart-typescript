import alldata from "../../data.json";
import Image from "next/image";
import { useAppContext } from "@/app/context/ContextCreator";

type itemProps = {
  id: number;
  quantity: number;
};

const ShoppincartProduct = ({ id, quantity }: itemProps) => {
  const data = alldata.find((item) => item.id === id);
  if (data == null) return null;
  const {removeItem} = useAppContext()

  return (
    <div className=" border-b-[1px] border-gray-500 flex items-center gap-4 justify-between">
      <div>
        <Image
          src={data.image}
          alt="image"
          width={0}
          height={0}
          sizes="100%"
          className="w-[65%]"
        />
      </div>
     
      <div className="flex items-center gap-1 w-full">
        <span>{data.price}</span>
        <span>*{quantity}</span>
        <span> = {data.price * quantity}</span>
      </div>

      <div onClick={() => removeItem(id)} className=" flex items-center 
      cursor-pointer text-white bg-red-600 px-3 py-1 rounded-md" >
        <button className="text-[12px] text-red">Remove</button>
      </div>
    </div>
  );
};

export default ShoppincartProduct;
