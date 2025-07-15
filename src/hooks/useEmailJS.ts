import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from '../config/emailjs';
import toast from 'react-hot-toast';

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<boolean> => {
    // Check if EmailJS is properly configured
    if (
      EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      toast.error('EmailJS is not configured. Please update the configuration.');
      return false;
    }

    setIsLoading(true);

    try {
      const templateParams: Record<string, unknown> = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Pranab Dash', // Your name as the recipient
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        return true;
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Handle specific error cases
      if (error instanceof Error) {
        if (error.message.includes('Invalid template')) {
          toast.error('Email template configuration error. Please check your EmailJS setup.');
        } else if (error.message.includes('Invalid service')) {
          toast.error('Email service configuration error. Please check your EmailJS setup.');
        } else if (error.message.includes('Invalid public key')) {
          toast.error('EmailJS public key error. Please check your configuration.');
        } else {
          toast.error('Failed to send message. Please try again later.');
        }
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendEmail,
    isLoading,
  };
}; 