class Product:
    def __init__(self, name, price, stock):
        self.name = name
        self.price = price
        self.stock = stock

    def getAllPrice(self):
        return self.price * self.stock

    def discount (self, percent):
        self.price -= self.price * (percent / 100)
        return f"Cost {self.name} down to {self.price}"

    def __str__(self):
        return f"Product: {self.name} Price: {self.price} Stock: {self.stock}"


class Electronic(Product):
    def __init__(self, name, price, stock, country_production):
        super().__init__(name, price, stock)
        self.country_production = country_production

    def countryProductionInformation(self):
        return f" {self.name} Made in {self.country_production}"
    
    def discount(self, percent):
        if percent > 10:
            percent = 10
            return "Maximum percentage discount = 10%"
        else:
            super().discount(percent)
            return f"Price {self.name} updated. New price: {self.price:.2f}"
        
    def __str__(self):
        str = super().__str__()
        return f"{str}  Made in: {self.country_production}"
            



class Clothing(Product):
    def __init__(self, name, price, stock, size):
        super().__init__(name, price, stock)
        self.size = size

    def __str__(self):
        str = super().__str__()
        return f"{str}  Size: {self.size}"