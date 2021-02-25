import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group-inputs">
        <label>
          Username
          <input
            name="username"
            type="text"
            placeholder="username"
            maxLength="30"
            value={values.username}
            onChange={onChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email address"
            maxLength="30"
            value={values.email}
            onChange={onChange}
          />
        </label>

        <label>
          Role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">----Select A Role----</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Graphic Design">Graphic Design</option>
          </select>
        </label>
      </div>

      <div className="submit">
        <button disabled={!values.username || !values.email || !values.role}>
          Submit!
        </button>
      </div>
    </form>
  );
}
