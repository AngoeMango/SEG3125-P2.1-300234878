import React, { useState } from 'react';
import './BookConsultationForm.css'; // Optional: for additional custom styling

const BookConsultationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        selectDate: '',
        selectTime: '',
        meetingType: '',
        meetingTopic: '',
        description: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="container mt-5">
                <h1 className="text-center">Consultation Booked!</h1>
                <p className="text-center">Thank You For Choosing <span className="brand-name">Gracile Couture</span> For Your Next Project!</p>
                <div className="summary-box text-start">
                    <p><strong>FIRST NAME:</strong> <div className="form-data">{formData.firstName}</div></p>
                    <p><strong>LAST NAME:</strong> <div className="form-data">{formData.lastName}</div></p>
                    <p><strong>EMAIL:</strong> <div className="form-data">{formData.email}</div></p>
                    <p><strong>PHONE NUMBER:</strong> <div className="form-data">{formData.phoneNumber}</div></p>
                    <p><strong>DATE:</strong> <div className="form-data">{new Date(formData.selectDate).toLocaleDateString()}</div></p>
                    <p><strong>TIME:</strong> <div className="form-data">{formData.selectTime}</div></p>
                    <p><strong>VIRTUAL OR IN-OFFICE:</strong> <div className="form-data">{formData.meetingType}</div></p>
                    <p><strong>MEETING TOPIC:</strong> <div className="form-data">{formData.meetingTopic}</div></p>
                    <p><strong>REQUEST SUMMARY:</strong> <div className="form-data">{formData.description}</div></p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Book A Consultation</h1>
            <p className="text-center">To Book An Appointment With One Of Our Designer Professionals, Fill Out The Form Below!</p>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="firstName" className="text-start w-100 required">First Name</label>
                        <input type="text" className="form-control custom-input" id="firstName" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="lastName" className="text-start w-100 required">Last Name</label>
                        <input type="text" className="form-control custom-input" id="lastName" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="email" className="text-start w-100 required">Email</label>
                        <input type="email" className="form-control custom-input" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="phoneNumber" className="text-start w-100 required">Phone Number</label>
                        <input type="tel" className="form-control custom-input" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="selectDate" className="text-start w-100 required">Select a Date</label>
                        <input type="date" className="form-control custom-input" id="selectDate" name="selectDate" value={formData.selectDate} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="selectTime" className="text-start w-100 required">Select a Time</label>
                        <input type="time" className="form-control custom-input" id="selectTime" name="selectTime" value={formData.selectTime} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="meetingType" className="text-start w-100 required">Virtual or In-Office Meeting</label>
                        <select className="form-control custom-input" id="meetingType" name="meetingType" value={formData.meetingType} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="virtual">Virtual</option>
                        <option value="in-office">In-Office</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3 input-container">
                        <label htmlFor="meetingTopic" className="text-start w-100 required">Meeting Topic</label>
                        <select className="form-control custom-input" id="meetingTopic" name="meetingTopic" value={formData.meetingTopic} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Bridal and Wedding Request">Bridal and Wedding Request</option>
                        <option value="Formal Attire Request">Formal Attire Request</option>
                        <option value="Workshop Consultation">Workshop Consultation</option>
                        <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 input-container">
                    <label htmlFor="description" className="text-start w-100 required">Please Describe the Request with Detail</label>
                    <textarea className="form-control custom-input" id="description" name="description" rows="5" placeholder="Enter a message" value={formData.description} onChange={handleChange} required></textarea>
                </div>
                <div className="text-end">
                    <button type="submit" className="btn custom-submit-btn">Send Request</button>
                </div>
            </form>
        </div>
    );
};

export default BookConsultationForm;
