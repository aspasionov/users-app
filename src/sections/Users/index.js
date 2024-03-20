import React, { useContext, useEffect, useRef } from "react";

import AppContext from "Contexts/appContext";
import { toast } from "react-toastify";
import { getUsers } from "Api";
import Container from "Components/Container";
import Card from "Components/Card";
import Button from "Components/Button";
import "./styles.sass";

const Users = () => {
  const { users, setUsers, params, setParams, setLoading } =
    useContext(AppContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getUsers(params);
        setUsers(data);
      } catch (err) {
        toast.error(err?.message || "Smth went wrong, try again!");
      } finally {
        setLoading(false);
      }
    })();
  }, [params]);

  useEffect(() => {
    if (params.count === 6) return;
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [users]);

  const renderCards = () => {
    return users
      .sort((a, b) => b.registration_timestamp - a.registration_timestamp)
      .map((el) => <Card key={el.id} user={el} className="users__card" />);
  };

  const handleClick = () => {
    setParams((prev) => ({
      ...prev,
      count: prev.count + 6,
    }));
  };

  return (
    <section className="users" id="users" ref={sectionRef}>
      <Container className="users__container">
        <h2 className="users__title">Working with GET request</h2>
        <div className="users__wrap">{renderCards()}</div>
        {users.length < 96 && (
          <div className="users__btn-wrap">
            <Button text="Show more" handleClick={handleClick}></Button>
          </div>
        )}
      </Container>
    </section>
  );
};
export default Users;
