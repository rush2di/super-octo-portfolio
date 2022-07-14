import { CopyWritingProps } from "./types";

const CopyWriting = ({ title, text }: CopyWritingProps) => {
  return (
    <div className="w-full">
      <h2 className="txt-h3 italic text-gray-900">{title}</h2>
      <p className="mr-0-25 whitespace-pre-line mb-4">{text}</p>
    </div>
  );
};

export default CopyWriting;
