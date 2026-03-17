from models import Electronic, Clothing

def main():
    laptop = Electronic("Asus Vivobook PRO MC6500", 80000, 5, 24)
    phone = Electronic("Vivo Y24", 45000, 10, 12)
    tshirt = Clothing("Supreme", 1500, 50, "M")
    jeans = Clothing("Gloria Jeans", 4000, 20, "M")

    catalog = [laptop, phone, tshirt, jeans]
    for item in catalog:
        print(item)
    
    for item in catalog:
        result = item.apply_discount(20)
        print(result)

    total_inventory_value = 0
    for item in catalog:
        value = item.get_total_value()
        total_inventory_value += value
        print(f"{item.name} {value:.2f}")

    print(f"{total_inventory_value:.2f}")

if __name__ == "__main__":
    main()