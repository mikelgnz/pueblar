import Link from "next/link";

export const NewHouseButton: React.FC<{
  children: any;
  href: string;
}> = ({ children, href }) => {
  return (
    <Link
      href={href}
      tw="bg-white text-black uppercase transition-all py-3 px-3 border-b-2 border-slate-200 shadow-xl rounded-lg hover:text-[#e1e6cf] hover:border-[#e1e6cf]"
    >
      {children}
    </Link>
  );
};