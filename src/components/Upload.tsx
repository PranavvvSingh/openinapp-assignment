import React, { useCallback, useState } from "react"
import Papa from "papaparse"
import { useDropzone, FileWithPath } from "react-dropzone"
import { RawFileType, FileType } from "../types/types"
import { MdOutlineFileUpload as UploadIcon } from "react-icons/md"
import excel from "../assets/excel.png"

type PropsType = {
   parsedData: FileType[]
   setHeaders: React.Dispatch<React.SetStateAction<string[]>>
   setParsedData: React.Dispatch<React.SetStateAction<FileType[]>>
}

const Upload = ({ parsedData, setHeaders, setParsedData }: PropsType) => {
   const [fileName, setFileName] = useState("")
   const [uploadFile, setUploadFile] = useState<FileType[]>([])

   const onDrop = useCallback(
      (acceptedFiles: FileWithPath[]) => {
         const file = acceptedFiles[0]
         setFileName(file.path || "")
         Papa.parse<RawFileType>(file, {
            complete: (result) => {
               setHeaders(result.meta["fields"] || [])
               const data = result.data.map((item) => ({
                  ...item,
                  "select tags": item["select tags"]
                     .split(",")
                     .map((tag) => tag.trim()),
                  "selected tags":
                     item["selected tags"] === ""
                        ? []
                        : item["selected tags"]
                             .split(",")
                             .map((tag) => tag.trim()),
               })) as FileType[]
               setUploadFile(data)
            },
            header: true,
            skipEmptyLines: true,
         })
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
   )

   const confirmUpload = () => {
      setParsedData(uploadFile)
      setUploadFile([])
      setFileName("")
   }

   const removeUpload = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      e.stopPropagation()
      setUploadFile([])
      setFileName("")
   }

   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

   return (
      <div className="w-full flex flex-col justify-center items-center h-[300px] gap-2">
         <form className="flex flex-col justify-center items-center h-[200px] w-1/2 border-2 border-dashed rounded-lg">
            <div
               {...getRootProps()}
               className={`dropzone ${
                  isDragActive ? "active" : ""
               } flex flex-col items-center justify-center w-full h-full text-neutral-400 gap-2`}
            >
               <input {...getInputProps()} />
               {isDragActive ? (
                  <p className="">Drop the files here ...</p>
               ) : (
                  <>
                     <img src={excel} alt="" className="w-[50px]" />
                     {!fileName && (
                        <p className="text-center">
                           Drop your excel sheet here or
                           <span className="underline ml-1 text-indigo-500 cursor-pointer">
                              browse
                           </span>
                        </p>
                     )}
                     {fileName && (
                        <p>{fileName}</p>
                     )}
                     {fileName && (
                        <span
                           onClick={(e) => removeUpload(e)}
                           className="text-red-600 cursor-pointer"
                        >
                           Remove
                        </span>
                     )}
                  </>
               )}
            </div>
         </form>
         <button
            onClick={confirmUpload}
            className={`w-1/2 bg-indigo-500 p-2 rounded-md text-white flex justify-center items-center gap-1 ${
               uploadFile.length === 0 ? "bg-indigo-300 cursor-not-allowed" : ""
            }`}
         >
            <UploadIcon className="text-xl" />
            Upload
         </button>
      </div>
   )
}

export default Upload
