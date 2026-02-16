const HrLogin = (setPage) => {
  return (
    <>
      <h2>HR Login</h2>
      <input type="text" placeholder="HR Username" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button>Login</button>
       <button onClick={() => setPage("home")}>Back</button>
    </>
  );
};

export default HrLogin;
