import React, {ChangeEvent, ElementRef, useRef, useState} from 'react';
import s from './Contact.module.scss';
import emailjs from '@emailjs/browser';

export interface FormDataType {
    user_name: string,
    subject: string,
    message: string,
    email: string,
}



const Contact = () => {
    const form = useRef<ElementRef<`form`>>(null);
    const [successMessage, setSuccessMessage] = useState(false)
    const [formData, setFormData] = useState<FormDataType>({
        user_name: '',
        subject: '',
        message: '',
        email: ''
    });
    const sendEmail = (e:any) => {
        e.preventDefault();
if (!form.current) return
        emailjs
            .sendForm('service_x3ib5fh', 'template_scvdong', form.current, {
                publicKey: 'k9bUcJoZQwDe_G34h',
            })
            .then(
                () => {

setSuccessMessage(true)

                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
e.target.reset()
        setFormData({ user_name: '', subject: '', message: '', email : ''});
        setTimeout(() => {
            setSuccessMessage(false);
        }, 4000);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (
        <div className={s.colMd}>
            <div className={s.contactForms}>
                <form className={s.inputContacts} ref={form} onSubmit={sendEmail}>
                    <div className={s.row}>
                        <div className={s.nameInput}>
                            <input
                                onChange={handleInputChange}
                                className={`${s.mesInp}
                             ${formData.user_name.length? s.isFull : ''}`}
                                   name={'user_name'}
                                         required
                                value={formData.user_name}
                                   type="text"/>
                            <div className={s.helpName}></div>
                            <span
                                 className={`${formData.user_name.length ? s.isFul : s.orderSpan}`}
                            >Name *</span>
                        </div>
                        <div className={s.emailInput}>
                            <input
                                required
                                 className={`&{s.email}  ${formData.subject.length ? s.isFull : ''}`}
                                   name={'subject'}
                                   type="text"
                                onChange={handleInputChange}
                            value={formData.subject}
                            />

                            <div className={s.helpName}></div>
                            <span>Subject *</span>
                        </div>
                    </div>
                    <div className={s.messageTextareaAndButton}>
                        <div className={s.emailInputs}>

                        <input
                            required
                            className={`&{s.emails}  ${formData.email.length ? s.isFull : ''}`}
                            name={'email'}
                            type="text"
                            onChange={handleInputChange}
                            value={formData.email}
                        />
                           {/*<div className={s.helpName}></div>*/}
                            <span className={s.emailTitles}>EMAIL *</span>
                        </div>
                        <div className={s.textareaGroup}>
                            <textarea
                                 className={`${s.textAreaForm}  ${formData.message.length? s.isHaveValue : ''}`}
                                name={'message'}
                                required
                                 onChange={handleInputChange}
                                 value={formData.message}
                                />
                            <div className={s.helpName}>
                            </div>
                            <span>Message *</span>
                        </div>
                        {successMessage&& <div className={s.successMessage}>
                            Letter sent!
                        </div>}
                        <div className={s.colButton}>
                            <div className={s.messageButton}>
                                <button type='submit' className={s.button} disabled={successMessage}>{successMessage?
                                    `Letter sent!`:`send message`}</button>
                            </div>
                        </div>
                    </div>


                </form>

            </div>
        </div>
    );
};

export default Contact;