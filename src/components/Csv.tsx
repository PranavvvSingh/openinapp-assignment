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
         <div className="w-full bg-neutral-200 rounded-md p-4">
            <table className="table-auto w-full text-left border-separate  border-spacing-y-3">
               <thead>
                  <tr>
                     {headers.map((header) => (
                        <th key={header} className="p-3 capitalize">
                           {header}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody className="overflow-auto">
                  {parsedData.map((row) => (
                     <tr key={row.id}>
                        <td className="p-3 rounded-s-md bg-neutral-50">
                           {row.id.length === 1 ? "0" + row.id : row.id}
                        </td>
                        <td className="p-3 bg-neutral-50">
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
                        <td className="p-1 rounded-e-md bg-neutral-50">
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
