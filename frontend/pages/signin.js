import Layout from "../components/Layout";
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
    return (
        <Layout>
            <h2>SIgn In Page</h2>
            <Link href='/' ><a>Home</a></Link>
        </Layout>
    );
};

export default Signin;