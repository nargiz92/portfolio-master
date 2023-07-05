import React, {useState} from 'react';
import s from './Contact.module.scss';


const Contact = () => {
    const [isFul, setIsFul]=useState()
    return (
        <div className={s.colMd}>
            <div className={s.contactForms}>
                <form className={s.inputContacts}>
                    <div className={s.row}>
                        <div className={s.nameInput}>
                            <input className={`${s.mesInp}`}/>
                            {/*<input className={`${s.mesInp} ${value?s.isFull:''}`}/>*/}
                            <div className={s.helpName}></div>
                            <span>Name *</span>
                        </div>
                        <div className={s.emailInput}>
                            <input className={s.email}/>
                            <div className={s.helpName}></div>
                            <span>Email *</span>
                        </div>
                    </div>
                    <div className={s.messageTextareaAndButton}>
                        <div  className={s.textareaGroup}>
                            <textarea className={s.textAreaForm}/>
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