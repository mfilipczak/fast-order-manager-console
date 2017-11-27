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
var common_1 = require("@angular/common");
var order_1 = require("./order");
var order_service_1 = require("./order.service");
require("rxjs/add/operator/switchMap");
var OrderDetailComponent = (function () {
    function OrderDetailComponent(orderService, route, location) {
        this.orderService = orderService;
        this.route = route;
        this.location = location;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.orderService.get(+params['id']); })
            .subscribe(function (order) { return _this.order = order; });
    };
    OrderDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    OrderDetailComponent.prototype.save = function () {
        var _this = this;
        this.orderService.update(this.order)
            .then(function () { return _this.goBack(); });
    };
    return OrderDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", order_1.Order)
], OrderDetailComponent.prototype, "order", void 0);
OrderDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-order-detail',
        templateUrl: 'order-detail-component.html',
        styleUrls: ['order-detail.component.css']
    }),
    __metadata("design:paramtypes", [order_service_1.OrderService,
        router_1.ActivatedRoute,
        common_1.Location])
], OrderDetailComponent);
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order-detail.component.js.map