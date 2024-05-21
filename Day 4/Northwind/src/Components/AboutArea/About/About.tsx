import { LinkedIn } from "../LinkedIn/LinkedIn";
import { Song } from "../Song/Song";
import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
			🐶

            <LinkedIn />

            <Song />
            
        </div>
    );
}

// Lazy loading demands an export default for the component:
export default About;
