/**
 * An object or system goes through changes
• E.g., a bank account gets deposits and withdrawals
so There are different ways of navigating those changes
One way is to record every change (Command) and teach a
command to 'undo' itself
Another is to simply save snapshots of the system
Memento
(Memento).
 */
/**
 * Memento
A token/handle representing the system state.
Lets us roll back to the state when the token
was generated. May or may not directly expose
state information.
 */

/** This similar to command but here we store the state and not the operation  */

class Memento
{
  constructor(balance)
  {
    this.balance = balance;
  }
}

class BankAccount
{
  constructor(balance = 0) {
    this.balance = balance;
    this.changes = [new Memento(balance)];
    this.current = 0;
  }

  deposit(amount)
  {
    this.balance += amount;
    let m = new Memento(this.balance);
    this.changes.push(m);
    this.current++;
    return m;
  }

  restore(m)
  {
    if (m)
    {
      this.balance = m.balance;
      this.changes.push(m);
      this.current = this.changes.count - 1;
    }
  }

  undo()
  {
    if (this.current > 0)
    {
      let m = this.changes[--this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  redo()
  {
    if (this.current+1 < this.changes.length)
    {
      let m = this.changes[++this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  toString()
  {
    return `Balance: $${this.balance}`;
  }
}

let ba = new BankAccount(100);
ba.deposit(50);
ba.deposit(25);
console.log(ba.toString());

ba.undo();
console.log(`Undo 1: ${ba.toString()}`);
ba.undo();
console.log(`Undo 2: ${ba.toString()}`);
ba.redo();
console.log(`Redo 2: ${ba.toString()}`);