import React, {Component} from "react";
import '../styles/App.css';
import RelationCalculator from "./RealtionCalculator.js";


class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <RelationCalculator/>
            </div>
        )
    }
}


export default App;
