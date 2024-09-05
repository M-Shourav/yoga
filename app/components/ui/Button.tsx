import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
}
const Button = ({ children, className, href }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "text-base text-white bg-hoverColor hover:bg-black hover:text-white px-6 py-3 rounded-full duration-500",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(
            "text-base text-gray-800 px-6 py-2 font-semibold tracking-wide rounded-full border border-hoverColor hover:bg-hoverColor hover:text-white duration-200",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
