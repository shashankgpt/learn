/**
 * Flyweight
A space optimization technique
that lets us use less memory by
storing externally the data
associated with similar objects.
eg
Text formatting example
storing user name
 */

class FlyweightDP {
    constructor(sharedData) {
      this.sharedData = sharedData;
    }
    operation(uniqueData) {
      console.log(`Intrinsic Property: ${this.sharedData}, Extrinsic Property: ${uniqueData}`);
    }
  }



class FlyweightFactory {
    constructor() {
      this.data = {};
    }
    getData(sharedData) {
      if (!this.data[sharedData]) {
        this.data[sharedData] = new FlyweightDP(sharedData);
      }
      return this.data[sharedData];
    }
    getFlyweightsCount() {
      return Object.keys(this.data).length;
    }
  }



const factory = new FlyweightFactory();
const flyweight1 = factory.getData('A');
flyweight1.operation('1');
const flyweight2 = factory.getData('B');
flyweight2.operation('2');
const flyweight3 = factory.getData('A');
flyweight3.operation('3');
console.log(`Number of flyweights created: ${factory.getFlyweightsCount()}`);

/** New Example */

class FormattedText
{
  constructor(plainText)
  {
    this.plainText = plainText;
    this.caps = new Array(plainText.length).map( // using the entire array to store the formatting
      function() { return false; }
    );
  }

  capitalize(start, end)
  {
    for (let i = start; i <= end; ++i)
      this.caps[i] = true;
  }

  toString()
  {
    let buffer = [];
    for (let i in this.plainText)
    {
      let c = this.plainText[i];
      buffer.push(this.caps[i] ? c.toUpperCase() : c);
    }
    return buffer.join('');
  }
}

// this would work better as a nested class
class TextRange
{
  constructor(start, end)
  {
    this.start = start;
    this.end = end;
    this.capitalize = false; // using just one object to store formatting
    // other formatting options here like italitics etc
  }

  covers(position)
  {
    return position >= this.start &&
      position <= this.end;
  }
}

class BetterFormattedText
{
  constructor(plainText)
  {
    this.plainText = plainText;
    this.formatting = [];
  }

  getRange(start, end)
  {
    let range = new TextRange(start, end);
    this.formatting.push(range);
    return range;
  }

  toString()
  {
    let buffer = [];
    for (let i in this.plainText)
    {
      let c = this.plainText[i];
      for (let range of this.formatting) {
        if (range.covers(i) && range.capitalize)
          c = c.toUpperCase();
      }
      buffer.push(c);
    }
    return buffer.join('');
  }
}

const text = 'This is a brave new world';
// entire array to store formatting
let ft = new FormattedText(text);
ft.capitalize(10, 15);
console.log(ft.toString());

// just 1 object using textRange where store it once and use covers function to check if we need to capitalize or not. 
// so it saves space
let bft = new BetterFormattedText(text);
bft.getRange(16, 19).capitalize = true

