from django.db import models

class Categories(models.Model):
    name = models.CharField(max_length = 255)

    def __str__(self):
        return self.name
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    
class Product(models.Model):
    name = models.CharField(max_length= 255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, related_name='products')
    def __str__(self):
        return f"{self.name} ({self.category.name})"
    def to_json(self):
        return{
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'desription': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'category_id': self.category.id
        }
    
    