/**
 * Chain of Responsibility  
A chain of components who all get a chance to
process a command or a query, optionally
having default processing implementation and
an ability to terminate the processing chain.
 */

/**
 * Imagine you have a system for processing support tickets. 
 * Each ticket might need to be handled by different levels of 
 * support: Level 1 support, Level 2 support, or a supervisor. 
 * Instead of hardcoding the logic to pass the ticket from 
 * one handler to another, you can use the Chain of Responsibility pattern.
 */

class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

class Level1Support extends Handler {
  handle(request) {
    if (request.level === 1) {
      console.log("Level 1 support handling the request.");
    } else {
      return super.handle(request);
    }
  }
}

class Level2Support extends Handler {
  handle(request) {
    if (request.level === 2) {
      console.log("Level 2 support handling the request.");
    } else {
      return super.handle(request);
    }
  }
}

class SupervisorSupport extends Handler {
  handle(request) {
    if (request.level === 3) {
      console.log("Supervisor handling the request.");
    } else {
      return super.handle(request);
    }
  }
}

// Create the handlers
const level1 = new Level1Support();
const level2 = new Level2Support();
const supervisor = new SupervisorSupport();

// Create the chain
level1.setNext(level2).setNext(supervisor);

// Send requests to the chain
const request1 = { level: 1, message: "Issue at level 1" };
const request2 = { level: 2, message: "Issue at level 2" };
const request3 = { level: 3, message: "Issue at level 3" };

level1.handle(request1); // Level 1 support handling the request.
level1.handle(request2); // Level 2 support handling the request.
level1.handle(request3); // Supervisor handling the request.
