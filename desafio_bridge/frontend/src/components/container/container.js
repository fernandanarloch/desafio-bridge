import "./styles.css"
import React from "react";

class Container extends React.Component {
    
    render () {
        return(
            <div className = 'container'>
                Divisores de {this.props.number}: {this.props.divisors}
                <br/>
                {this.props.prime}!
            </div>
        );
    }
}

export default Container
