import Layout from "../components/Layout";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupComp from "../components/auth/SignupComp";

const Signup = () => {
    return (
        <Layout>
            <SignupComp></SignupComp>
        </Layout>
    );
};

export default Signup;