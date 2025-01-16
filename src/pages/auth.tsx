// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { supabase } from "@/lib/supabase";

// const AuthCallback = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     supabase.auth.onAuthStateChange((event, session) => {
//       if (event === "SIGNED_IN" && session) {
//         navigate("/dashboard"); // or wherever you want to redirect after successful auth
//       }
//     });
//   }, [navigate]);

//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="text-center">
//         <h2 className="text-2xl font-semibold mb-2">Authenticating...</h2>
//         <p className="text-gray-600">Please wait while we log you in.</p>
//       </div>
//     </div>
//   );
// };

// export default AuthCallback;
