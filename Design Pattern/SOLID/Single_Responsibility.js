// Single Responsibility Principle fault
class Journal {
    constructor() {
        this.entries = [];
    }
    addEntry(text) {
        this.entries.push(text);
    }
    removeEntry(index) {
        this.entries.splice(index, 1);
    }
    toString() {
        
    }
    // This function breaks the principle
    saveToStorage() {
        
    }   
}

// fixing it

class Journal {
    constructor() {
        this.entries = [];
    }
    addEntry(text) {
        this.entries.push(text);
    }
    removeEntry(index) {
        this.entries.splice(index, 1);
    }
    toString() {
        
    }
}

class Persistence {
    constructor(journal) {
        this.journal = journal;
    }
    save() {
    
    }
}

// create journal
// save to storage
// 2 classess to solve it