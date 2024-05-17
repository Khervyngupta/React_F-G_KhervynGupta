import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, FormControlLabel, FormLabel, RadioGroup, Radio, FormControl } from '@mui/material';
import { saveSubmission } from '../utils/storage';
import './FeedbackForm.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Customer Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone is required'),
  service: Yup.string().required('Rating for service is required'),
  beverage: Yup.string().required('Rating for beverage is required'),
  cleanliness: Yup.string().required('Rating for cleanliness is required'),
  experience: Yup.string().required('Rating for overall experience is required'),
});

const FeedbackForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      beverage: '',
      cleanliness: '',
      experience: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      saveSubmission(values);
      alert('Thank you for completing the information');
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Aromatic Bar</h2>
      
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Customer Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="phone"
        name="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />

      <FormControl component="fieldset">
        <FormLabel component="legend">Please rate the quality of the service you received from your host</FormLabel>
        <RadioGroup aria-label="service" name="service" value={formik.values.service} onChange={formik.handleChange}>
          <FormControlLabel value="excellent" control={<Radio />} label="Excellent" />
          <FormControlLabel value="good" control={<Radio />} label="Good" />
          <FormControlLabel value="fair" control={<Radio />} label="Fair" />
          <FormControlLabel value="bad" control={<Radio />} label="Bad" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Please rate the quality of your beverage</FormLabel>
        <RadioGroup aria-label="beverage" name="beverage" value={formik.values.beverage} onChange={formik.handleChange}>
          <FormControlLabel value="excellent" control={<Radio />} label="Excellent" />
          <FormControlLabel value="good" control={<Radio />} label="Good" />
          <FormControlLabel value="fair" control={<Radio />} label="Fair" />
          <FormControlLabel value="bad" control={<Radio />} label="Bad" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Was our restaurant clean?</FormLabel>
        <RadioGroup aria-label="cleanliness" name="cleanliness" value={formik.values.cleanliness} onChange={formik.handleChange}>
          <FormControlLabel value="excellent" control={<Radio />} label="Excellent" />
          <FormControlLabel value="good" control={<Radio />} label="Good" />
          <FormControlLabel value="fair" control={<Radio />} label="Fair" />
          <FormControlLabel value="bad" control={<Radio />} label="Bad" />
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Please rate your overall dining experience</FormLabel>
        <RadioGroup aria-label="experience" name="experience" value={formik.values.experience} onChange={formik.handleChange}>
          <FormControlLabel value="excellent" control={<Radio />} label="Excellent" />
          <FormControlLabel value="good" control={<Radio />} label="Good" />
          <FormControlLabel value="fair" control={<Radio />} label="Fair" />
          <FormControlLabel value="bad" control={<Radio />} label="Bad" />
        </RadioGroup>
      </FormControl>

      <Button color="success" variant="contained" fullWidth type="submit">
        Submit Review
      </Button>
    </form>
  );
};

export default FeedbackForm;
