const validateForm = (name, email, username, phone) => {
    
    console.log(name, email, username, phone);
    
    if(!name || !email || !username || !phone) {
        console.log("All fields are required")
        return false;
    } 

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email) || !phoneRegex.test(phone)) {
        console.log("Invalid email or phone number");
        return true;
    }
};


export default validateForm;