import React from 'react'
import Button from '../Button/Button'
import styles from './HeroForm.module.css'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { HiPhone } from 'react-icons/hi'
import { HiMail } from 'react-icons/hi'

const HeroForm = () => {
    return (
        <div className={`container`}>
            <div className={` ${styles.hero_from}  `}>
                <div className={styles.heroform_content} >
                    <div className={styles.btn_top}>
                        <Button text='VIA SUPPORT CHAT' icon={<BiSolidMessageDetail fontSize={24} />} />
                        <Button text='VIA CALL' icon={<HiPhone fontSize={24} />} />
                    </div>


                    <div>
                        <Button isOutline={true} text='VIA EMAIL FORM' icon={<HiMail fontSize={24} />} />
                    </div>
                    <form action="" className={styles.content_form}>
                        <div className={styles.input_container}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name='name' />
                        </div>
                        <div className={styles.input_container} >
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' />
                        </div>
                        <div className={styles.input_container} >
                            <label htmlFor="textarea">Text</label>
                            <textarea rows={5} name='textarea' ></textarea>
                        </div>
                        <div className={styles.submit_btn}>
                          <Button text='SUBMIT' />
                        </div>
                    </form>

                </div>
                <div className={styles.heroform_image} >
                    <img src="/images/Service 24_7-pana 1.svg" alt="contactImage" />
                </div>
            </div>


        </div>
    )
}

export default HeroForm