import React from 'react'
import ContactForm from './ContactForm';
import fireDatabase from '../firebase';

const Contacts = () => {

    const addOrEdit = obj => {
        fireDatabase.child('contacts').push(
            obj,
            err => {
                if (err) {
                    console.log(err.message);
                }
            }
        )
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid my-2">
                <div className="container">
                    <h1 className="display-4 text-center">Small Apps CRUD using ReactJS && FireBase</h1>
                </div>
            </div>
            <div className="row">

                <div className="col-md-6">
                    <ContactForm addOrEdit={addOrEdit} />
                </div>



                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">List Contact </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;