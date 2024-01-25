import { FileType } from "../types/types"
import Tag from "./Tag"

type PropsType = {
   headers: string[]
   parsedData: FileType[]
   setParsedData: React.Dispatch<React.SetStateAction<FileType[]>>
}
const Csv = ({ headers, parsedData, setParsedData }: PropsType) => {
   const handleSelect = ({e,id}: {e:React.ChangeEvent<HTMLSelectElement>,id:string}) => {
      // console.log(e.target.value)
      // console.log(id)
      setParsedData(current=>{
         return current.map(row=>{
            if(row.id!==id || row["selected tags"].includes(e.target.value)) return row
            // if(row["selected tags"].includes(e.target.value)) return row
            return {
               ...row,
               "selected tags": [...row["selected tags"], e.target.value],
            } // when id matches add e.target.value to the array in the field row["selected tag"]
         })
      })
   }
   if (parsedData.length === 0) return null
   return (
      <div className="p-2">
         <h1 className="text-xl font-bold mb-5">Uploads</h1>
         <div className="w-full bg-[#F5F5F5] rounded-md p-4">
            <table className="w-full text-left border-separate  border-spacing-y-3">
               <thead>
                  <tr>
                     {headers.map((header) => (
                        <th key={header} className="p-3 capitalize w-[77px]">
                           {header}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody className="overflow-auto">
                  {parsedData.map((row) => (
                     <tr key={row.id}>
                        <td className="p-3 md:rounded-s-md bg-transparent md:bg-neutral-50">
                           {row.id.length === 1 ? "0" + row.id : row.id}
                        </td>
                        <td className="p-3 rounded-s-md md:rounded-none bg-neutral-50">
                           <a
                              href={`http://${row.links}`}
                              className="underline text-indigo-500"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              {row.links}
                           </a>
                        </td>
                        <td className="p-3 bg-neutral-50">{row.prefix}</td>
                        <td className="p-3 bg-neutral-50">
                           <select
                              onChange={(e) => handleSelect({ e, id: row.id })}
                              className="border rounded-md p-1"
                           >
                              {row["select tags"].map((tag) => (
                                 <option key={tag} value={tag}>
                                    {tag}
                                 </option>
                              ))}
                           </select>
                        </td>
                        <td className="flex flex-nowrap p-3 gap-2 rounded-e-md bg-neutral-50">
                           {row["selected tags"].map((tag) => (
                              <Tag
                                 key={crypto.randomUUID()}
                                 tag={tag}
                                 id={row.id}
                                 setParsedData={setParsedData}
                              />
                           ))}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Csv
