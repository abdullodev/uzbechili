import useGlobalContext from "@/context/useGlobal";
import { useApi } from "@/hooks/useApi/useApiHooks";
import { isAuth } from "@/services/auth";
import { ProductButton, ProductImg, ProductInfo } from "@/styles/Common.style";
import { numberFormat } from "@/utils/numberFormat";
import { Typography } from "@mui/material";
import { get } from "lodash";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryBoxStyle } from "../container/Categories.style";

const Category = () => {
  const navigate = useNavigate();
  const {
    actions: { setAuth },
  } = useGlobalContext();
  const { id } = useParams<{ id: string }>();
  const { data: subCategories } = useApi(`/categories/${id}`);

  return (
    <>
      {get(subCategories, "data", []).map((item: Record<string, any>) => (
        <CategoryBoxStyle>
          <h3>{get(item, "name", "")}</h3>
          <div className="products_container">
            {get(item, "products", []).map((product: Record<string, any>) => (
              <div
                className="one_product"
                key={product._id}
                onClick={() => {
                  navigate(`/product/${product._id}`);
                }}
              >
                <ProductImg className="product_img">
                  {product.imageUrls?.[0] && (
                    <img
                      src={
                        import.meta.env.VITE_BASE_URL + product.imageUrls?.[0]
                      }
                      alt={product.imageUrl}
                    />
                  )}
                </ProductImg>
                <ProductInfo>
                  <Typography variant="h3" className="title">
                    {get(product, "name", "")}
                  </Typography>
                  <ProductButton
                    onClick={(e: any) => {
                      e.stopPropagation();
                      if (!isAuth()) {
                        setAuth(true);
                      } else navigate(`/product/${product._id}`);
                    }}
                  >
                    <span >{numberFormat(get(product, "price", 0))}</span>
                    <span className="currency"> uzs</span>
                  </ProductButton>
                </ProductInfo>
              </div>
            ))}
          </div>
        </CategoryBoxStyle>
      ))}
    </>
  );
};

export default Category;
