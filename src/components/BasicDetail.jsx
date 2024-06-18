import React, { useState } from 'react';

function BasicDetail() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState('');

  const validate = () => {
    let validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!gender) {
      validationErrors.gender = 'Gender is required';
    }
    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, email, gender });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 my-5 max-w-sm mx-auto">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male" className="mx-2">Male</label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female" className="mx-2">Female</label>
            </div>
            {errors.gender && <small className="text-danger">{errors.gender}</small>}
          </div>

          <button type="submit" className="btn btn-primary my-4 d-flex">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default BasicDetail;
