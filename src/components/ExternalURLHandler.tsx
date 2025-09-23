import { useEffect } from "react";

// This component will handle external URLs that users might try to access
// from the magazine or other external sources
const ExternalURLHandler = () => {
  useEffect(() => {
    // Check if the URL matches the path mentioned in the magazine
    const currentPath = window.location.pathname;
    const currentHost = window.location.host;
    
    // Specifically look for the pattern from the magazine: "bar-excellence.co.uk/blueprint"
    // This could be entered in various ways by users
    if (
      // Match exact URL from magazine
      (currentPath === "/bar-excellence.co.uk/blueprint") ||
      // Handle if they type it directly in the address bar with or without www
      (currentPath === "/blueprint" && 
       (currentHost === "bar-excellence.co.uk" || 
        currentHost === "www.bar-excellence.co.uk"))
    ) {
      // Redirect to the blueprint page on the current domain
      window.location.href = '/blueprint';
    }
  }, []);
  
  return null;
};

export default ExternalURLHandler;
