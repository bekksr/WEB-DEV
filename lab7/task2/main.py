from models import Animal, Dog, Cat

animal = Animal("BOOW", "User", "Black", 3)
dog = Dog("Rex", "shepherd", "brown", 5, "male")
cat = Cat("Barsik", "Ragdoll", "beige", 4, "medium", "ball")


animals = [animal, dog, cat]

for i in animals:
    print(i.info())
    print(i.make_sound())
    print(i)
    print("--------")

print(dog.get_gender())
print(cat.weight())
print(cat.playing())