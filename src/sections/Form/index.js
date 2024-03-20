import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Container from "Components/Container";
import Field from "Components/Field";
import Button from "Components/Button";
import FileUploader from "Components/FileUploader";
import RadioItem from "Components/RadioItem";
import AppContext from "Contexts/appContext";
import { useFormik } from "formik";
import { getPositions, postUser, getUsers } from "Api";
import "./styles.sass";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Field is required";
  } else if (values.name.length < 3) {
    errors.name = "Must be breater than 3";
  }

  if (!/^\+\d{2}\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/i.test(values.phone)) {
    errors.phone = "Incorrect phone number";
  }

  if (!values.photo) {
    errors.photo = "Field is required";
  }

  if (!values.email) {
    errors.email = "Field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = () => {
  const [positions, setPositions] = useState([]);

  const { setUsers, defaultParams, setLoading } = useContext(AppContext);

  const cleanPhone = (phoneNumber) => {
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    return cleanedPhoneNumber;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: "1",
      photo: null,
    },
    validate,
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("position_id", values.position_id);
      formData.append("name", values.name);
      formData.append("email", values.email.toLowerCase());
      formData.append("phone", cleanPhone(values.phone));
      formData.append("photo", values.photo);
      try {
        await postUser(formData);
        const users = await getUsers(defaultParams);
        await setUsers(users);
        window.location.hash = "";
        window.location.hash = "#users";
      } catch (err) {
        toast.error(err?.message || "Smth went wrong, try again!");
      } finally {
        setLoading(false);
      }
    },
  });

  const { isValid, dirty } = formik;

  useEffect(() => {
    (async () => {
      const data = await getPositions();
      setPositions(data);
    })();
  }, []);

  const handleChangePhoto = (e) => {
    if (e.currentTarget.files) {
      formik.setFieldValue("photo", e.currentTarget.files[0]);
    }
  };

  return (
    <section id="form" className="form">
      <Container>
        <h2 className="form__title">Working with POST request</h2>
        <form onSubmit={formik.handleSubmit} noValidate className="form__body">
          <Field
            className="form__field"
            placeholder="Name"
            name="name"
            handleChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
          />
          <Field
            className="form__field"
            type="email"
            placeholder="Email"
            name="email"
            handleChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
          />
          <Field
            type="phone"
            placeholder="Phone"
            name="phone"
            handleChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
            description="+38 (XXX) XXX - XX - XX"
          />

          <fieldset className="form__radio-groups">
            <legend>Select your position</legend>
            {positions.map((el, i) => (
              <RadioItem
                className="form__radio-item"
                key={el.id}
                id={`position-${el.id}`}
                name="position_id"
                value={el.id}
                checked={formik.values.position_id === `${el.id}`}
                handleChange={formik.handleChange}
                label={el.name}
              />
            ))}
          </fieldset>

          <FileUploader
            name="photo"
            id="photo"
            fileName={formik.values.photo?.name}
            placeholder="Upload your photo"
            handleChange={handleChangePhoto}
          />
          <div className="form__btn-wrap">
            <Button
              type="submit"
              text="Sign up"
              disabled={!dirty || !isValid}
            />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Form;
