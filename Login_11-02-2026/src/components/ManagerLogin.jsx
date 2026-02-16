const ManagerLogin = (setPage) => {
  return (
    <>
      <h2>Manager Login</h2>
      <input type="text" placeholder="Manager Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
       <button onClick={() => setPage("home")}>Back</button>
    </>
  );
};

export default ManagerLogin;
