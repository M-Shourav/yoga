import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={twMerge(
        "text-2xl text-gray-700 font-medium font-titleFont tracking-wide",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
