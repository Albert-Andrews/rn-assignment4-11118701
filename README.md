ASSIGNMENT 4

Creating an App for Jobs

The Log In screen has and input with Touchable opacity within the Login button which is a custom one

and i wrote a javascript function to validate user before loggin in, after you log in i try to pass the information to the Home page

![screenshot](/assets/1.png)

So when you go to the landing page you realize that the name of the user who logged in si reflecting on the profile section

Usage
1.Open the app.

2.Enter your login credentials and press the login button.

3.Once logged in, you will be redirected to the home page where you can see your profile information and job listings.
Components

Login Screen
Usage: Allows users to enter their credentials and log in to the app.
Functionality: Validates the user's credentials and navigates to the home page upon successful login.

Home Screen
Usage: Displays the logged-in user's profile information and job listings.
Functionality: Shows the user's name in the profile section and includes horizontal and vertical flatlists for job listings.

Horizontal Flatlist for Major Jobs
Usage: Displays major job listings in a horizontal scrollable view.
Functionality: Provides a quick glance at major job opportunities with a horizontal scrolling interface.

Vertical Flatlist for Popular Jobs
Usage: Displays popular job listings in a vertical scrollable view.
Functionality: Lists popular jobs with a vertical scrolling interface for detailed browsing.

Features
Login Screen: Validate user credentials before logging in.
1.Profile Section: Display the logged-in user's name.
2.Horizontal Job List: Show major job listings in a horizontal flatlist.
3.Vertical Job List: Display popular job listings in a vertical flatlist.

![screenshot](/assets/2.png)

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
