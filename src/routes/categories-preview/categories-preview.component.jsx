import React from "react";
import { useSelector } from "react-redux";

import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesMap,
  seelctCategoriesIsLoading,
} from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(seelctCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreview
            key={title}
            title={title}
            produtcs={categoriesMap[title]}
          />
        ))
      )}
    </>
  );
};

export default CategoriesPreview;
