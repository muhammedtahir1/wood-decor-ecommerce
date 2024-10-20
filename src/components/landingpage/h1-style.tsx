interface HeadingProps {
    text: string
  }
  
  export default function Heading({ text }: HeadingProps) {
    return (
      <div className="flex items-center justify-center w-full ">
        <div className="h-px bg-[#DEE1E0] flex-grow max-w-[100px]" />
        <h2 className="mx-2 text-xl md:text-3xl font-bold text-center uppercase tracking-wider">
          {text}
        </h2>
        <div className="h-px bg-[#DEE1E0]  flex-grow max-w-[100px]" />
      </div>
    )
  }
