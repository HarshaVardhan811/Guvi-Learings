class UberCalculator {
    constructor(baseFare, perKmRate, perMinuteRate) {
        this.baseFare = baseFare;
        this.perMileRate = perKmRate;
        this.perMinuteRate = perMinuteRate;
    }

    calculatePrice(distance, time) {
        const fare = this.baseFare + (this.perMileRate * distance) + (this.perMinuteRate * time);
        return fare;
    }
}


const uberX = new UberCalculator(5, 1.5, 0.2); 

const distance = 20
const time = 30; 

const totalPrice = uberX.calculatePrice(distance, time);
console.log(`The UberX price for a ${distance}-km, ${time}-minute ride is $${totalPrice}`);