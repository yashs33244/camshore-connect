import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const UserAvatar = ({ user }) => {
  const initials = getInitials(user.user_metadata?.full_name);
  const avatarUrl = user.user_metadata.avatar_url;

  return (
    <div className="flex items-center gap-2">
      {avatarUrl ? (
        <img
          src={avatarUrl}
          // alt={initials}
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
        console.log(user);
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
    navigate('/dashboard');
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
                <Button variant="ghost" onClick={handleDashboardClick}>
                  Dashboard
                </Button>
                <UserAvatar user={user} />
              </div>
            ) : (
              <a href="/signup" className="font-medium">
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
                  <Button
                    variant="ghost"
                    onClick={handleDashboardClick}
                    className="mx-4"
                  >
                    Dashboard
                  </Button>
                  <div className="mx-4 px-4 py-2 flex items-center rounded-lg hover:bg-gray-100">
                    <UserAvatar user={user} />
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