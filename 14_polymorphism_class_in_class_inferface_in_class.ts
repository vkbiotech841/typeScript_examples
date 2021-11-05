// Polymorphism: The ability of an object to take on many forms.
// In this example, we are going to learn that how:
// (1) An inteface can used inside a class. (implement interface)
// (2) One class be used in another class (extending class)
type Purchase = any;

let Logistics: any;

// This is an interface
interface Delivery {
    deliverProduct();
    trackProduct();
}

// Class
// Her, purchase variable is has protected access modifier because pubic private can only be used within a class. but here, it is being used by other classes hence, protected access modifier was added.
class DeliveryImplementation {
    protected purchase: Purchase;

    constructor(purchase: Purchase) {
        this.purchase = purchase;
    }
}

// Class
// Here, DeliveryImplementation class is being used by ExpressDelivery class. Hence "extends" keyword was used.
// Similaraly, Delivery interface is being used by ExpressDelivery class. Hence "implements" keyword was used.
class ExpressDelivery extends DeliveryImplementation implements Delivery {
    deliverProduct() {
        Logistics.issueExpressDelivery(this.purchase.product);
    }

    trackProduct() {
        Logistics.trackExpressDelivery(this.purchase.product);
    }
}

// Class
class InsuredDelivery extends DeliveryImplementation implements Delivery {
    deliverProduct() {
        Logistics.issueInsuredDelivery(this.purchase.product);
    }

    trackProduct() {
        Logistics.trackInsuredDelivery(this.purchase.product);
    }
}

// Class
class StandardDelivery extends DeliveryImplementation implements Delivery {
    deliverProduct() {
        Logistics.issueStandardDelivery(this.purchase.product);
    }

    trackProduct() {
        Logistics.trackStandardDelivery(this.purchase.product);
    }
}

function createDelivery(purchase) {
    if (purchase.deliveryType === 'express') {
        delivery = new ExpressDelivery(purchase);
    } else if (purchase.deliveryType === 'insured') {
        delivery = new InsuredDelivery(purchase);
    } else {
        delivery = new StandardDelivery(purchase);
    }
    return delivery;
}

let delivery: Delivery = createDelivery({});

delivery.deliverProduct();