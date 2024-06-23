/*
The Dependency Inversion Principle (DIP) emphasizes decoupling and abstraction. The principle consists of two core concepts: high-level modules should not depend on low-level modules, and both should depend on abstractions. This inverted dependency relationship promotes flexibility, testability, and maintainability.
*/


/**
 * The Dependency Inversion Principle (DIP) is one of the five SOLID principles of object-oriented design, formulated by Robert C. Martin. DIP suggests that high-level modules should not depend on low-level modules. Instead, both should depend on abstractions. Moreover, abstractions should not depend on details; details should depend on abstractions.

Key Concepts of DIP
High-level modules: These are the components or modules that contain complex logic and coordinate tasks.
Low-level modules: These are the components or modules that perform fundamental operations.
Abstractions: Interfaces or abstract classes that define methods but do not implement them. Both high-level and low-level modules should depend on these abstractions.
Why DIP Matters
Flexibility: By depending on abstractions, you can change the implementation details without affecting the high-level logic.
Testability: It is easier to test modules in isolation when they depend on abstractions.
Maintainability: Changes in low-level modules or high-level modules can be made independently if they follow DIP.
 */

/**
 * Consider a scenario where you have a UserService that sends notifications 
 * to users. Without DIP, UserService directly depends on a concrete EmailService. 
 * This is not flexible because changing the notification method (e.g., to SMS) 
 * requires modifying UserService. 
 * */

class EmailService {
    sendEmail(user, message) {
      console.log(`Sending email to ${user}: ${message}`);
    }
  }
  
  class UserService {
    constructor() {
      this.emailService = new EmailService();
    }
  
    notifyUser(user, message) {
      this.emailService.sendEmail(user, message);
    }
  }
  
  const userService = new UserService();
  userService.notifyUser("John Doe", "Hello, John!");
  
  class NotificationService {
    send(user, message) {
      throw "This method should be overridden!";
    }
  }
  class EmailService extends NotificationService {
    send(user, message) {
      console.log(`Sending email to ${user}: ${message}`);
    }
  }
  
  class SMSService extends NotificationService {
    send(user, message) {
      console.log(`Sending SMS to ${user}: ${message}`);
    }
  }

  class UserService {
    constructor(notificationService) {
      this.notificationService = notificationService;
    }
  
    notifyUser(user, message) {
      this.notificationService.send(user, message);
    }
  }
  const emailService = new EmailService();
  const smsService = new SMSService();
  
  const userServiceWithEmail = new UserService(emailService);
  const userServiceWithSMS = new UserService(smsService);
  
  userServiceWithEmail.notifyUser("John Doe", "Hello, John!");
  userServiceWithSMS.notifyUser("Jane Doe", "Hi, Jane!");

/**
 * 
Abstraction: NotificationService is an abstract class (or interface) that both EmailService and SMSService implement.
High-level Module: UserService now depends on the abstraction (NotificationService) instead of a concrete class.
Concrete Implementations: EmailService and SMSService implement the NotificationService interface.
Dependency Injection: The specific implementation of NotificationService is injected into UserService via the constructor, enabling flexibility.
 */