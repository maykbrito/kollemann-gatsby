/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./sections/header"
import About from "./sections/about"
import Gallery from "./sections/gallery"


import "./layout.css"


class Layout extends React.Component {

  componentDidMount() {
      // const AOS = require('aos');
      this.aos = AOS
      this.aos.init()
      console.log(this.aos)
  }

  componentDidUpdate() {
      this.aos.refresh()
  }

  render() {
    const {children} = this.props
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Header />

            <About></About>

            <Gallery></Gallery>
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >

              <main>
              {children}
              
              </main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </>
        )}
      />
    )
  }

        }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
