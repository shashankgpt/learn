/** 
 * Motivation
so Ordinary statements are perishable
• Cannot undo member assignment
• Cannot directly serialize a sequence of actions (calls)
so Want an object that represents an operation
• person should change its age to value 22
• car should do explode()
so Uses: GUI commands, multi-level undo/redo, macro recording
and more!
*/
/*
 * Command
An object which represents an
instruction to perform a particular
action. Contains all the information
necessary for the action to be taken.
 */

let Action = Object.freeze({
    deposit: 0,
    withdraw: 1,
  });
  
  class Command {
    constructor(action, amount) {
      this.action = action;
      this.amount = amount;
      this.success = false;
    }
  }
  
  class Account {
    constructor() {
      this.balance = 0;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      this.balance -= amount;
    }
  
    do(cmd) {
      switch (cmd.action) {
        case 0:
          this.deposit(cmd.amount);
          cmd.success = true;
          break;
        case 1:
          if (this.balance >= cmd.amount) {
            cmd.success = true;
          } else {
            cmd.success = false;
          }
          this.withdraw(cmd.amount);
          break;
      }
    }
  
    undo(cmd) {
      if (cmd.success) {
        return;
      }
      switch (cmd.action) {
        case 0:
          this.withdraw(cmd.amount);
          break;
        case 1:
          this.deposit(cmd.amount);
          break;
      }
    }
  
    process(cmd) {
      this.do(cmd);
      this.undo(cmd);
    }
  }
  