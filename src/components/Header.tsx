import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="">
      <div className="container flex items-center justify-between mx-auto px-4 py-5">
        <div className="text-lg font-bold text-gray-900">Indonesian Address</div>
        <div className=" gap-2 items-center hidden sm:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-800 font-semibold hover:bg-gray-100 px-4 py-1 rounded-2xl duration-200 ${
                isActive ? "bg-gray-200  " : ""
              }`
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/address"
            className={({ isActive }) =>
              `text-gray-800 font-semibold hover:bg-gray-100 px-4 py-1 rounded-2xl duration-200 ${
                isActive ? "bg-gray-200  " : ""
              }`
            }
          >
            Alamat
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `text-gray-800 font-semibold hover:bg-gray-100 px-4 py-1 rounded-2xl duration-200 ${
                isActive ? "bg-gray-200  " : ""
              }`
            }
          >
            Cari
          </NavLink>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="block sm:hidden">
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>
                <div className="text-lg font-bold text-gray-900 text-left">Indonesian Address</div>
              </SheetTitle>
              <SheetDescription>
                <div className=" gap-2 flex flex-col items-start  ">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-gray-800 text-left w-full font-semibold hover:bg-gray-800 px-3 py-2 rounded-sm hover:text-white ${
                        isActive ? "bg-gray-800 text-white duration-200  " : ""
                      }`
                    }
                  >
                    Beranda
                  </NavLink>

                  <NavLink
                    to="/address"
                    className={({ isActive }) =>
                      `text-gray-800 text-left w-full font-semibold hover:bg-gray-800 px-3 py-2 rounded-sm hover:text-white ${
                        isActive ? "bg-gray-800 duration-200 text-white" : ""
                      }`
                    }
                  >
                    Alamat
                  </NavLink>
                  <NavLink
                    to="/search"
                    className={({ isActive }) =>
                      `text-gray-800 text-left w-full font-semibold hover:bg-gray-800 px-3 py-2 rounded-sm hover:text-white ${
                        isActive ? "bg-gray-800 text-white duration-200  " : ""
                      }`
                    }
                  >
                    Cari
                  </NavLink>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
