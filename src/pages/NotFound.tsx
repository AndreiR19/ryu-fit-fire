import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-black mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Oops! This page doesn't exist</p>
        <a 
          href="/" 
          className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover-lift transition-all"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
