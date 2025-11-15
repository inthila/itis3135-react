import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <h1>Inthila Chanthirat's Interesting Capybara | ITIS3135</h1>
      
      {/* This is your primary nav, shortened as requested.
        Note the use of <Link> for internal app routing. 
      */}
      <nav className="primary">
        <Link to="/">Home</Link> | 
        <Link to="/introduction">Introduction</Link> | 
        <Link to="/contract">Contract</Link>
      </nav>

      {/* This is your secondary nav.
        Note it still uses <a> tags because these links go
        to *external* pages, outside of this React app.
      */}
      <nav className="secondary">
        <a href="mascotcompany/index.html">Interesting Capybara</a> |
        <a href="projects/stuff/WEB%20page%20%3A%29.htm">CrApPy Page</a> |
        <a href="hobby/index.html">Hobby</a> | 
        <a href="projects/index.html">Sophie's Cakeshop</a> 
      </nav>
    </>
  );
}

export default Header;