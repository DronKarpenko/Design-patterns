"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// Снимок — это поведенческий паттерн проектирования,
// который позволяет сохранять и восстанавливать прошлые состояния объектов,
// не раскрывая подробностей их реализации
var Memento = /** @class */ (function () {
    function Memento(tokens) {
        this._tokens = tokens.map(function (t) { return new Token(t.value); });
        ;
    }
    Object.defineProperty(Memento.prototype, "tokens", {
        get: function () {
            return this._tokens.map(function (t) { return new Token(t.value); });
        },
        enumerable: false,
        configurable: true
    });
    return Memento;
}());
var Token = /** @class */ (function () {
    function Token(value) {
        if (value === void 0) { value = 0; }
        this._value = value;
    }
    Object.defineProperty(Token.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    return Token;
}());
var TokenMachine = /** @class */ (function () {
    function TokenMachine() {
        this.tokens = [];
    }
    TokenMachine.prototype.addTokenByNumber = function (value) {
        var newToken = new Token(value);
        this.tokens.push(newToken);
        console.log("Token ".concat(value, ": added as number"));
        return new Memento(this.tokens);
    };
    TokenMachine.prototype.addToken = function (token) {
        this.tokens.push(token);
        console.log("Token ".concat(token.value, ": added as token"));
        return new Memento(this.tokens);
    };
    ;
    TokenMachine.prototype.revert = function (memento) {
        this.tokens = memento.tokens;
    };
    return TokenMachine;
}());
var tokenMachine = new TokenMachine();
tokenMachine.addToken(new Token(10));
var mem1 = tokenMachine.addTokenByNumber(20);
tokenMachine.addToken(new Token(10));
console.log.apply(console, __spreadArray(["Tokens:"], tokenMachine.tokens, false));
tokenMachine.revert(mem1);
tokenMachine.addTokenByNumber(5);
console.log.apply(console, __spreadArray(["Tokens:"], tokenMachine.tokens, false));
