import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import axios from "axios";
import Header from "Components/Header";
import Loader from "Components/Loader";
import Home from "Sections/Home";
import Users from "Sections/Users";
import Form from "Sections/Form";
import { getToken } from "Api";

import AppContext from "Contexts/appContext";

const defaultParams = {
  page: 1,
  count: 6,
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState(defaultParams);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getToken();
      axios.defaults.headers.common = { Token: token };
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        users,
        setUsers,
        setParams,
        params,
        defaultParams,
        setLoading,
        loading,
      }}
    >
      <Header />
      <main>
        <Home />
        <Users />
        <Form />
        <ToastContainer />
        <Loader visible={loading} />
      </main>
    </AppContext.Provider>
  );
};

export default App;
