import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Product List</h1>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
          <li>Product 4</li>
        </ul>
      </div>
    </Layout>
  );
}
