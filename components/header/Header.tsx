"use client";

import Image from "next/image";
import { PiBasket } from "react-icons/pi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppContext } from "@/app/context/ContextCreator";
import ShoppincartProduct from "../shoppincartProduct/ShoppincartProduct";
import alldata from "../../data.json";

const Header = () => {
  const { allItems, cartquantity } = useAppContext();
  return (
    <div className="bg-blue-100">
      <div className="flex items-center justify-between px-[150px] py-6">
        <div>
          <Image
            alt="logo"
            src="./logo.svg"
            width={0}
            height={0}
            sizes="100%"
            className="w-[100%]"
          />
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <div className="relative cursor-pointer">
              <div className="border-[1px] border-blue-500 py-2 px-2 rounded-full">
                <PiBasket className="text-gray-600 text-2xl" />
              </div>
              <span
                className=" bg-rose-800 text-white rounded-full px-1 text-[12px] absolute top-[-3px] 
          right-[-5px]"
              >
                {cartquantity()}
              </span>
            </div>
          </SheetTrigger>
          <SheetContent className="pt-[50px]">
            {allItems.map((item) => (
              <ShoppincartProduct key={item.id} {...item} />
            ))}


            <div className="mt-8">
              <span>Total : </span>
              {allItems.reduce((total, item) => {
                const itemCart = alldata.find((i) => i.id === item.id);
                return total + (itemCart?.price || 0) * item.quantity;
              }, 0)}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
