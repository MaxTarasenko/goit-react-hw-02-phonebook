import React from 'react';
import style from './contactForm.module.css';

const ContactForm = ({ name, number, handleChange, handleSubmit }) => (
  <form className={style.form} onSubmit={handleSubmit}>
    <h4>Name</h4>
    <input
      type="text"
      name="name"
      value={name}
      onChange={handleChange}
      className={style.searchInput}
      required
    />
    <h4>Number</h4>
    <input
      type="text"
      name="number"
      value={number}
      onChange={handleChange}
      className={style.searchInput}
      required
    />
    <button className={style.button}>Add contact</button>
  </form>
);

export default ContactForm;
