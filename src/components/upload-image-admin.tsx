"use client";

import { UploadButton } from "@/lib/uploadthing";
import { UploadDropzone } from "@/lib/uploadthing";
import { UseFormReturn } from "react-hook-form";

export default function UploadProductImageAdmin({ form }: {
  form: UseFormReturn<{
    title: string;
    price: number;
    colors: string[];
    image?: string | undefined;
    description?: string | undefined;
    discountedPrice?: number | undefined;
    isFeatured?: boolean | undefined;
    category?: string | undefined;
    variants?: string[] | undefined;
  }, any, undefined>
}) {
  return (
    <main className="text-black flex flex-col  items-center justify-between ">
      <UploadButton
        // className=" border-dashed bg-slate-300 text-black border-2 p-24 border-black/50"
        endpoint="imageUploader"

        onClientUploadComplete={(res) => {
          // console.log("Files: ", res);
          // alert(`"Upload Completed ${res[0].url}"`);
          if (res[0].url) {
            alert(`Uploaded image ${res[0].url}`)
            form.setValue("image", res[0].url)
          }
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

    </main>
  );
}
