import { useFormik } from 'formik';
import './formValid.css'
import { signUpSchema } from './schemas';
function FormValid() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  const { values, errors, handleBlur, touched ,handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values, "onsubmit");
      alert("Successfully Submitted form.")
    }
  })
  // console.log(errors, "errors")

  return (
    <div className="formContainer">
      <div className='formHead'>
        Form Validation By Yup and Formik
      </div>
      <form className='formikForm' onSubmit={handleSubmit}>
        <div className='reg'>Registration Form</div>
        <div className="input-block">
          <label className="input-label" htmlFor='name'></label>
          <input
          className='inputForm'
            type="text"
            autoComplete='off'
            name="name"
            id="name"
            placeholder='Username'
            onBlur={handleBlur}
            value={values.name}
            onChange={handleChange}

          />
          {errors.name && touched.name ? <p className='err'>{errors.name}</p> : null}

        </div>

        <div className="input-block">
          <label className="input-label" htmlFor='email'></label>
          <input
                    className='inputForm'
            type="email"
            autoComplete='off'
            name="email"
            id="email"
            placeholder='email'
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}

          />
          {errors.email && touched.email ? <p className='err'>{errors.email}</p> : null}
        </div>

        <div className="input-block">
          <label className="input-label" htmlFor='password'></label>
          <input
                    className='inputForm'
            type="password"
            autoComplete='off'
            name="password"
            id="password"
            placeholder='password'
            onBlur={handleBlur}
            value={values.password}
            onChange={handleChange}


          />
          {errors.password && touched.password ? <p className='err'>{errors.password}</p> : null}

        </div>

        <div className="input-block">
          <label className="input-label" htmlFor='confirmPassword'></label>
          <input
                    className='inputForm'
            type="password"
            autoComplete='off'
            name="confirmPassword"
            id="confirmPassword"
            placeholder='confirm password'
            onBlur={handleBlur}
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && touched.confirmPassword ? <p className='err'>{errors.confirmPassword}</p> : null}

        </div>

        <button className="formBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValid;
