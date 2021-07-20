//Задание 1

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        let alarmObj = {};
        if (typeof id == 'undefined') {
            throw new Error('Не указан id');
        }
        for (let item of this.alarmCollection) {
            if (item.id === id) {
                return new Error('Такой id уже существует');
            }
        }
        alarmObj.time = time;
        alarmObj.id = id;
        alarmObj.callback = callback;
        this.alarmCollection.push(alarmObj);
    }
    removeClock(id) {
        const newAlarmCollection = this.alarmCollection.filter(e =>  e.id !== id);
        this.alarmCollection = newAlarmCollection;
        console.log(`Будильник ${id} удалён.`);
        return this.AlarmCollection;
    }
    getCurrentFormattedTime(){
        let date = new Date();
        let currentHours = date.getHours();
        let currentMinutes = date.getMinutes();
        let currentTime = currentHours + ":" + currentMinutes;
        console.log(currentTime);
    }
    start(){
        function checkClock(alarmCollection) {
            
        }
    }
}


const alarm = new AlarmClock();


alarm.addClock('09:00', () => console.log('Wake up!'), 1);
alarm.addClock(5, () => console.log('Wake up!'), 1);
alarm.addClock(5, () => console.log('Wake up!'), 2);
alarm.removeClock(2);
alarm.getCurrentFormattedTime();
console.log(alarm);
