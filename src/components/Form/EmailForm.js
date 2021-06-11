import React from "react";
import { useForm } from "react-hook-form";

function EmailForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="footer-top-form"
      method="POST"
      action="#"
      id="form"
    >
      <div className="form-control">
        <input
          type="text"
          name="email"
          placeholder="Enter your email adress"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          formNoValidate={true}
        />
        {errors.email && (
          <div className="error-message">Whoops, make sure it's an email</div>
        )}
      </div>
      <div className="footer-top-button">
        <button type="submit" className="btn footer-btn">
          Contact Us
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
