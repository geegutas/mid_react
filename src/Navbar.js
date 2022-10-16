const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <h3 className="text-center w-20">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/venues">Venues</a>
                </li>
                </ul>
            </div>
            </h3>
        </nav>
    );
}
 
export default Navbar;