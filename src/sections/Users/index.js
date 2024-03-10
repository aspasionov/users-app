import React, { useContext, useEffect } from 'react';

import AppContext from "Contexts/appContext"
import { getUsers } from "Api"
import Container from 'Components/Container'
import Card from 'Components/Card'
import "./styles.sass"

const Users = () => {
  const {users, setUsers} = useContext(AppContext)

  useEffect(() => {
    (async() => {
      const data = await getUsers()
      console.log(data)
      setUsers(data)
    })()
  },[])

  const renderCards = () => {
    return users.map(el => (
      <Card user={el} className="users__card" key={el.id}/>
    ))
  }
  
  
  return <section className="users">
    <Container className="users__container">
      <h2 className="users__title">Working with GET request</h2>
      <div className="users__wrap">
        {renderCards()}
      </div>
    </Container>
  </section>;
}
export default Users;