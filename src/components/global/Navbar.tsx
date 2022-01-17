function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-md">
  <a className="navbar-brand" href="/" style={{paddingLeft: "100px"}}>Sean B.</a>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/media-tracker">Media Tracker</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
