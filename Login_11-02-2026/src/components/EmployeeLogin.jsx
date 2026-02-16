const EmployeeLogin = (setPage) => {
  return (
    <>
      <h2>Employee Login</h2>
      <input type="text" placeholder="Employee Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Login</button>
       <button onClick={() => setPage("home")}>Back</button>

    </>
  );
};

export default EmployeeLogin;
