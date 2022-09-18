import "./body.css"
import bodypic from "../Image/photo.jpg"
function Body() {
    return ( 
        <>
            <div className="image">
                <img src={bodypic} alt="chobi"/>
            </div>
            <div className="image-footer">
                <ul>
                    <li className="Facebook"><a href="">facebook</a></li>
                    <li className="Google"><a href="">Google</a></li>
                    <li className="Pinterest"><a href="">Pinterest</a></li>
                    <li className="dribble"><a href="">dribble</a></li>
                </ul>

            </div>
        </>
     );
}

export default Body;