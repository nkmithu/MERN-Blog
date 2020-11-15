import {useState} from "react";
import {signup} from '../../actions/auth';

const SignupComp = () => {

    const [values,
        setValues] = useState({
        name: 'Mithu',
        email: 'mithu@test.com',
        password: '12345',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const {
        name,
        email,
        password,
        error,
        loading,
        message,
        showForm
    } = values;

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.table({     name,     email,     password,     error,     loading,
        //  message,     showForm });
        setValues({
            ...values,
            loading: true,
            error: false
        });

        const user = {
            name,
            email,
            password
        };

        signup(user)
        .then(data => {
            if (data) {
                setValues({...values, name: '', email: '', password: '', error: '', loading: false,})
            }
        })

    }

    const handleChange = name => (e) => {
        setValues({
            ...values,
            error: false,
            [name]: e.target.value
        })
    }

    const signupForm = () => {

        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        onChange={handleChange('name')}
                        type="text"
                        name=""
                        id=""
                        placeholder="Your Name"
                        value={name}/>
                </div>
                <div className="form-group">
                    <input
                        onChange={handleChange('email')}
                        type="email"
                        name=""
                        id=""
                        placeholder="Your Email"
                        value={email}/>
                </div>
                <div className="form-group">
                    <input
                        onChange={handleChange('password')}
                        type="password"
                        name=""
                        id=""
                        placeholder="Type your password"
                        value={password}/>
                </div>
                <button className="btn btn-primary">Sign Up</button>
            </form>
        )

    }

    return ( <> {
        signupForm()
    } < />
        
    );
};

export default SignupComp;