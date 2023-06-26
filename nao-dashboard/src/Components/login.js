import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Menu, Navbar, Button } from "react-daisyui";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Route, Routes } from "react-router-dom";
import { React , useState} from "react";
import { connect } from 'react-redux';
import { login, register } from '../redux/actions/authActions'
import { logout } from '../redux/actions/userActions'

import Recibos from "./recibos";
import Home from "./home";
import Clientes from "./clientes";

import usersData from "../usersData.json"

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleLogin = (values, { setSubmitting }) => {
    const { email, password } = values;
    const user = usersData.users.find(user => user.email === email && user.password === password);
  
    if (user) {
      console.log('Login successful');
      setSubmitting(false);
      setIsLoggedIn(true);
      navigate('/');
    } else {
      console.log('Invalid credentials');
      setSubmitting(false);
      setError('Invalid credentials'); 
    }
  };

  const handleRegistration = (values, { setSubmitting }) => {
    const { email, password } = values;

    // Check if the user already exists
    const userExists = usersData.users.some(user => user.email === email);

    if (userExists) {
      setError('User already exists');
      setSubmitting(false);
    } else {
    // Create a new user object
    const newUser = { email, password };

    // Add the new user to the users array
    usersData.users.push(newUser);

    console.log('Registration form submitted:', values);
    setSubmitting(false);
    setIsLoggedIn(true);
    navigate('/');


      // Make an API call to register the new user
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error saving user registration');
          }
          console.log('Registration form submitted:', values);
          setSubmitting(false);
          setIsLoggedIn(true);
          navigate('/');
        })
        .catch(err => {
          setError('Error saving user registration');
          console.error(err);
          setSubmitting(false);
        });
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <div className="w-full flex flex-col justify-center h-screen">
      {!isLoggedIn ? (
        <><div className="bloc m-auto">
 <Tabs>
        <TabList className="flex justify-center items-center">
          <Tab className="px-4 py-2 rounded font-semibold cursor-pointer focus:outline-none aria-selected:bg-purple-300 ">Login</Tab>
          <Tab className="px-4 py-2 rounded font-semibold cursor-pointer focus:outline-none aria-selected:bg-purple-300">Register</Tab>
        </TabList>
        <TabPanel>
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

              {error && <div className="text-red-500">{error}</div>} {/* Display error message */}

              <button type="submit" 
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>


            </Form>
          </Formik>
        </TabPanel>
        <TabPanel>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleRegistration}
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
              {error && <div className="text-red-500">{error}</div>} {/* Display error message */}

              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Register</button>
            </Form>
          </Formik>
        </TabPanel>
      </Tabs>  

          </div>
        </>
      ) : (
      <div>
      <div className="bg-slate-50 h-screen ">
        <Navbar className="pb-40 flex component-preview p-2 items-center justify-center font-sans bg-white drop-shadow-sm ">
          <Navbar.Start>
            <h1 className="font-semibold text-lg ml-6">Welcome!</h1>
          </Navbar.Start>
          <Navbar.End>
            <Button onClick={handleLogout} variant="outline" color="primary">
              Logout
            </Button>
          </Navbar.End>
        </Navbar>

      <div className="App w-full rounded-md h-screen">
        <Menu className="w-1/4 h-screen border-slate-300		bg-white drop-shadow-sm ">
          <Menu.Item className="bordered">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item className="bordered">
            <Link to="/recibos">Recibos</Link>
          </Menu.Item>
          <Menu.Item className="bordered">
            <Link to="/clientes">Clientes</Link>
          </Menu.Item>
  
        </Menu>
        <Routes>
            <Route path="recibos" element={<Recibos />} />
            <Route path="clientes" element={<Clientes />} />
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
      
      </div>
    </div>

    )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    register: (email, password) => dispatch(register(email, password)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);