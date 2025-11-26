"use client";

import { useState } from "react";
import Image from "next/image";
import Heading from "../ui/Heading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          address: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Company Info */}
          <div className="space-y-8 flex flex-col items-center">
            {/* Logo */}
            <div>
              <Image
                src="/images/bishop_logo.webp"
                alt="Truck Bishop Logo"
                width={100}
                height={100}
                priority
                className="rounded-full"
              />
            </div>

            {/* Tagline */}
            <div>
              <p className=" text-md sm:text-lg drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] text-center">
                Quality Storm Drain Services, Commercial and Residential
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3 justify-center">
                <i className="bi bi-envelope text-xl"></i>
                <a
                  href="mailto:russel@bishopsdrain.com?subject=Inquiry&body=Hello"
                  className="hover:text-primary"
                >
                  russel@bishopsdrain.com
                </a>
              </div>

              {/* Mailing Address */}
              <div className="flex items-center gap-3 justify-center">
                <i className="bi bi-mailbox text-xl"></i>
                <p>PO Box 2 Clinton, MS 39060</p>
              </div>
            </div>

            {/* Call Button */}
            <div>
              <a href="tel:+16019325838" className="btn btn-primary btn-lg gap-2">
                <i className="bi bi-telephone-fill"></i>
                <span>(601) 932-5838</span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-base-100 p-8 rounded-lg shadow-lg">
            <Heading as='h2' className="text-3xl font-bold mb-8 text-center">CONTACT US</Heading>
            {/* <h2 className="text-3xl font-bold mb-8 text-center">CONTACT US</h2> */}
            
            {/* Success Message */}
            {submitStatus === "success" && (
              <div className="alert alert-success mb-4">
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="alert alert-error mb-4">
                <span>Oops! Something went wrong. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="input input-bordered w-full"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  className="input input-bordered w-full"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered w-full"
                value={formData.address}
                onChange={handleChange}
              />

              {/* Email and Services Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="input input-bordered w-full"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <select 
                  name="service"
                  className="select select-bordered w-full"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Services Needed*</option>
                  <option value="Residential Services">Residential Services</option>
                  <option value="Commercial Services">Commercial Services</option>
                  <option value="Emergency Services">Emergency Services</option>
                  <option value="Drain Cleaning">Drain Cleaning</option>
                  <option value="Video Inspection">Video Inspection</option>
                  <option value="Maintenance Plan">Maintenance Plan</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                className="textarea textarea-bordered w-full h-32"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-wide"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}