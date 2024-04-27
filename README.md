## Registration Form Component
This is a React component for a registration form designed to collect user information such as first name, last name, email, contact, password, and confirm password. The component includes validation for each input field and displays error messages accordingly. Additionally, it utilizes SweetAlert for displaying success messages upon successful form submission.

### Live Site
You can view a live demo of this project [Live Site](https://team-genx.vercel.app/).

### How to Clone and Run the Project
#### Prerequisites
Before you begin, ensure you have the following installed on your machine:

* Node.js
* npm (Node Package Manager) or yarn

#### Clone the 

```bash
git clone https://github.com/yourusername/registration-form.git
cd registration-form
```
#### Install Dependencies

```bash
npm install
# or
yarn
```

#### Run the Project

```bash
npm run dev
# or
yarn dev

```

This will generate optimized production-ready assets in the dist directory.

### Components and Functionality

#### Components
* RegistrationForm: This component is responsible for rendering the registration form UI. It consists of input fields for first name, last name, email, contact, password, confirm password, and a submit button.

#### Hooks
* useFormValidation: This custom hook is responsible for validating form data. It checks for required fields, password length, and password complexity (uppercase, lowercase, special characters). It returns any validation errors encountered during form submission.

#### Functionality
* Form Validation: The form data entered by the user is validated using the useFormValidation hook. Validation rules include ensuring that all required fields are filled, the password is at least 6 characters long, and it contains at least one uppercase letter, one lowercase letter, one number, and one special character.

* Error Handling: Error messages are displayed below each input field if validation fails. These error messages dynamically update as the user interacts with the form.

* SweetAlert Integration: Upon successful form submission, a SweetAlert modal is displayed with a success message indicating that the registration was successful.

* Form Reset: After successful submission, the form is reset, clearing all input fields and error messages, allowing the user to easily submit another registration if desired.