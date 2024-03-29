import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, produtcs }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title}
        </Link>
      </h2>
      <div className="preview">
        {produtcs
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
