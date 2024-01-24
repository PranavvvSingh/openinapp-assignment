export type RawFileType = {
   id: string
   links: string
   prefix: string
   "select tags": string
   "selected tags": string
}
export type FileType = {
   id: string
   links: string
   prefix: string
   "select tags": string[]
   "selected tags": string[]
}