import "./navbar.css"


function Navbar() {
    return (
    <>
        <div className="menu">
            <div className="logo">
                <a href="">Manifold</a>
            </div>
            
           <ul>
            <li><a href="">For Properties</a></li>
            <li><a href="">For Renters</a></li>
            <li><a href="">Pricing</a></li>
            <li className="login"><a href="">Login</a></li>
           </ul>
       
        </div>
       
    </>
     );
}

export default Navbar;