export {};
// Посредник — это поведенческий паттерн проектирования, 
// который позволяет уменьшить связанность множества классов между собой,
// благодаря перемещению этих связей в один класс-посредник

interface Mediator {
    notify(sender: string, event: string): void;
}

abstract class Mediated {
    mediator: Mediator;
    setMediator(mediator: Mediator) {
        this.mediator = mediator
    }
}



class Notifications extends Mediated {
    send() {
        console.log('Отправляю уведомление')
    }
}

class Log extends Mediated {
    log(message: string) {
        console.log('message', message)
    }
}

class EventHandler extends Mediated {
    MyEvent() {
        this.mediator.notify('EventHandler', 'myEvent')
    }
}

class NotificationMediator implements Mediator {

    constructor(
        public notifications: Notifications,
        public log: Log,
        public eventHandler: EventHandler
    ) {}

    notify(sender: string, event: string) {
        switch (event) {
            case 'myEvent':
                this.notifications.send();
                this.log.log('Отправлено');
                break
        }
    }
}

const handler = new EventHandler();
const logger = new Log();
const notifications = new Notifications();

const test = new NotificationMediator(
    notifications,
    logger,
    handler
)

console.log(handler.setMediator(test))
console.log(handler.MyEvent())