"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _joi = _interopRequireDefault(require("joi"));
var _OrderedSchema = require("./OrderedSchema");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PaymentSchema = {
  product_check: _joi["default"].object({
    quantity: _joi["default"].number().integer().required()
  }),
  confirm: _joi["default"].object({
    payment_method: _joi["default"].string().required(),
    billing_details: _OrderedSchema.BillingDetailsSchema.required()
  }),
  checkout: _joi["default"].object({
    paymentMethodType: _joi["default"].string().required(),
    currency: _joi["default"].string()
  })
};
var _default = PaymentSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfam9pIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfT3JkZXJlZFNjaGVtYSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJQYXltZW50U2NoZW1hIiwicHJvZHVjdF9jaGVjayIsIkpvaSIsIm9iamVjdCIsInF1YW50aXR5IiwibnVtYmVyIiwiaW50ZWdlciIsInJlcXVpcmVkIiwiY29uZmlybSIsInBheW1lbnRfbWV0aG9kIiwic3RyaW5nIiwiYmlsbGluZ19kZXRhaWxzIiwiQmlsbGluZ0RldGFpbHNTY2hlbWEiLCJjaGVja291dCIsInBheW1lbnRNZXRob2RUeXBlIiwiY3VycmVuY3kiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS92YWxpZGF0aW9uU2NoZW1hcy9QYXltZW50U2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcbmltcG9ydCB7IENoZWNrb3V0UmVxdWVzdCwgQ29uZmlybVBheW1lbnRSZXF1ZXN0IH0gZnJvbSAnc3JjL21vZGVscy9hcGkvcGF5bWVudCc7XG5pbXBvcnQgeyBCaWxsaW5nRGV0YWlsc1NjaGVtYSB9IGZyb20gJy4vT3JkZXJlZFNjaGVtYSc7XG5cbmNvbnN0IFBheW1lbnRTY2hlbWEgPSB7XG4gIHByb2R1Y3RfY2hlY2s6IEpvaS5vYmplY3Qoe1xuICAgIHF1YW50aXR5OiBKb2kubnVtYmVyKCkuaW50ZWdlcigpLnJlcXVpcmVkKClcbiAgfSksXG4gIGNvbmZpcm06IEpvaS5vYmplY3Q8Q29uZmlybVBheW1lbnRSZXF1ZXN0Pih7XG4gICAgcGF5bWVudF9tZXRob2Q6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgIGJpbGxpbmdfZGV0YWlsczogQmlsbGluZ0RldGFpbHNTY2hlbWEucmVxdWlyZWQoKVxuICB9KSxcbiAgY2hlY2tvdXQ6IEpvaS5vYmplY3Q8Q2hlY2tvdXRSZXF1ZXN0Pih7XG4gICAgcGF5bWVudE1ldGhvZFR5cGU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgIGN1cnJlbmN5OiBKb2kuc3RyaW5nKClcbiAgfSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRTY2hlbWE7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLElBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUVBLElBQUFDLGNBQUEsR0FBQUQsT0FBQTtBQUF1RCxTQUFBRCx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRXZELElBQU1FLGFBQWEsR0FBRztFQUNwQkMsYUFBYSxFQUFFQyxlQUFHLENBQUNDLE1BQU0sQ0FBQztJQUN4QkMsUUFBUSxFQUFFRixlQUFHLENBQUNHLE1BQU0sQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQztFQUM1QyxDQUFDLENBQUM7RUFDRkMsT0FBTyxFQUFFTixlQUFHLENBQUNDLE1BQU0sQ0FBd0I7SUFDekNNLGNBQWMsRUFBRVAsZUFBRyxDQUFDUSxNQUFNLENBQUMsQ0FBQyxDQUFDSCxRQUFRLENBQUMsQ0FBQztJQUN2Q0ksZUFBZSxFQUFFQyxtQ0FBb0IsQ0FBQ0wsUUFBUSxDQUFDO0VBQ2pELENBQUMsQ0FBQztFQUNGTSxRQUFRLEVBQUVYLGVBQUcsQ0FBQ0MsTUFBTSxDQUFrQjtJQUNwQ1csaUJBQWlCLEVBQUVaLGVBQUcsQ0FBQ1EsTUFBTSxDQUFDLENBQUMsQ0FBQ0gsUUFBUSxDQUFDLENBQUM7SUFDMUNRLFFBQVEsRUFBRWIsZUFBRyxDQUFDUSxNQUFNLENBQUM7RUFDdkIsQ0FBQztBQUNILENBQUM7QUFBQyxJQUFBTSxRQUFBLEdBRWFoQixhQUFhO0FBQUFpQixPQUFBLGNBQUFELFFBQUEifQ==