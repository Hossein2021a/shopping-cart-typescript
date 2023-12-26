import SingleProduct from '@/components/singleProduct/SingleProduct'
import Alldata from "../data.json"

export default function Home() {
  return (
    <div className=' grid grid-cols-3 gap-4 px-[150px] mt-8'>

      {Alldata.map((item)=>(
      <SingleProduct key={item.id} {...item} />

      ))}

    
    </div>
  )
}
