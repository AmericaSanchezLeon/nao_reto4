import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleLogin = (values, { setSubmitting }) => {
    // Simulating login API request
    setTimeout(() => {
      console.log('Form submitted:', values);
      setSubmitting(false);
      setIsLoggedIn(true);
      navigate('/home');
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!isLoggedIn ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form className="w-72">
              <div className="mb-4">
                <label htmlFor="email" className="font-semibold">Email:</label>
                <Field type="email" id="email" name="email" className="border border-gray-300 p-2 rounded-md w-full" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="font-semibold">Password:</label>
                <Field type="password" id="password" name="password" className="border border-gray-300 p-2 rounded-md w-full" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
            </Form>
          </Formik>
        </>
      ) : (
        <div>
          <h1>Welcome, User!</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-600">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
