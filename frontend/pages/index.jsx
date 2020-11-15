import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Index = () => {
    return <Layout>
        <h2>This is index page</h2>
        <Link href='/signin' ><a>Sign In</a></Link>
    </Layout>
};

export default Index;