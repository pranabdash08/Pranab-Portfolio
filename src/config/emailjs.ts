// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_no3qmmn',
  TEMPLATE_ID: 'template_zc33q1h',
  PUBLIC_KEY: '-wzXIOI_7QgKV8_Fl',
};

// Template variables that will be sent to EmailJS
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name?: string; // Optional: recipient name
}

// EmailJS initialization
export const initializeEmailJS = () => {
  // EmailJS will be initialized in the component
  // This function can be used for any additional setup if needed
  console.log('EmailJS configuration loaded');
}; 