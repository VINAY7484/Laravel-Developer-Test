
import React, { useState } from 'react';
import Layout from '../Shared/Layout';
import { useForm, usePage} from '@inertiajs/react';


const AddBusiness = () => {
  

  const pageData = usePage().props;
  console.log(pageData);
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    address: "",
    email: "",
    website: "",
    contactPersonName: "",
    phoneNumber: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    post("/addbussiness_submit")
  }
  return (
    <div className="business-form">
      <h2>Business Details</h2>
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            maxLength="120"
            // value={formData.name}
            onChange={e => setData("name", e.target.value)}
            required
          />
        </label>
        {errors.name ? <div>{errors.name}</div> : ""}
        <label>
          Address:
          <textarea
            name="address"
            maxLength="1000"
            // value={formData.address}
            onChange={e => setData("address", e.target.value)}
            required
          />
        </label>
        {errors.address ? <div>{errors.address}</div> : ""}
        <label>
          Email:
          <input
            type="email"
            name="email"
            // value={formData.email}
            onChange={e => setData("email", e.target.value)}
            required
          />
        </label>
        {errors.email ? <div>{errors.email}</div> : ""}
        <label>
          Website:
          <input
            type="text"
            name="website"
            // value={formData.website}
            onChange={e => setData("website", e.target.value)}
            required
          />
        </label>
        {errors.website ? <div>{errors.website}</div> : ""}
        <label>
          Contact Person Name:
          <input
            type="text"
            name="contactPersonName"
            // value={formData.contactPersonName}
            onChange={e => setData("contactPersonName", e.target.value)}
            required
          />
        </label>
        {errors.contactPersonName ? <div>{errors.contactPersonName}</div> : ""}
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            // value={formData.phoneNumber}
            onChange={e => setData("phoneNumber", e.target.value)}
            required
          />
        </label>
        {errors.phoneNumber ? <div>{errors.phoneNumber}</div> : ""}
        <button type="submit">Submit</button>
      </form>
      {pageData.flash.message ? 
      <div className={'alert '+pageData.flash.type}>{pageData.flash.message} </div> : ""  
      }
    </div>
  );
};

export default AddBusiness;
AddBusiness.layout = page => <Layout title="AddBusiness page" children={page}/>

