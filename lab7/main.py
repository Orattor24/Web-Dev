from models import Book, EBook, PrintedBook

def main():
    print("===== Book System =====")
    lop = True
    catalog = []
    while(lop):
        print("1. Add Book \n2. View Books \n3. Borrow Book \n4. Return Book \n5. Search \n6. Exit")
        command = int(input("Enter choice: "))
        if(command == 1):
            typea = input("Enter type (ebook/printed): ")
            tys = ""
            if(typea == "ebook"):
                tys = "ebook"
            else:
                tys = "printed"
            
            title = input("Enter title: ")
            author = input("Enter author: ")
            id = input("Enter ID: ")
            if(tys == "ebook"):
                file_size = input("Enter file size ")
                new_book = EBook(title, author, id, True,file_size)
                catalog.append(new_book)
            else:
                pages = input("Enter pages")
                weight = input("Enter weight")
            
            print("Book added successfully!")
        else:
            lop = False

            


    book = Book("1984", "Floyd", 1, True)
    ebook = EBook("451", "Rick Millers", 2, 'True', 400)
    printedbook = PrintedBook("We", "Ozzy Osborn",3 , "True", 30, 20)



    for item in catalog:
        print(item)

    ebook.update_size(300)
    printedbook.update_page(10)

    '''print(book)

    print(book.borrow_book(1))

    print(laptop)

    print(laptop.return_book(1))

    print(laptop)'''

if __name__ == "__main__":
    main()