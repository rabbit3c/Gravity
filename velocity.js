class Velocity extends Vector {
    constructor (x, y) {
        super(x, y);
    }

    calculate(acceleration) {
        this.x += acceleration.x * time.dt();
        this.y += acceleration.y * time.dt();
    }

    copy() {
        return new Velocity(this.x, this.y);
    }
}