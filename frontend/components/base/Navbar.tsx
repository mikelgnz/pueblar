import { useUser } from "@/lib/context/useUser";
import Link from "next/link";
import tw from "twin.macro";
import { FaUserAlt } from "react-icons/fa";

const NavbarLink: React.FC<{ children: any; href: string; user?: boolean }> = ({
  children,
  href,
  user,
}) => {
  return (
    <Link
      href={href}
      css={[
        tw`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`,
        !user && tw`hover:text-purple-400 hover:border-purple-400`,
        user &&
          tw`bg-slate-500 text-white flex gap-2 items-center hover:bg-core`,
      ]}
    >
      {user && <FaUserAlt />}
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const {
    user: { name },
  } = useUser();

  return (
    <nav tw="bg-[#d4a373] border-gray-200 dark:bg-[#d4a373]">
    <div tw="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="pueblar.com" tw="flex items-center">
        <img src="/logoPB_light.png" tw="h-8 mr-3" alt="Pueblo" />
    </a>
    <div tw="flex md:order-2">
        <button type="button" tw="text-[#d4a373] bg-[#ccd5ae] hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-[#ccd5ae] hover:scale-110">Get started</button>
    </div>
    <div tw="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul tw="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#d4a373] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" tw="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-[#ccd5ae] md:p-0">Home</a>
        </li>
        <li>
          <a href="#news" tw="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ccd5ae] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">News</a>
        </li>
        <li>
          <a href="#pueblohouses" tw="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ccd5ae] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pueblo Houses</a>
        </li>
        <li>
          <a href="#resources" tw="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#ccd5ae] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  );
};
