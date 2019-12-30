




import React from 'react'

import { Link } from 'react-router-dom' ; 

// style a little bit

function menu() {
    return (
        <ul>
            <Link to='/app' > Go to App  </Link>
            <Link to='/guid'> Guid </Link>
            <Link to='/about-me'> about-me  </Link>

        </ul>
    )
}

export default menu
