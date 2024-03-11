import React, { useState } from 'react';
import Header from 'Components/Header'
import Home from 'Sections/Home'
import Users from 'Sections/Users'
import Form from 'Sections/Form'

import AppContext from "Contexts/appContext"

const defaultParams = {
  page: 1,
  count: 6
}

const App = () => {
  const [users, setUsers] = useState([])
  const [params, setParams] = useState(defaultParams)
  return <AppContext.Provider value={{ users, setUsers, setParams, params }}>
  <Header/>
  <main>
    <Home/>
    <Users/>
    <Form/>
  </main>
  </AppContext.Provider>;
}

export default App;