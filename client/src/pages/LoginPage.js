const LoginPage = () => {
    return (
      <>
        <form className="login">
          <h1>Login</h1>
          <input type="text" placeholder="Enter your Username" />
          <input type="password" placeholder="Enter your password" />
          <button>Login</button>
        </form>
      </>
    );
}
 
export default LoginPage;