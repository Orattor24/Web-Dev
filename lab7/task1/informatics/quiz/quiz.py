from question import questions

def run_quiz():
    score = 0
    for q in questions:
        print(q.text)
        all_options = q.in_answ + [q.answer]
        all_options.sort()
        
        for option in all_options:
            print(option)
            
        user_answer = input("Insert Letter: ")

        if q.compare(user_answer):
            score += 1

    print(f"FINISH! Your answer: {score} from {len(questions)}")

if __name__ == "__main__":
    run_quiz()