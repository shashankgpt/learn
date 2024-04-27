class Machine {
    print() {}
    scan() {}
    fax() {}
}

class Printer extends Machine {
    print() {}

    scan() {}
    fax() {}
}

class OldPrinter extends Machine {
    print() {}

    scan() {
        // throw an exceptio old printer can't scan
    }
    fax() {
        // throw an exceptio old printer can't fax
    }
}

// fixing 
class Printer {
    print() {}
}

class Scanner {
    scan() {}
}

class Fax {
    fax() {}
}

class OldPrinter extends Printer {
    
}

class Printer extends Scanner, Fax, Printer {
    
}