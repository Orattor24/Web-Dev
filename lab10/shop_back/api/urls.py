from django.urls import path
from api import views

urlpatterns = [
path('categories/', views.CategoriesListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoriesDetailAPIView.as_view()),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    
    path('categories/<int:category_id>/products/', views.CategoriesProductsAPIView.as_view()),
]