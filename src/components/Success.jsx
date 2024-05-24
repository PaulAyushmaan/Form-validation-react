// src/components/Success.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css';

const Success = () => {
	const { state } = useLocation();
	const { formData } = state || {};

	if (!formData) {
		return <div>No data submitted</div>;
	}

	return (
		<div className="success-container">
			<h1>Form Submitted Successfully</h1>
			<div className="form-details">
				<p>
					<strong>First Name:</strong> {formData.firstName}
				</p>
				<p>
					<strong>Last Name:</strong> {formData.lastName}
				</p>
				<p>
					<strong>Username:</strong> {formData.username}
				</p>
				<p>
					<strong>E-mail:</strong> {formData.email}
				</p>
				<p>
					<strong>Phone Number:</strong> {formData.phoneNo}
				</p>
				<p>
					<strong>Country:</strong> {formData.country}
				</p>
				<p>
					<strong>City:</strong> {formData.city}
				</p>
				<p>
					<strong>PAN No.:</strong> {formData.panNo}
				</p>
				<p>
					<strong>Aadhar No.:</strong> {formData.aadharNo}
				</p>
			</div>
		</div>
	);
};

export default Success;
