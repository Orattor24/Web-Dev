class Book:
    def __init__(self, title, author, book_id, is_available):
        self.title = title
        self.author = author
        self.book_id = book_id
        self.is_available = is_available

    def borrow_book(self, book_id):
        if (self.is_available == True):
            self.is_available = False
            return f"{self.book_id} {self.title} was borrowed"
    
    def return_book(self, book_id):
        if (self.is_available == False):
            self.is_available = True
            return f"{self.book_id} {self.title} was returned"
    

    def __str__(self):
        return f"Book: {self.title} Author: {self.author} Book id: {self.book_id} Is Available: {self.is_available}"


class EBook(Book):
    def __init__(self, title, author, book_id, is_available, file_size):
        super().__init__(title, author, book_id, is_available)
        self.file_size = file_size

    def update_size(self,new):
        self.file_size += new
        return f" Updated {self.book_id} file size was {self.file_size}"
    
    def __str__(self):
        str = super().__str__()
        return f"{str}  has file size: {self.file_size}"
            



class PrintedBook(Book):
    def __init__(self, title, author, book_id, is_available, pages, weight):
        super().__init__(title, author, book_id, is_available)
        self.pages = pages
        self.weight = weight

    def update_page(self,new):
        self.pages += new
        self.weight += 1
        return f" Updated {self.book_id} file size was {self.pages} {self.weight}"
    

    def borrow_book(self, book_id):
        return super().borrow_book(book_id) + f" And say: Why book's weight {self.weight} {self.pages}"

    def __str__(self):
        str = super().__str__()
        return f"{str}  Size: {self.pages}"