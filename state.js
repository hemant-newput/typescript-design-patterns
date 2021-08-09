var Order = /** @class */ (function () {
    function Order() {
        this.cancelOrderState = new CancelOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log('Cancelling your unpaid order');
        this.order.setState(this.order.cancelOrderState);
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log('payment verified shipping soon..');
        this.order.setState(this.order.orderBeingPreparedState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log('We cannot ship the order when payemnt is pending..');
    };
    return PaymentPendingState;
}());
var CancelOrderState = /** @class */ (function () {
    function CancelOrderState(order) {
        this.order = order;
    }
    CancelOrderState.prototype.cancelOrder = function () {
        console.log('Your order has already cancelled');
    };
    CancelOrderState.prototype.verifyPayment = function () {
        console.log("Order cancelled cannot verify");
    };
    CancelOrderState.prototype.shipOrder = function () {
        console.log('order cannot shipped');
    };
    return CancelOrderState;
}());
var OrderBeingPreparedState = /** @class */ (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log('cancelling yout order..');
        this.order.setState(this.order.cancelOrderState);
    };
    OrderBeingPreparedState.prototype.verifyPayment = function () {
        console.log('payment already verified..');
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log('Shipping your order now..');
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPreparedState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log('cannot cancel order! order is shipped..');
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log('cannot verify payment! order shipped..');
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log('cannot ship again! already shipped..');
    };
    return OrderShippedState;
}());
var order = new Order();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
console.log('Order State' + order.getState().constructor.name);
