export {};
// Легковес — это структурный паттерн проектирования, 
// который позволяет вместить бóльшее количество объектов в отведённую оперативную память. 
// Легковес экономит память, разделяя общее состояние объектов между собой, 
// вместо хранения одинаковых данных в каждом объекте.

interface Action {
    move(location: [number, number]): void;
    shoot?(target: string, location: [number, number]): void;
    cure?(mate: string, location: [number, number]): void;
  }
  
  class Soldier implements Action {
  
    private equipmentSet: string;
    number: number;
  
    constructor(set: string, number: number) {
      this.equipmentSet = set;
      this.number = number;
      console.log(`Новый солдат ${number}`);
    }
  
    move(location: [number, number]): void {
      console.log(`Перейти к ${location}`)
    }
  
    shoot?(target: string, location: [number, number]): void {
      console.log(`Наненсти урон ${target} в ${location}`);
    }
  
    cure?(mate: string, location: [number, number]): void {
      console.log(`Вылечить ${mate} в ${location}`);
    }
  }
  
  class SoldierAcademy {
    private static groups: { [set: string]: Soldier } = {}
  
    public static getSoldier(set: string, num: number) {
      let soldier = SoldierAcademy.groups[set];
  
      if (!soldier) {
        soldier = new Soldier(set, num);
        SoldierAcademy.groups[set] = soldier;
      } else {
        soldier.number = num;
        console.log(`общий солдат ${soldier.number}`);
      }
  
      return soldier;
    }
  }
  
// ------------------ПРОВЕРКА-------------------
const start = Math.floor(Date.now());
for (let i = 0; i < 1000; i++) {
  SoldierAcademy.getSoldier('normal-set', i);
}
const end = Math.floor(Date.now());
console.log(end - start);