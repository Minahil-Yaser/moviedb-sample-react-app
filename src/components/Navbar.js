import "./css/navbar.css";

const Navbar = () =>{

    return(
        <>
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand" href="/moviedb-sample-react-app">MovieTV</a>
                </div>
                <ul className="nav navbar-nav">
                <li className="active"><a href="/moviedb-sample-react-app">Home</a></li>
                <li><a href="/moviedb-sample-react-app/movies">Movies</a></li>
                <li><a href="/moviedb-sample-react-app/tv_shows">TV Shows</a></li>
                <li><a href="/moviedb-sample-react-app/people">People</a></li>
                </ul>
                <form className="navbar-form navbar-left" action="/moviedb-sample-react-app/results">
                    <select className="form-select mr-sm-2" name="type">
                    <option value="movie">Movie</option>
                    <option value="tv">TV Show</option>
                    <option value="person">Person</option>
                    </select>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" name="search" />
                        <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <i className="glyphicon glyphicon-search"></i>
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </nav>


        </>

    );
}

export default Navbar;
