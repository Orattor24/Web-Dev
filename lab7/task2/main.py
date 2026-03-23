from models import Electronic, Clothing

def main():
    laptop = Electronic("Asus Vivobook PRO MC6500", 80000, 5, 'China')
    phone = Electronic("Vivo Y24", 45000, 10, 'Singapure')
    tshirt = Clothing("Supreme", 1500, 50, "M")
    jeans = Clothing("Gloria Jeans", 4000, 20, "M")

    catalog = [laptop, phone, tshirt, jeans]


    for item in catalog:
        print(item)
    
    for item in catalog:
        result = item.discount(30)
        print(result)

    totalInventoryValue = 0
    for item in catalog:

        value = item.getAllPrice()
        totalInventoryValue += value
        print(f"TotalInventoryValue {item.name} {value} ")

    print(f"{totalInventoryValue}")

if __name__ == "__main__":
    main()