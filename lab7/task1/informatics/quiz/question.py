from data import question

class Question:
    def __init__(self, text, answer, in_answ):
        self.text = text
        self.answer = answer
        self.in_answ = in_answ

    def compare(self, vvod):
       
        if vvod.strip().upper() == self.answer.upper() or vvod.strip().upper() == self.answer[0].upper():
            print("Right!")
            return True
        else:
            print(f"Error, right answer was: {self.answer}")
            return False

questions = []
for item in question:
    new_q = Question(
        text=item["QT"], 
        answer=item["Answer"], 
        in_answ=item["InAnsw"]
    )
    questions.append(new_q)