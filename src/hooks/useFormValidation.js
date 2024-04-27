import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    let isValid = true;
    const newErrors = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!data.contact.trim()) {
      newErrors.contact = "Contact Number is required";
      isValid = false;
    }

    if (!data.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(data.password)) {
      newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      isValid = false;
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { errors, validateForm };
};

export default useFormValidation;
