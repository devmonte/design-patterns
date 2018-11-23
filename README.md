# Design Patterns
This repository contains examples and descriptions of most popular design patterns.
The purpose for creating it was to thoroughly learn about design patterns and TypeScript language.

Based on GoF book we can devide design patterns to three groups:
- Creational - how to create an object,
- Structural - how to realize relationships among objects,
- Behavioral - how objects can communicate with other objects.

Before my own description and impleemntation it is worth to mention resources on which I based while learning about the aptterns:
- [dotnetcodr - Broad examples of design and architectural patterns](https://dotnetcodr.com/architecture-and-patterns/)
- [Design Patterns for Humans - ver popular repo](https://github.com/kamranahmedse/design-patterns-for-humans)
- [SourceMaking - another good website about patterns](https://sourcemaking.com/design_patterns)

### Behavioral
#### Chain of resposibility
It's about decoupling logic responsible for handling some action, which has some distinct steps to few handlers which will be responsible for one specific operation in entire process of given action and then chain all handlers. Chained handlers create a pipeline.

![ChainOfResponsibilityDiagram](assets/ChainOfResponsibility.png) 

##### Example code in TypeScript:

Base handler
```TypeScript
export interface IRequestHandler
{
    nextHandler: IRequestHandler 
    handle(resuestType: string): void;
}
```
Implementation of handler:
```TypeScript
export class FirstStepRequestHandler implements IRequestHandler
{
    nextHandler: IRequestHandler;    
    
    handle(requestType: string): void {
        if(requestType == 'FirstRequest')
        {
            console.log('Handle first request!');
        }
        else if(this.nextHandler != null)
        {
            this.nextHandler.handle(requestType);
        }
    }
}
```
Demonstration of use:
```TypeScript
    demonstrateChainOfResponsibility()
    {
        let firstHandler = new FirstStepRequestHandler();
        let secondHandler = new SecondStepRequestHandler();
        let thirdhandler = new ThirdStepRequestHandler();

        firstHandler.nextHandler = secondHandler;
        secondHandler.nextHandler = thirdhandler;

        firstHandler.handle("ThirdReuqest");
    }
```

#### Command

It's about encapsulating request as an object.



##### Example
Order a dish in restaurant. Waiter(invoker) takes order from us and then talk to(command) cook(receiver) about new dish. 

Invoker
````TypeScript
export class Waiter{

    constructor(private _cook: Cook){}

    takeOrder(dishName: string): void
    {
        let order = new AsianCousineOrderCommand(this._cook, dishName);
        order.execute()
    }
}
````

Base command
````TypeScript
export interface ICommand
{
    execute():void
}
````

Command
````TypeScript
export class AsianCousineOrderCommand implements ICommand
{
    constructor(private _cook: Cook, private _dishName: string){}

    execute(): void {
        this._cook.cookDish(this._dishName);
    }
}
````

Receiver
````TypeScript
export class Cook
{
    cookDish(dishType: string): void
    {
        console.log("Cooked " + dishType);
    }
}
````
