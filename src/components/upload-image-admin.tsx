"use client";

import { UploadButton } from "@/lib/uploadthing";
import { UploadDropzone } from "@/lib/uploadthing";
import { validateUrl } from "@/lib/utils";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";

export default function UploadProductImageAdmin({
  // form,
  inputImageUrl,
  setInputImageUrl,
}: {
  // form: UseFormReturn<
  //   {
  //     title: string;
  //     // price: number;
  //     colors: string[];
  //     image?: string | undefined;
  //     description?: string | undefined;
  //     discountedPrice?: number | undefined;
  //     isFeatured?: boolean | undefined;
  //     category?: string | undefined;
  //     variants?: string[] | undefined;
  //     rating?: number | undefined;
  //   },
  //   any,
  //   undefined
  // >;
  setInputImageUrl: Dispatch<SetStateAction<string | undefined>>;
  inputImageUrl: string | undefined;
}) {

  return (
    <div>
      {validateUrl(inputImageUrl as string) && (
        <Image
          className="mx-auto rounded-xl"
          src={inputImageUrl as string}
          width={90}
          height={90}
          alt={"invalid url"}
        />
      )}
      <main className="text-black flex flex-col  items-center justify-between ">
        <UploadButton
          // className=" border-dashed bg-slate-300 text-black border-2 p-24 border-black/50"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res[0].url) {
              // alert(`Uploaded image ${res[0].url}`)
              // form.setValue("image", res[0].url)
              setInputImageUrl(res[0].url);
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      </main>
    </div>
  );
}
