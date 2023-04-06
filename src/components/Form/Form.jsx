import PropTypes from 'prop-types';

import { Component } from 'react';

import css from '../../components/Form/Form.module.css';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  //   id = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  // idChange = () => {
  //   this.setState({ id: nanoid() });
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          id={this.state.id}
          className={css.form}
        >
          <label className={css.label}>
            Name <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              className={css.input}
            />
          </label>

          <label className={css.label}>
            Number <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              className={css.input}
            />
          </label>
          <button
            type="submit"
            className={css.btn}
            disabled={!this.state.name || !this.state.number}
          >
            Add contact
          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
