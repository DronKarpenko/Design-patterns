export {};
// Заместитель — это структурный паттерн проектирования, 
// который позволяет подставлять вместо реальных объектов специальные объекты-заменители. 
// Эти объекты перехватывают вызовы к оригинальному объекту, 
// позволяя сделать что-то до или после передачи вызова оригиналу.

interface ISubject {
    request(): void
}
class RealSubject implements ISubject {
    enormousData: number[]
    constructor() {
        this.enormousData = [1, 2, 3, 23, 45, 12]
    }
    request() {
        return this.enormousData
    }
}
class ProxySubject implements ISubject {
    enormousData: number[]
    realSubject: RealSubject
    constructor() {
        this.enormousData = []
        this.realSubject = new RealSubject()
    }
    request() {
        if (this.enormousData.length === 0) {
            console.log('извлечение данных из RealSubject')
            this.enormousData = this.realSubject.request()
            return this.enormousData
        }
        console.log('извлечение данных из Proxy cache')
        return this.enormousData
    }
}

// ----------ПРОВЕРКА----------
const test = new ProxySubject()
console.log(test.request())
console.log(test.request())

/*
извлечение данных из RealSubject
[ 1, 2, 3, 23, 45, 12 ]
извлечение данных из Proxy cache
[ 1, 2, 3, 23, 45, 12 ]
*/