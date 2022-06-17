import React from 'react'

const Header = ({ title }) => {

    return (
        <h1 style={{ textAlign: "center" }}>
            Github Username Searcher
        </h1>
    )
}
Header.defaultProps = {
    title: "Default Title"
}

export default Header