import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          {" "}
          My Blogs{" "}
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      {/* post 1 */}
      <div className="post">
        <div classname="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2024/02/section3b-headset.webp?w=1390&crop=1"
            alt="PSP VR"
          />
        </div>
        <div>
          <h2>
            Sony’s PS VR2 is getting compatibility, possibly by end of year
          </h2>
          <p className="info">
            <a className="author">Pratik Patel</a> |
            <time>02-26-2024 11:35</time>
          </p>
          <p lassName="summery">
            PlayStation VR often gets overlooked in conversations about mixed
            reality. These days, it seems all anyone wants to talk about is
            Apple Vision Pro versus Meta Quest. But Sony has been an enduring
            presence in VR for years now, throughout the industry’s various ups
            and downs.
          </p>
        </div>
      </div>  
    </main>
  );
}

export default App;
