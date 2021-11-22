export class Character {
    name: string = '';
    _health: Health = new Health();

    isAlive(): boolean {
        return this.health.value > 0;
    }

    isDead(): boolean {
        return !this.isAlive;
    }

    attack(another: Character): void {
        if (another.isDead()) {
            return;
        }
        if (this == another) {
            return;
        }

        AttackModule.resolve(another, 1);
    }

    heal(another: Character): void {
        HealModule.resolve(another, 1);
    }

    get health(): Health {
        return this._health;
    }
}

export class MyRNG {
    static generate(): number {
        return +(Math.random() * 9)
    }
}

export class Warrior extends Character {
    attack(another: Character): void {
        if (another.isDead()) {
            return;
        }
        let damages = MyRNG.generate()

        AttackModule.resolve(another, damages);
    }

    heal(another: Character): void {
        if (this == another) {
            HealModule.resolve(another, 1);
        }
    }
}

export class AttackModule {
    static resolve(victim: Character, damage: number): void {
        victim.health.value = victim.health.value - damage;
    }
}

export class HealModule {
    static resolve(target: Character, heal: number): void {
        target.health.value = target.health.value + heal;
    }
}

export class Health {
    static MAX = 100;
    
    private _value = Health.MAX;

    get value(): number {
        return this._value;
    }

    set value(quantity: number) {
        this._value = Math.min(quantity, Health.MAX);
    }
}