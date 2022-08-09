export {};

interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string, amount: number): void;
  }

  abstract class AbstractHandler implements Handler {
    private nextHandler: Handler
  
    public setNext(handler: Handler): Handler {
      this.nextHandler = handler
      return handler
    }

    public handle(request: string, amount: number): void {
      if (this.nextHandler) {
        return this.nextHandler.handle(request, amount)
      }
      console.log('Нет такой валюты!')
    }
  }

  class UsdHandler extends AbstractHandler {
    public handle(request: string, amount: number): void {
      if (request === 'USD') {
        console.log(`У вас списали ${amount} долларов!`)
        return
      }
  
      super.handle(request, amount)
    }
  }
  
  class EurHandler extends AbstractHandler {
    public handle(request: string, amount: number): void {
      if (request === 'EUR') {
        console.log(`У вас списали ${amount} евро!`)
        return
      }
  
      super.handle(request, amount)
    }
  }
  
  class UahHandler extends AbstractHandler {
    public handle(request: string, amount: number): void {
      if (request === 'GRN') {
        console.log(`У вас списали ${amount} гривен!`)
        return
      }
  
      super.handle(request, amount)
    }
  }

  const usdHandler = new UsdHandler()
  const uahHandler = new UahHandler()
  const eurHandler = new EurHandler()
  
  uahHandler.setNext(usdHandler).setNext(eurHandler)

  function handlePurchase(
    handler: Handler,
    currency: string,
    amount: number
  ): void {
    handler.handle(currency, amount)
  }
  
//   -------------ПРОВЕРКА-----------
  handlePurchase(uahHandler, 'USD', 20)  
  handlePurchase(uahHandler, 'GRN', 30)
  handlePurchase(usdHandler, 'EUR', 40)  
  handlePurchase(usdHandler, 'USD', 50)
  handlePurchase(usdHandler, 'RUB', 50)

//   результат

// У вас списали 20 долларов!
// У вас списали 30 гривен!
// У вас списали 40 евро!
// У вас списали 50 долларов!
// Нет такой валюты!