# Раскомментируй нужную версию для тестов. Сейчас активен Level 5 (Generics)
# from .fbv import products_list, product_detail
# from .cbv import ProductListAPIView, ProductDetailAPIView
# from .mixins import ProductListAPIView, ProductDetailAPIView
from .generics import (
    CategoriesListAPIView, 
    CategoriesDetailAPIView, 
    ProductListAPIView, 
    ProductDetailAPIView, 
    CategoriesProductsAPIView
)