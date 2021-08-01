export const isLoggedIn = () => {
    /*
     * Check if user is logged in and has token
     */
    if (localStorage.getItem("token")) {
      return true;
    }
  
    return false;
  };
  
  export const logout = () => {
    /*
     * Remove token of localStorage
     */
  
    localStorage.removeItem("token");
    window.location.reload();
  };