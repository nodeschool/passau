import React from 'react'
import { Router, Head } from 'react-static'
import Routes from 'react-static-routes'
import './app.css'

export default () => (
  <div>
    <Head>
      <link rel={"stylesheet"} href={"https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css"}/>
      <title>NodeSchool Passau</title>
    </Head>
    <Router>
      <div className="content">
        <Routes />
      </div>
    </Router>
  </div>
)
