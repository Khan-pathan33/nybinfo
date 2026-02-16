const AdminLogin = (setPage) => {
  return (
    <>
      <h2>Admin Login</h2>
      <input type="text" placeholder="Admin Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Login</button>
       <button onClick={() => setPage("home")}>Back</button>
    </>
  );
};

export default AdminLogin;
