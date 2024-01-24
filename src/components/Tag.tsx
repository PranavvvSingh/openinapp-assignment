import { RxCross2 as Cross } from "react-icons/rx"
import { FileType } from "../types/types"

const Tag = ({
   tag,
   setParsedData,
   id,
}: {
   tag: string
   setParsedData: React.Dispatch<React.SetStateAction<FileType[]>>
   id: string
}) => {
   return (
      <button className="inline-flex gap-x-1 items-center bg-indigo-500 p-1 m-1 rounded-md text-white">
         {tag}
         <Cross onClick={()=>setParsedData(current=>{
            return current.map(row=>{
               if(row.id!==id) return row
               return{
                  ...row,
                  "selected tags": row["selected tags"].filter(item=>item!==tag)
               }
            })
         })} />
      </button>
   )
}

export default Tag
