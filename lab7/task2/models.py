class Product:
    def __init__(self, name, price, stock):
        self.name = name
        self.price = price
        self.stock = stock

    def get_total_value(self):
        return self.price * self.stock

    def apply_discount(self, percent):
        self.price -= self.price * (percent / 100)
        return f"Cost {self.name} down to {self.price:.2f}"

    def __str__(self):
        return f"Product: {self.name} Price: {self.price} Stock: {self.stock}"


class Electronic(Product):
    def __init__(self, name, price, stock, warranty_months):
        super().__init__(name, price, stock)
        self.warranty_months = warranty_months

    def get_warranty_info(self):
        return f"Garanty for {self.name}: {self.warranty_months} month."
    
    def apply_discount(self, percent):
        if percent > 10:
            percent = 10
            message = "Maximum percentage skidka = 10%"
        else:
            message = ""
        
        super().apply_discount(percent)
        return f"Price {self.name} updated {message}. New price: {self.price:.2f}"


class Clothing(Product):
    def __init__(self, name, price, stock, size):
        super().__init__(name, price, stock)
        self.size = size

    def __str__(self):
        base_str = super().__str__()
        return f"{base_str} | Size: {self.size}"