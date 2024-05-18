/**
Want to augment an object with additional functionality
Do not want to rewrite or alter existing code (OCP)
Want to keep new functionality separate (SRP)
» Need to be able to interact with existing structures
» Two options:
• Inherit from required object (if possible)
• Build a Decorator, which simply references the dece
 */

/**
 * Decorator
Facilitates the addition of
behaviors to individual objects
without inheriting from them.
Look at example of bridge
 */

// Profile interface representing the base component
class Profile {
    constructor(name, email, profilePicture) {
        this.name = name;
        this.email = email;
        this.profilePicture = profilePicture;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Profile Picture: ${this.profilePicture}`);
    }
}

// Decorator class implementing the Profile interface
class ProfileDecorator extends Profile {
    constructor(profile) {
        super(profile.name, profile.email, profile.profilePicture);
        this.profile = profile;
    }

    display() {
        this.profile.display();
    }
}

/**
 * Summary
so A decorator keeps the
reference to the decorated
object(s)
Adds utility fields and
methods to augment the
object's features
• May or may not forward calls
to the underlying object
 */