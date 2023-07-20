import React, {useEffect, useState} from 'react';
import s from './Contact.module.scss';
import axios from "axios";

interface FormDataType {
    name: string,
    contact: string,
    message: string
}



const api = {
    login() {

    }
}
const Contact = () => {
    const formData: FormDataType = {name: "", contact: "", message: ""}

    const [responseBody, setResponseBody] = useState<FormDataType>(formData)

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})

    }
    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

           axios.post('https://gmail-smtp-sigma.vercel.app/sendMessage', {
               name: responseBody.name,
               contact: responseBody.contact,
               message: responseBody.message
           }).then(() => {
               alert('success')
           })


    }

    return (
        <div className={s.colMd}>
            <div className={s.contactForms}>
                <form className={s.inputContacts} id={'contact-form'} onSubmit={onSubmitHandler}>
                    <div className={s.row}>
                        <div className={s.nameInput}>
                            <input className={`${s.mesInp}  ${responseBody.name.length?s.isFull:''}`} name={'name'} onChange={(e) => inputChangeHandler(e)}
                                   type="text"/>
                            {/*<input className={`${s.mesInp} ${value?s.isFull:''}`}/>*/}
                            <div className={s.helpName}></div>
                            <span className={`${responseBody?s.isFul:s.orderSpan}`}>Name *</span>
                        </div>
                        <div className={s.emailInput}>
                            <input className={`&{s.email}  ${responseBody.contact.length?s.isFull:''}`} name={'contact'} onChange={(e) => inputChangeHandler(e)}
                                   type="text"/>
                            <div className={s.helpName}></div>
                            <span>Email *</span>
                        </div>
                    </div>
                    <div className={s.messageTextareaAndButton}>
                        <div className={s.textareaGroup}>
                            <textarea className={`${s.textAreaForm}  ${responseBody.message.length?s.isHaveValue:''}`} name={'message'}
                                      onChange={(e) => inputChangeHandler(e)}/>
                            <div className={s.helpName}>
                            </div>
                            <span>Message *</span>
                        </div>
                        <div className={s.colButton}>
                            <div className={s.messageButton}>
                                <button type='submit' className={s.button}>send message</button>
                            </div>
                        </div>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default Contact;