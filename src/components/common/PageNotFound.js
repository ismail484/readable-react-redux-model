import React, {PropTypes} from 'react';


const PageNotFound = ({props}) => {
    return (
        <div className="jumbotron">
            <h1 className="display-1">Page Not Found</h1>
            <p className="lead">404 Error</p>
            <p>No match for the link <code>{props.location.pathname}</code></p>
        </div>
    );
};



// PageNotFound.propTypes = {
//     location: PropTypes.object.isRequired
// };



export default PageNotFound;
