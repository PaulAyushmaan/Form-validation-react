// src/components/Form.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';
const Form = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		username: '',
		email: '',
		password: '',
		phoneNo: '',
		country: '',
		city: '',
		panNo: '',
		aadharNo: '',
	});

	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
	const aadharRegex = /^\d{12}$/;
	const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

	const validate = () => {
		const newErrors = {};

		if (!formData.firstName) newErrors.firstName = 'First Name is required';
		if (!formData.lastName) newErrors.lastName = 'Last Name is required';
		if (!formData.username) newErrors.username = 'Username is required';
		if (!formData.email) {
			newErrors.email = 'E-mail is required';
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = 'E-mail is not valid';
		}
		if (!formData.password) {
			newErrors.password = 'Password is required';
		} else if (!passwordRegex.test(formData.password)) {
			newErrors.password =
				'Password must be at least 8 characters long and contain at least one letter and one number';
		}
		if (!formData.phoneNo) newErrors.phoneNo = 'Phone Number is required';
		if (!formData.country) newErrors.country = 'Country is required';
		if (!formData.city) newErrors.city = 'City is required';
		if (!formData.panNo) {
			newErrors.panNo = 'Pan No. is required';
		} else if (!panRegex.test(formData.panNo)) {
			newErrors.panNo = 'Pan No. is not valid';
		}
		if (!formData.aadharNo) {
			newErrors.aadharNo = 'Aadhar No. is required';
		} else if (!aadharRegex.test(formData.aadharNo)) {
			newErrors.aadharNo = 'Aadhar No. is not valid';
		}

		return newErrors;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			navigate('/success', { state: { formData } });
		}
	};

	const handleChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>First Name:</label>
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
				/>
				{errors.firstName && <span>{errors.firstName}</span>}
			</div>
			<div>
				<label>Last Name:</label>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
				/>
				{errors.lastName && <span>{errors.lastName}</span>}
			</div>
			<div>
				<label>Username:</label>
				<input
					type="text"
					name="username"
					value={formData.username}
					onChange={handleChange}
				/>
				{errors.username && <span>{errors.username}</span>}
			</div>
			<div>
				<label>E-mail:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && <span>{errors.email}</span>}
			</div>
			<div>
				<label>Password:</label>
				<input
					type={showPassword ? 'text' : 'password'}
					name="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<button type="button" onClick={() => setShowPassword(!showPassword)}>
					{showPassword ? 'Hide' : 'Show'}
				</button>
				{errors.password && <span>{errors.password}</span>}
			</div>
			<div>
				<label>Phone Number:</label>
				<input
					type="text"
					name="phoneNo"
					value={formData.phoneNo}
					onChange={handleChange}
				/>
				{errors.phoneNo && <span>{errors.phoneNo}</span>}
			</div>
			<div>
				<label>Country:</label>
				<select name="country" value={formData.country} onChange={handleChange}>
					<option value="">Select Country</option>
					<option value="India">India</option>
					<option value="USA">USA</option>
					{/* Add more options as needed */}
				</select>
				{errors.country && <span>{errors.country}</span>}
			</div>
			<div>
				<label>City:</label>
				<select name="city" value={formData.city} onChange={handleChange}>
					<option value="">Select City</option>
					<option value="New York">New York</option>
					<option value="Mumbai">Mumbai</option>
					{/* Add more options as needed */}
				</select>
				{errors.city && <span>{errors.city}</span>}
			</div>
			<div>
				<label>PAN No.:</label>
				<input
					type="text"
					name="panNo"
					value={formData.panNo}
					onChange={handleChange}
				/>
				{errors.panNo && <span>{errors.panNo}</span>}
			</div>
			<div>
				<label>Aadhar No.:</label>
				<input
					type="text"
					name="aadharNo"
					value={formData.aadharNo}
					onChange={handleChange}
				/>
				{errors.aadharNo && <span>{errors.aadharNo}</span>}
			</div>
			<button type="submit" disabled={Object.keys(errors).length > 0}>
				Submit
			</button>
		</form>
	);
};

export default Form;
