/**
 * Motivation
Components may go in and out of a system at any time
• Chat room participants
• Players in an MMORPG
so It makes no sense for them to have direct references to one
another
• Those references may go dead
so Solution: have them all refer to some central component that
facilitates communication
 */

/** Chat Room */
class Person
{
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }

  receive(sender, message)
  {
    let s = `${sender}: '${message}'`;
    console.log(`[${this.name}'s chat session] ${s}`);
    this.chatLog.push(s);
  }

  say(message) {
    this.room.broadcast(this.name, message);
  }

  pm(who, message)
  {
    this.room.message(this.name, who, message);
  }
}

class ChatRoom // medidator
{
  constructor()
  {
    this.people = [];
  }

  broadcast(source, message)
  {
    for (let p of this.people)
      if (p.name !== source)
        p.receive(source, message);
  }

  join(p)
  {
    console.log(p)
    let joinMsg = `${p.name} joins the chat`;
    this.broadcast('room', joinMsg);
    p.room = this;
    this.people.push(p);
  }

  message(source, destination, message)
  {
    for (let p of this.people)
      if (p.name === destination)
        p.receive(source, message);
  }
}

let room = new ChatRoom();

let john = new Person('John');
let jane = new Person('Jane');

room.join(john);
room.join(jane);

john.say('hi room');
jane.say('oh, hey john');

let simon = new Person('Simon');
room.join(simon);
simon.say('hi everyone!');

jane.pm('Simon', 'glad you could join us!');

/**
 * Summary
& Create the mediator and have each
object in the system refer to it
so Mediator engages in bidirectional
communication with its connected
components
so Mediator has functions the
components can call
Summary
 */
