import s from './Contacts.module.css';
import Loader from 'react-loader-spinner';
import { ContactsItem } from './ContactsItem';
import { useGetContactsQuery } from '../../services/contactsApi';
import { useSelector } from 'react-redux';


 export default function Contacts() {
   const {data, isFetching} = useGetContactsQuery();
   const filter = useSelector((state => state.filter));

  return (
    <>
    {isFetching && <Loader type="Puff" color="#ff4f79" height={40} width={40}/>}
    {data && !isFetching && 
    <ul className={s.list}>
      {data
      .filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(({ name, id, phone }) => (
        <li key = {id} className={s.item}> 
        <ContactsItem id= {id} name={name} phone={phone}> 
        </ContactsItem> </li>

      ))}
      </ul>
 }
    </>
  );
}
