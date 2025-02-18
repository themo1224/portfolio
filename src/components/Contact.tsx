import React from 'react'
import {CONTACT} from "../constants"

export const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
            <div className="text-center tracking-tight">
                <div className="my-4">
                    {CONTACT.phoneNo}
                </div>
                <a href="#" className='border-b'>{CONTACT.email}</a>
            </div>
        </div>
      )}
