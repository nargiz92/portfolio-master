import React from 'react';
import s from './Contact.module.css';


const Contact = () => {
    return (
        <div className={s.colMd}>
            <div className={s.contactForms}>
                <form className={s.inputContacts}>
                    <div className={s.row}>
                        <div className={s.nameInput}>
                            <input className={s.mes}/>
                            <p className={s.helpName}></p>
                            <span>Name *</span>
                        </div>
                        <div className={s.emailInput}>
                            <input className={s.email}/>
                            <p className={s.helpName}></p>
                            <span>Email *</span>
                        </div>


                    </div>
                    <div>


                    </div>
                    <div>
                        <textarea className={s.mes}/>
                        <p>
                        </p>
                        <span>Message *</span>
                    </div>

                    <div className={s.colButton}>
                        <div className={s.messageButton}>
                            <button type='submit' className={s.button}>send message</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Contact;