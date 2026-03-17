class Animal:
    def __init__(self, name, breed, color, age):
        self.name = name
        self.breed = breed
        self.color = color
        self.age = age

    def make_sound(self):
        return "Some animal make sound"
    
    def info(self):
        return f"{self.name}  is a {self.breed} with color {self.color} and he/she is {self.age} y.o"
    
    def __set__(self):
        return f"{self.name} ({self.breed})"

class Dog(Animal):
    def __init__(self, name, breed, color, age, gender) :
        super().__init__(name, breed, color, age)
        self.gender = gender

    def make_sound(self):
        return f"{self.name} make WOOOF"
    
    def get_gender(self):
        return f"{self.name} has gender - {self.gender}"
    
class Cat(Animal):
    def __init__(self, name, breed, color, age, size, toy):
        super().__init__(name, breed, color, age)
        self.size = size
        self.toy = toy
    
    def weight(self):
        return f" {self.name} weighs {self.size}"
    
    def make_sound(self):
        return f"{self.name} make MEEOW"

    def playing(self):
        return f" {self.name} with color {self.color} is playing with a {self.toy}"


        






