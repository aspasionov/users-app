import React, { useState } from 'react';
import Header from 'Components/Header'
import Home from 'Sections/Home'
import Users from 'Sections/Users'
import Form from 'Sections/Form'

import AppContext from "Contexts/appContext"

const App = () => {
  const [users, setUsers] = useState([{name: 'valeriy', age: 54}])
  return <AppContext.Provider value={{ users, setUsers }}>
  <Header/>
  <main>
    <Home/>
    <Users/>
    <Form/>
  </main>
  </AppContext.Provider>;
}

export default App;