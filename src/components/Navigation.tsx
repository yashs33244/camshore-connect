import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ShieldCheck,
  Loader,
  LogOut,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

const getInitials = (name) => {
  if (!name) return "U";
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const UserAvatar = ({ user, onClick }: any) => {
  const initials = getInitials(user.user_metadata?.full_name);
  const avatarUrl = user.user_metadata?.picture;

  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={onClick}>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={initials}
          className="w-8 h-8 rounded-lg object-cover border border-gray-200"
        />
      ) : (
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-medium">
          {initials}
        </div>
      )}
      <span className="text-sm font-medium">
        {user.user_metadata?.full_name || "User"}
      </span>
      <ChevronDown className="h-4 w-4 text-gray-500" />
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const handleDashboardClick = () => {
    navigate("/dashboard");
    setIsOpen(false);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-16 bg-white shadow-md fixed w-full z-50">
        <Loader className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">
              SecureVision
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-600 hover:text-primary">
              Products
            </a>
            <a href="#solutions" className="text-gray-600 hover:text-primary">
              Solutions
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary">
              About
            </a>
            {!user && (
              <Button variant="outline" className="mr-2">
                Request Demo
              </Button>
            )}

            {user ? (
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="focus:outline-none">
                    <UserAvatar user={user} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-white">
                    <div className="px-2 py-1.5 text-sm text-gray-500">
                      Signed in as {user.email}
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleDashboardClick}
                      className="cursor-pointer"
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer text-red-600"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <a
                href="/signup"
                className="font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
              >
                Sign Up
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#products"
                className="text-gray-600 hover:text-primary px-4"
              >
                Products
              </a>
              <a
                href="#solutions"
                className="text-gray-600 hover:text-primary px-4"
              >
                Solutions
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary px-4"
              >
                About
              </a>
              {!user && (
                <Button variant="outline" className="mx-4 mb-2">
                  Request Demo
                </Button>
              )}
              {user ? (
                <>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mx-4 px-4 py-2">
                      <UserAvatar user={user} />
                    </div>
                    <Button
                      variant="ghost"
                      onClick={handleDashboardClick}
                      className="mx-4 w-[calc(100%-32px)] justify-start"
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={handleLogout}
                      className="mx-4 w-[calc(100%-32px)] justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </>
              ) : (
                <a
                  href="/signup"
                  className="mx-4 px-4 py-2 flex items-center justify-center rounded-lg hover:bg-gray-100"
                >
                  <span className="font-medium">Sign Up</span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
