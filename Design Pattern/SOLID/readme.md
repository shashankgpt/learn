# SOLID Principle

1. **Single Responsibility ** -> One class should have only 1 responsibility. Ex: Journal example. It helps to manage and update and maintain the code.
   1. Guard object (anti pattern)- One hug class method that handles all functionality in one and avoid `Spaghetti code`
   2. Separation of concern
2. Open-closed principle-> open for extension and closed for modification. Use inheritance Ex: Filter
   1. It avoid `State space explosion`
   2. Specification Pattern helps us to achive that
   3. Also help in separation of concern
3. Liskov Substitution Principle -> States that if a function takes parent class, it should be able to accept child class without breaking. Ex- shape rect
4. Interface Segregation Principle -> Base class should min methods.(YAGNI) and hence split Ex - Printer
5. Dependency Inversion Principle -> High level module should not depend on level model like relationship.  use Abstractions

1. **Single Responsibility ** -> One class should have only 1 responsibility. Ex: Journal example. It helps to manage and update and maintain the code.
   1. Guard object (anti pattern)- One hug class method that handles all functionality in one and avoid `Spaghetti code`
   2. Separation of concern
2. Open-closed principle-> open for extension and closed for modification. Use inheritance Ex: Filter
   1. It avoid `State space explosion`
   2. Specification Pattern helps us to achive that
   3. Also help in separation of concern
3. Liskov Substitution Principle -> States that if a function takes parent class, it should be able to accept child class without breaking. Ex- shape rect
4. Interface Segregation Principle -> Base class should min methods.(YAGNI) and hence split Ex - Printer
5. Dependency Inversion Principle -> High level module should not depend on level model like relationship.  use Abstractions
