import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { QrCode, MapPinCheck, MapPin } from "lucide-react";

const AttendanceNavbar = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <MapPinCheck className="h-5 w-5 mr-2" />,
    },
    {
      name: "Events",
      path: "/events",
      icon: <MapPin className="h-5 w-5 mr-2" />,
    },
    {
      name: "Scan QR",
      path: "/scan",
      icon: <QrCode className="h-5 w-5 mr-2" />,
    },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-purple-600">QrazyAttendance</h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={location.pathname === item.path ? "default" : "ghost"}
                    className={cn(
                      "flex items-center justify-center",
                      location.pathname === item.path
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "text-gray-700 hover:text-purple-600"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Admin User</span>
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile bottom navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="grid grid-cols-3">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="flex flex-col items-center py-2">
              <Button
                variant="ghost"
                className={cn(
                  "flex flex-col items-center justify-center h-auto py-1 w-full",
                  location.pathname === item.path
                    ? "text-purple-600"
                    : "text-gray-500"
                )}
              >
                {item.icon}
                <span className="text-xs mt-1">{item.name}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default AttendanceNavbar;
