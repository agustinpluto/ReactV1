const Nav = (props) => {
    return (
        <nav>
            <ul class="holder">
                <li><a href="home.html">Home</a></li>
                <li><a href="plantapedia.html">Plantpedia</a></li>
                <li><a href="tutoriales.html">Tutoriales</a></li>
                <li><a class="activo" href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Nav;