export class Character {
    constructor (name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    validateName(name, type) {
        const list = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (name.length < 2 || name.length > 10) {
          throw new Error('Имя должно содержать от 2 до 10 символов');
        }
      
        if (list.indexOf(type) === -1) {
          throw new Error('Неверный тип персонажа'); 
        }
        return name;
      } 
}

export class Bowerman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Swordsman extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Magician extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;
    }
}

export class Undead extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;
    }
}

export class Zombie extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;
    }
}

export class Daemon extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;
    }
}