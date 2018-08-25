import { FirstStepRequestHandler } from "./ChainOfResponsibility/FirstStepRequestHandler";
import { SecondStepRequestHandler } from "./ChainOfResponsibility/SecondStepRequestHandler";
import { ThirdStepRequestHandler } from "./ChainOfResponsibility/ThirdStepRequestHandler";
import { CarConfiguration } from "./Memento/CarConfiguration";
import { Car } from "./Visitor/Car";
import { Plane } from "./Visitor/Plane";
import { Truck } from "./Visitor/Truck";
import { Vehicles } from "./Visitor/Vehicles";
import { PriceVisitor } from "./Visitor/PriceVisitor";
import { Investor } from "./Observer/Investor";
import { Bitcoin } from "./Observer/Bitcoin";

export class DesignPatternDemonstrator
{
    demonstrateChainOfResponsibility()
    {
        let firstHandler = new FirstStepRequestHandler();
        let secondHandler = new SecondStepRequestHandler();
        let thirdhandler = new ThirdStepRequestHandler();

        firstHandler.nextHandler = secondHandler;
        secondHandler.nextHandler = thirdhandler;

        firstHandler.handle("ThirdReuqest");
    }

    demonstrateMemento()
    {
        let carConfig = new CarConfiguration("small", "blue", 450, true);

        let configMemento = carConfig.saveMemento();

        carConfig.type = "big";
        carConfig.color = "red";

        carConfig.restoreMemento(configMemento);
    }

    demonstrateVisitor()
    {
        let car = new Car("Tesla Roadster", 2018, 450000);
        let plane = new Plane("Boeing 787", 2015, 35000000);
        let truck = new Truck("Liebherr T 282B", 2017, 10000000);

        let vehicleCollection = new Vehicles();
        vehicleCollection.attach(car);
        vehicleCollection.attach(plane);
        vehicleCollection.attach(truck);

        let priceVisitor = new PriceVisitor();

        vehicleCollection.accept(priceVisitor);
    }

    demonstrateObserver()
    {
        let bankInvestor = new Investor();
        let privateInvestor = new Investor();

        let bitcoin = new Bitcoin(7200);
        bitcoin.attach(bankInvestor);
        bitcoin.attach(privateInvestor);
        bitcoin.changePrice(7500);
    }

}