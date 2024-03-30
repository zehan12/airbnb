import { UserMenu } from "@/components/shared/UserMenu/user-menu";
import { Button } from "@/components/ui/button";
import Airbnb from "@/svg/airbnb";
import { Bell, Github, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Import classNames

const Header = () => {
  const [isSearchExpanded, setSearchExpanded] = useState(true);

  const navigation = [
    { name: "Stays", href: "#", to: true },
    { name: "Experience", href: "#", to: false },
    { name: "Other Experiences", href: "#", to: false },
  ];

  const navigation1 = [
    { name: "Stays", options: "Search destination", to: true },
    { name: "Experience", options: "Search destination", to: false },
    { name: "Other Experiences", options: "Search destination", to: false },
  ];

  const navigation2 = [
    { name: "Stays", options: "Search destination", to: true },
    { name: "Experience", options: "Search destination", to: false },
    { name: "Other Experiences", options: "Search destination", to: false },
  ];

  useEffect(() => {
    const handleScroll = () => setSearchExpanded(window.scrollY >= 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="lg:mb-48">
        <div
          className={cn(
            "lg:block hidden fixed top-1 mx-auto w-full px-2 sm:px-4 divide-y divide-gray-200 backdrop-blur-xl border-b-[1px] transition-all duration-500",
            isSearchExpanded ? "h-22" : "h-44"
          )}
        >
          <div className="relative flex h-16 my-5">
            <div className=" relative z-10 flex px-2">
              <div className="flex flex-shrink-0 items-center">
                <Airbnb />
              </div>
            </div>

            <div
              className={cn(
                "w-full h-full flex flex-col justify-center items-center transition-all",
                isSearchExpanded ? "my-0" : "my-10"
              )}
            >
              <div
                className={cn("flex space-x-4 py-4 transition-opacity", {
                  hidden: isSearchExpanded,
                })}
              >
                {navigation.map((item) => (
                  <div className="px-6 pb-3" key={item.name}>
                    {item.name}
                  </div>
                ))}
              </div>
              <div
                className={cn(
                  "flex justify-evenly items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-full transition-width",
                  {
                    "w-4/12 h-12": isSearchExpanded,
                    "w-8/12": !isSearchExpanded,
                  }
                )}
              >
                {isSearchExpanded
                  ? navigation2.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-start items-center text-md py-4 h-14"
                      >
                        <h3 className="w-full">{item.name}</h3>
                      </div>
                    ))
                  : navigation1.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col justify-start px-7 py-2 items-center h-16"
                      >
                        <h3 className="w-full">{item.name}</h3>
                        <p className="text-sm">{item.options}</p>
                      </div>
                    ))}
                <Search
                  className={cn(
                    "p-2 -mr-2.5 bg-red-500 text-white rounded-full",
                    {
                      "w-9 h-9 -mr-6": isSearchExpanded,
                      "w-12 h-12 p-3 -mr-12": !isSearchExpanded,
                    }
                  )}
                />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Button variant={"ghost"}>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </Button>

              <UserMenu />
              <Button variant={"ghost"}>
                <a>
                  <Github />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:hidden block">
          <h1>Mobile first</h1>
        </div>
        
      </header>
    </>
  );
};

export default Header;
