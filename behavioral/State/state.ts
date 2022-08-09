export {};
// Состояние — это поведенческий паттерн проектирования,
// который позволяет объектам менять поведение в зависимости от своего состояния.
// Извне создаётся впечатление, что изменился класс объекта.

class Photo {
    public photoTitle: string;
    private state: PhotoState

    getState() {
        return `Текущее состояние: ${this.state.name}`
        // console.log()
    }

    setState(state: PhotoState) {
        this.state = state;
        this.state.setContext(this)
    }

    constructor() {
        this.setState(new NewStatePhoto())
    }

    publishPhoto() {
        this.state.publish()
    }
    deletePhoto() {
        this.state.delete()
    }
}

abstract class PhotoState {
    public name: string;
    public item: Photo;

    public setContext(item: Photo) {
        this.item = item;
    }

    public abstract publish(): void;

    public abstract delete(): void;
}

class NewStatePhoto extends PhotoState {
    constructor() {
        super();
        this.name = 'NewStatePhoto'
    }

    public publish(): void {
        console.log(`Вы добавили фото ${this.item.photoTitle}`)
        this.item.setState(new PublishStatePhoto())
    }
    public delete(): void {
        console.log(`Добавление фото отменено`)
    }
}

class PublishStatePhoto extends PhotoState {
    constructor() {
        super();
        this.name = 'PublishStatePhoto'
    }

    public publish(): void {
        console.log(`Это фото уже существует`)
    }

    public delete(): void {
        console.log(`Фото удалено`)
        this.item.setState(new NewStatePhoto())
    }
}

const item = new Photo();
item.photoTitle = 'Аватарка'
console.log(item.getState())
item.publishPhoto()
console.log(item.getState())
item.publishPhoto()
console.log(item.getState())
item.deletePhoto()
console.log(item.getState())