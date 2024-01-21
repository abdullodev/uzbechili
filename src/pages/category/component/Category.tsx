import useGlobalContext from "@/context/useGlobal";
import { useApi } from "@/hooks/useApi/useApiHooks";
import { isAuth } from "@/services/auth";
import {
  ProductBox,
  ProductButton,
  ProductImg,
  ProductInfo,
} from "@/styles/Common.style";
import { numberFormat } from "@/utils/numberFormat";
import { Grid, Typography } from "@mui/material";
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
          <Grid container spacing={[2, 3]}>
            {get(item, "products", []).map((product: Record<string, any>) => (
              <Grid item xl={2} lg={2.4} md={3} sm={4} xs={6} key={product._id}>
                <ProductBox
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
                        }
                      }}
                    >
                      {numberFormat(get(product, "price", 0))}
                      <span className="currency"> uzs</span>
                    </ProductButton>
                  </ProductInfo>
                </ProductBox>
              </Grid>
            ))}
          </Grid>
        </CategoryBoxStyle>
      ))}
    </>
  );
};

export default Category;
