import { LoaderCircle } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <LoaderCircle className="ml-2 animate-spin" />
    </div>
  );
};

export default page;
