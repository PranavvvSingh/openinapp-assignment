import Csv from "./Csv"
import UploadSection from "./UploadSection"
import { FileType } from "../types/types"
import { useState } from "react"

const Upload = () => {
   const [headers, setHeaders] = useState<string[]>([])
   const [parsedData, setParsedData] = useState<FileType[]>([])
   return (
      <div className="w-full md:w-[calc(100%-300px)] p-2 mt-5 md:p-5 md:mt-0">
         <h1 className="text-xl font-bold">Upload CSV</h1>

         <UploadSection
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

export default Upload
