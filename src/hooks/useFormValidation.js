import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    let isValid = true;
    const newErrors = {};

    // Perform validation checks here
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
