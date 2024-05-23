// app/page.tsx
import Image from 'next/image';

// Definisi tipe produk
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h1>Product List</h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="border p-4 m-4 w-64">
            <Image src={product.image} alt={product.title} width={200} height={200} />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-xl font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
