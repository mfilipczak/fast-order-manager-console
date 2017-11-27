"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var order_service_1 = require("./order.service");
var OrdersComponent = (function () {
    function OrdersComponent(router, orderService) {
        this.router = router;
        this.orderService = orderService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.geOrders();
    };
    OrdersComponent.prototype.geOrders = function () {
        var _this = this;
        this.orderService.getOrders().then(function (orders) { return _this.orders = orders; });
    };
    OrdersComponent.prototype.onSelect = function (order) {
        this.selectedOrder = order;
    };
    OrdersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedOrder.id]);
    };
    OrdersComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.orderService.create(name)
            .then(function (order) {
            _this.orders.push(order);
            _this.selectedOrder = null;
        });
    };
    OrdersComponent.prototype.delete = function (order) {
        var _this = this;
        this.orderService
            .delete(order.id)
            .then(function () {
            _this.orders = _this.orders.filter(function (h) { return h !== order; });
            if (_this.selectedOrder === order) {
                _this.selectedOrder = null;
            }
        });
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-orders',
        templateUrl: 'orders.component.html',
        styleUrls: ['orders.component.css'],
        providers: [order_service_1.OrderService]
    }),
    __metadata("design:paramtypes", [router_1.Router, order_service_1.OrderService])
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map