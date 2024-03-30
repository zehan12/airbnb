import { UserMenu } from "@/components/shared/UserMenu/user-menu";
import { Button } from "@/components/ui/button";
import Airbnb from "@/svg/airbnb";
import { Bell, Github, MagnetIcon } from "lucide-react";

const Header = () => {

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

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <header>
        <div className="mx-auto w-full px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
          <div className="relative flex h-16 my-5">
            <div className=" relative z-10 flex px-2 lg:px-0">
              <div className="flex flex-shrink-0 items-center">
                <Airbnb />
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-center items-center my-10 gap-3">
              <div className="flex space-x-4 py-4">
                {navigation.map((item) => (
                  <div className="px-6" key={item.name}>
                    {item.name}
                  </div>
                ))}
              </div>
              <div className="flex justify-evenly items-center bg-red-700 w-8/12 rounded-full">
                {navigation1.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-start px-7 py-2 items-center h-16"
                  >
                    <h3 className="w-full">{item.name}</h3>
                    <p className="text-sm">{item.options}</p>
                  </div>
                ))}
                <MagnetIcon className="w-12 h-12 p-2 -mr-2.5 bg-red-500 text-white rounded-full" />
              </div>
            </div>

            <div className="lg:flex lg:items-center justify-center space-x-3">
              <Button variant={"ghost"}>
                <Bell className="h-6 w-6" ar7xlia-hidden="true" />
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
        <div className="lg:hidden"></div>
      </header>
    </>
  );
};

export default Header;
