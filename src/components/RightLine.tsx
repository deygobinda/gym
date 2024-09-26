import { CircleCheckBig } from "lucide-react"


function RightLine({value } : {value : string}) {
    return (
      <div className="flex space-x-4 mt-4">
       <CircleCheckBig className="text-green-500"/>
       <div className="font-semibold">{value}</div>
      </div>
    )
  }
  
  export default RightLine
  