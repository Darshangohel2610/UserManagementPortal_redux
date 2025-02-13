import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function UserForm({ initialValues, onSubmit, buttonText }) {
  const formik = useFormik({
    initialValues: initialValues || { name: "", email: "", profile_pic: null },
    enableReinitialize : true ,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
    
      email: Yup.string().email("Invalid email address").required("Email is required"),
      profile_pic: Yup.mixed().nullable(),
    }),
    onSubmit: (values) => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{buttonText} User</h2>

      <form onSubmit={formik.handleSubmit} className="p-4 border rounded shadow bg-light">
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`form-control ${formik.errors.name && "is-invalid"}`}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && <div className="invalid-feedback">{formik.errors.name}</div>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`form-control ${formik.errors.email && "is-invalid"}`}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
        </div>

        {/* Profile Picture Upload */}
        <div className="mb-3">
          <label htmlFor="profile_pic" className="form-label">Profile Picture</label>
          <input
            id="profile_pic"
            name="profile_pic"
            type="file"
            accept="image/png, image/jpeg"
            className="form-control"
            onChange={(event) => {
              formik.setFieldValue("profile_pic", event.currentTarget.files[0]);
            }}
          />
          {formik.errors.profile_pic && <div className="text-danger">{formik.errors.profile_pic}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
