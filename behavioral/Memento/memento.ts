export {};

// Снимок — это поведенческий паттерн проектирования,
// который позволяет сохранять и восстанавливать прошлые состояния объектов,
// не раскрывая подробностей их реализации

class Memento {
    private _tokens: Array<Token>;
  
    constructor(tokens: Array<Token>) {
      this._tokens = tokens.map(t => new Token(t.value));;
    }
  
    get tokens() {
      return this._tokens.map(t => new Token(t.value));
    }
}

class Token {
    private _value: number;
  
    constructor(value: number = 0) {
      this._value = value
    }
  
    get value() {
      return this._value;
    }
}

class TokenMachine {
    tokens: Array<Token> = [];
  
    addTokenByNumber(value: number) {
      const newToken = new Token(value);
      this.tokens.push(newToken);
      console.log(`Token ${value}: added as number`);
      return new Memento(this.tokens);
    }
  
    addToken(token: Token) {
      this.tokens.push(token);
      console.log(`Token ${token.value}: added as token`);
      return new Memento(this.tokens);
    };
  
    revert(memento: Memento) {
      this.tokens = memento.tokens;
    }
}

const tokenMachine: TokenMachine = new TokenMachine();
tokenMachine.addToken(new Token(10));
const mem1: Memento = tokenMachine.addTokenByNumber(20);
tokenMachine.addToken(new Token(10));
console.log(`Tokens:`, ...tokenMachine.tokens);
tokenMachine.revert(mem1);
tokenMachine.addTokenByNumber(5);
console.log(`Tokens:`, ...tokenMachine.tokens);