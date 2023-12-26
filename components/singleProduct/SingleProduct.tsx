'use client'

import Image from "next/image";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useAppContext } from "@/app/context/ContextCreator";

type ProductProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const SingleProduct = ({ id, title, price, image }: ProductProps) => {

  const {increment , decrement , removeItem , getquantity} = useAppContext()

  const quantity = getquantity(id);
  return (
    <div>
      <div className=" flex gap-4 flex-col items-center text-center border-[1px] border-gray-400 rounded-md py-4">
        <div>
          <Image
            alt="image"
            src={image}
            width={0}
            height={0}
            sizes="100%"
            className="w-full"
          />
        </div>

        <div className=" px-4 mx-auto">
          <span>{title}</span>
        </div>

        <div>
          <span>{price}</span>
        </div>

        {quantity ? (
          <div className=" flex items-center gap-4">
            <div onClick={() => increment(id)} className=" select-none text-3xl cursor-pointer">
              <CiSquarePlus />
            </div>
            <span className=" select-none">{getquantity(id)}</span>
            <div onClick={() => decrement(id)} className=" select-none text-3xl cursor-pointer">
              <CiSquareMinus />
            </div>
            <button onClick={() => removeItem(id)} className="bg-red-600 px-4 py-2 text-white rounded-md text-[12px] select-none">
              Remove
            </button>
          </div>
        ) : (
          <div onClick={() => increment(id)} className="bg-blue-600 px-4 py-2 text-white rounded-md text-[12px]">
            <button>Add To Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
