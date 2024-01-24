import Csv from "./Csv"
import Upload from "./Upload"
import { FileType } from "../types/types"
import { useState } from "react"

const Main = () => {
   const [headers, setHeaders] = useState<string[]>([])
   const [parsedData, setParsedData] = useState<FileType[]>([])
   return (
      <div className="w-full p-2 mt-5 md:p-5 md:mt-0">
         <h1 className="text-xl font-bold">Upload CSV</h1>

         <Upload
            setHeaders={setHeaders}
            parsedData={parsedData}
            setParsedData={setParsedData}
         />
         <Csv
            headers={headers}
            parsedData={parsedData}
            setParsedData={setParsedData}
         />
      </div>
   )
}

export default Main
