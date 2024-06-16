export class Character {
    constructor (name, type) {
        this.name = name;
         if (this.name.length < 2 || this.name.length > 10) {
          throw new Error('Имя должно содержать от 2 до 10 символов');
        }

        this.type = type;
        const list = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (list.indexOf(this.type) === -1) {
          throw new Error('Неверный тип персонажа'); 
        }

        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }
 
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить левел умершего') 
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error('Нельзя убить умершего')
        }
    }
}




