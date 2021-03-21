import React, { Component } from 'react'

class Nav extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <nav>
                <div className="navItems" onClick={this.props.lessValue}><button>&#x3c; Previous</button></div>
                <div className="navItems">
                {/* <button> Edit </button> */}
                <button onClick={this.props.deleteUser}>  Delete ✖  </button>
                {/* <button> New</button> */}
            </div>
                <div className="navItems" onClick={this.props.moreValue}><button>More &#x3e;</button></div>
            </nav>
        )
    }
}

export default Nav;
