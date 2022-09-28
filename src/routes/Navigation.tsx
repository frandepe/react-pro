import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import {
  FormikAbstractaction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
  DynamicForm,
} from "../03-forms/pages";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Loco" />
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstractaction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstractaction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-dynamic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Dynamic
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route
            path="/formik-abstractaction"
            element={<FormikAbstractaction />}
          />
          <Route path="/formik-register" element={<RegisterFormikPage />} />
          <Route path="/formik-dynamic" element={<DynamicForm />} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
