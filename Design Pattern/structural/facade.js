/**
 * so Balancing complexity and
presentation/usability
Typical home
Many subsystems (electrical,
sanitation)
Complex internal structure (e.g.,
floor layers)
End user is not exposed to
internals
so Same with software!
Many systems working to provide
flexibility, but...
API consumers want it to 'just
work'
 */

/**
 * Façade
Provides a simple, easy to
understand/user interface over a large
and sophisticated body of code.
 */

class SubsystemA {
    method() {
      console.log('This is a method of Subsystem-A');
    }
  }
   
  class SubsystemB {
    method() {
      console.log('This is a method of Subsystem-B');
    }
  }
   
  class SubsystemC {
    method() {
      console.log('This is a method of Subsystem-C');
    }
  }

  class Facade {
    constructor() {
      this.subsystemA = new SubsystemA();
      this.subsystemB = new SubsystemB();
      this.subsystemC = new SubsystemC();
    }
   
    commonInterface() {
      this.subsystemA.method();
      this.subsystemB.method();
      this.subsystemC.method();
    }
  }