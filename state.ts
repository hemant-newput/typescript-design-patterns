// Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
// Identification: State pattern can be recognized by methods that change their behavior depending on the objects’ state, controlled externally.
interface State {
    order: Order;
    cancelOrder();
    verifyPayment();
    shipOrder();
}
class Order {
    public currentState: State
    public cancelOrderState: State;
    public paymentPendingState: State;
    public orderShippedState: State;
    public orderBeingPreparedState: State;
    constructor() {
        this.cancelOrderState = new CancelOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState)
    }
    public setState(state: State) {
        this.currentState = state;
    }
    public getState(): State {
        return this.currentState
    }
}

class PaymentPendingState implements State {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Cancelling your unpaid order')
        this.order.setState(this.order.cancelOrderState)
    }
    verifyPayment() {
        console.log('payment verified shipping soon..')
        this.order.setState(this.order.orderBeingPreparedState)
    }
    shipOrder() {
        console.log('We cannot ship the order when payemnt is pending..')
    }

}

class CancelOrderState implements State {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('Your order has already cancelled')
    }
    verifyPayment() {
        console.log("Order cancelled cannot verify")
    }
    shipOrder() {
        console.log('order cannot shipped')
    }

}

class OrderBeingPreparedState implements State {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('cancelling yout order..')
        this.order.setState(this.order.cancelOrderState)
    }
    verifyPayment() {
        console.log('payment already verified..')
    }
    shipOrder() {
        console.log('Shipping your order now..')
        this.order.setState(this.order.orderShippedState)
    }

}

class OrderShippedState implements State {
    order: Order;
    constructor(order: Order) {
        this.order = order;
    }
    cancelOrder() {
        console.log('cannot cancel order! order is shipped..')
    }
    verifyPayment() {
        console.log('cannot verify payment! order shipped..')
    }
    shipOrder() {
        console.log('cannot ship again! already shipped..')
    }

}

let order = new Order();

order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
console.log('Order State' + (<any>order.getState()).constructor.name) //echo the name of constructor so that we can see which state our order is in