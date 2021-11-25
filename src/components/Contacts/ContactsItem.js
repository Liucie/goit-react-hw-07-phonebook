import s from './Contacts.module.css';
import { useDeleteContactMutation } from '../../services/contactsApi';
import Loader from 'react-loader-spinner';


export function ContactsItem({name,id, phone}){

    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation();
    return (
    <>
          {name}: {phone}
          <button
            onClick={()=>deleteContact(id)}
            type="button"
            className={s.button}
          >
            {isDeleting ? <Loader type="ThreeDots" color="#093a3e" height={20} width={20}/> : 'Delete'}
          </button>
    </>
        )
    
}