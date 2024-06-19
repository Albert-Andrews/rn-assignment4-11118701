ASSIGNMENT 4

Creating an App for Jobs

The Log In screen has and input with Touchable opacity within the Login button which is a custom one

and i wrote a javascript function to validate user before loggin in, after you log in i try to pass the information to the Home page

![screenshot](/assets/1.png)

So when you go to the landing page you realize that the name of the user who logged in si reflecting on the profile section

Usage

1Open the app.

2.Enter your login credentials and press the login button.

3.Once logged in, you will be redirected to the home page where you can see your profile information and job listings.

![screenshot](/assets/2.png)

Features

1.Login Screen: Validate user credentials before logging in.

2.Profile Section: Display the logged-in user's name.

3.Horizontal Job List: Show major job listings in a horizontal flatlist.

4.Vertical Job List: Display popular job listings in a vertical flatlist.

![screenshot](/assets/3.png)

![screenshot](/assets/4.png)

Code Overview

const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [errors, setErrors] = React.useState({});
//use navigation to be able to navigate and pass params
const navigation = useNavigation();

const validate = () => {

    const newErrors = {};
    //check if name is empty
    if (!name) newErrors = "Please enter your name";
    //check if email is empty
    if (!email) newErrors = "Please enter your email";
    //check if email is valid
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      newErrors = "Please enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

};
