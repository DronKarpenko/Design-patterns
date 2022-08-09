export {};
// Фасад — это структурный паттерн проектирования, 
// который предоставляет простой интерфейс к сложной системе классов

class ScreenDiagnostics {
    checkIntegrity() {
      console.log('Проверка экрана телефона...');
    }
  }
  
  class DamageDiagnostics {
    inspectTheBody() {
      console.log('Проверка на механические повреждения корпуса...');
    }
  }
  
  class BatteryDiagnostics {
    inspectBattery() {
      console.log('Проверка батареи...');
    }
  }

  class SoftwareDiagnostics {
    inspectSoftware() {
      console.log('Проверка ПО...');
    }
  }
  
  class PhoneDiagnostics {
  
    private screen: ScreenDiagnostics;
    private case: DamageDiagnostics;
    private battery: BatteryDiagnostics;
    private software: SoftwareDiagnostics;
    
  
    constructor() {
      this.screen = new ScreenDiagnostics();
      this.case = new DamageDiagnostics();
      this.battery = new BatteryDiagnostics();
      this.software = new SoftwareDiagnostics();
    }
  
    startDiagnostics() {
        this.screen.checkIntegrity();
        this.case.inspectTheBody();
        this.battery.inspectBattery();
        this.software.inspectSoftware();
        console.log('Телефон прошел диагностику. Все в норме');
    }
  }
  
// ------------------ПРОВЕРКА-----------
const phone = new PhoneDiagnostics();
phone.startDiagnostics();

/*
Проверка экрана телефона...
Проверка на механические повреждения корпуса...
Проверка батареи...
Проверка ПО...
Телефон прошел диагностику. Все в норме
*/