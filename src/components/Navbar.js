import React from 'react'
import { connect } from 'react-redux'
import { accountSelector } from '../store/selectors'

const Navbar = (props) => {
  
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#/">NFT creator</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link small"
              href={`https://etherscan.io/address/${props.account}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.account}
            </a>
          </li>
        </ul>
      </nav>
    )
}

function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(Navbar)
