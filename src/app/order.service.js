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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.ordersUrl = 'http://localhost:8080/orders';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.ordersUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json()._embedded.orders; })
            .catch(this.handleError);
    };
    OrderService.prototype.handleError = function (error) {
        console.error('An error occurred: ', error); // for demo only
        return Promise.reject(error.message || error);
    };
    OrderService.prototype.getOrder = function (id) {
        return this.getOrders()
            .then(function (orders) { return orders.find(function (order) { return order.id === id; }); });
    };
    OrderService.prototype.get = function (id) {
        var url = this.ordersUrl + "/" + id;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.create = function (name) {
        return this.http
            .post(this.ordersUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    OrderService.prototype.update = function (order) {
        var url = this.ordersUrl + "/" + order.id;
        return this.http
            .put(url, JSON.stringify(order), { headers: this.headers })
            .toPromise()
            .then(function () { return order; })
            .catch(this.handleError);
    };
    OrderService.prototype.delete = function (id) {
        console.log("order.service - deleting " + id);
        var url = this.ordersUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return OrderService;
}());
OrderService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map