import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="w-[150px] min-w-[150px] space-y-8">
      {/* div da renderização da imagem */}
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="rounded-lg object-cover shadow-md"
        />
      </div>

      {/* div da renderização dos dados do produto */}
      <div>
        <h2>{product.name}</h2>

        <div>
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(Number(product.price))}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
