import React, { useState } from 'react';

const ContactForm = (props) => {

    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    const [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
    }


    return (
        <>
            <div className="card">
                <div className="card-body">
                    <form autoComplete="off" onSubmit={handleFormSubmit}>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-user"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="FullName" name="fullName"
                                value={values.fullName}
                                onChange={handleInputChange} />
                        </div>


                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-mobile"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Mobile" name="mobile"
                                value={values.mobile}
                                onChange={handleInputChange} />
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-envelope-o"></i>
                                </div>
                            </div>
                            <input className="form-control" placeholder="Email" name="email"
                                value={values.email}
                                onChange={handleInputChange} />
                        </div>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="fa fa-address-book"></i>
                                </div>
                            </div>
                            <input className="form-control" name="address" placeholder="Address"
                                value={values.address}
                                onChange={handleInputChange} />
                        </div>

                        <div className="from-group input-group">
                            <input type="submit" className="btn btn-dark btn-outline btn-block" value="Save" />
                        </div>

                    </form>
                </div>
            </div>


        </>
    )
}

export default ContactForm;