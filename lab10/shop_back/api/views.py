from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Categories, Product
from rest_framework.decorators import action
from .serializers import CategoriesSerializer, ProductSerializer

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk = None):
        category = self.get_object()
        products = category.products.all()
        serializer = ProductSerializer(products, many = True)
        return Response(serializer.data)
    

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

