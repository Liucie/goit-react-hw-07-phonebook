import { useState } from 'react';
import s from './ContactForm.module.css';
import { useAddContactMutation, useGetContactsQuery } from '../../services/contactsApi';

export default function ContactForm () {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  const [addContact] = useAddContactMutation();
  const { data : contacts } = useGetContactsQuery();
 

  const handleNameChange = e => {
    setName(e.currentTarget.value);
  };
  const handlePhoneChange = e => {
    setPhone(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: name,
      phone: phone,
    };

    if(contacts.some(el=> el.name.toLowerCase() === contact.name.toLowerCase())){
     return alert(`${contact.name} is already in contacts`);
    }
  
    addContact(contact);
    reset();
  };
  const reset = () => {
    setName ('');
    setPhone('');
  };
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleNameChange}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Phone
          <input
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handlePhoneChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  
    }
