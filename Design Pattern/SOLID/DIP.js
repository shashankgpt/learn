/*
The Dependency Inversion Principle (DIP) emphasizes decoupling and abstraction. The principle consists of two core concepts: high-level modules should not depend on low-level modules, and both should depend on abstractions. This inverted dependency relationship promotes flexibility, testability, and maintainability.
*/


class ConcreteUserRepository{
    findUserBy(username) {
     // ...
    }
  }
  
  class UserService {
    constructor(c) {
        this.userRepository = c
    } 
    authenticateUser(username, password) {
        // Logic to authenticate user using the DatabaseService
        let existingUser = userRepository.findUserBy(username)
        if(existingUser != null) {
            // authenticate
            ...
        }
    }
  }

  // fixing it

  interface UserRepository {
    findUserBy(username) {
    }
 }
 
 class ConcreteUserRepository extends UserRepository {
    findUserBy(username) {
    }
 }
 
 class UserService {
     constructor(u) {
         this.userRepository = u
     }

     authenticateUser(username, password) {
         // Logic to authenticate user using the DatabaseService
         let existingUser = this.userRepository.findUserBy(username)
         if(existingUser != null) {
             // authenticate
             // ...
         }
     }
}