/**
 * Chain of Responsibility  
A chain of components who all get a chance to
process a command or a query, optionally
having default processing implementation and
an ability to terminate the processing chain.
 */

class Creature {
    constructor(name, attack, defense) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
    }
  
    toString() {
      return `${this.name} (${this.attack}/${this.defense})`;
    }
  }
  
  class CreatureModifier
  {
    constructor(creature)
    {
      this.creature = creature;
      this.next = null;
    }
  
    add(modifier)
    {
        console.log(this, modifier)
      if (this.next) this.next.add(modifier);
      else this.next = modifier;
    }
  
    handle()
    {
      if (this.next) this.next.handle();
    }
  }
  
  class NoBonusesModifier extends CreatureModifier
  {
    constructor(creature)
    {
      super(creature);
    }
  
    handle()
    {
      console.log('No bonuses for you!');
    }
  }
  
  class DoubleAttackModifier extends CreatureModifier
  {
    constructor(creature)
    {
      super(creature);
    }
  
    handle()
    {
      console.log(`Doubling ${this.creature.name}'s attack`);
      this.creature.attack *= 2;
      super.handle();
    }
  }
  
  class IncreaseDefenseModifier extends CreatureModifier
  {
    constructor(creature)
    {
      super(creature);
    }
  
    handle() {
      if (this.creature.attack <= 2)
      {
        console.log(`Increasing ${this.creature.name}'s defense`);
        this.creature.defense++;
      }
      super.handle();
    }
  }
  
  let goblin = new Creature('Goblin', 1, 1);
  console.log(goblin.toString());
  
  let root = new CreatureModifier(goblin);
  console.log(root);
  
  //root.add(new NoBonusesModifier(goblin));
  
  root.add(new DoubleAttackModifier(goblin)); // root
  //root.add(new DoubleAttackModifier(goblin));
  
  root.add(new IncreaseDefenseModifier(goblin));
  
  // eventually...
  root.handle();
  console.log(goblin.toString());


  /**
   * Real life example https://www.calibraint.com/blog/chain-of-responsibility-design-pattern#:~:text=In%20this%20scenario%2C%20the%20Chain,next%20handler%20in%20the%20chain.
   */

  
  /**
   * Command
Query
Separat
Command
Query
Separation
so Command = asking for an action
or change (e.g., please set your
attack value to 2).
so Query = asking for information
(e..g, please give me your attack
value).
CQS = having separate means of
ling commands and queries to
direct field access.
   */