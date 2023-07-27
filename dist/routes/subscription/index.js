"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../../controller");
var _Joi = require("../../middleware/Joi");
var _validate = require("../../middleware/validate");
var _validationSchemas = require("../../middleware/validationSchemas");
var router = (0, _express.Router)();
router.get('/all', _validate.validateToken, _validate.validateAdmin, _controller.subscriptionController.getSubscriptions);
router.get('/get/:id', _validate.validateToken, _validate.validateAdmin, _controller.subscriptionController.getSubscription);
router.post('/update/:id', _validate.validateToken, _validate.validateAdmin, (0, _Joi.ValidateJoiParam)(_validationSchemas.ParamsSchema.common), (0, _Joi.ValidateJoi)(_validationSchemas.SubscriptionSchema.update), _controller.subscriptionController.updateSubscription);
router.post('/subscribe', (0, _Joi.ValidateJoi)(_validationSchemas.SubscriptionSchema.subscribe), _controller.subscriptionController.subscribe);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsInJlcXVpcmUiLCJfY29udHJvbGxlciIsIl9Kb2kiLCJfdmFsaWRhdGUiLCJfdmFsaWRhdGlvblNjaGVtYXMiLCJyb3V0ZXIiLCJSb3V0ZXIiLCJnZXQiLCJ2YWxpZGF0ZVRva2VuIiwidmFsaWRhdGVBZG1pbiIsInN1YnNjcmlwdGlvbkNvbnRyb2xsZXIiLCJnZXRTdWJzY3JpcHRpb25zIiwiZ2V0U3Vic2NyaXB0aW9uIiwicG9zdCIsIlZhbGlkYXRlSm9pUGFyYW0iLCJQYXJhbXNTY2hlbWEiLCJjb21tb24iLCJWYWxpZGF0ZUpvaSIsIlN1YnNjcmlwdGlvblNjaGVtYSIsInVwZGF0ZSIsInVwZGF0ZVN1YnNjcmlwdGlvbiIsInN1YnNjcmliZSIsIl9kZWZhdWx0IiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3Vic2NyaXB0aW9uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgc3Vic2NyaXB0aW9uQ29udHJvbGxlciB9IGZyb20gJ3NyYy9jb250cm9sbGVyJztcbmltcG9ydCB7IFZhbGlkYXRlSm9pLCBWYWxpZGF0ZUpvaVBhcmFtIH0gZnJvbSAnc3JjL21pZGRsZXdhcmUvSm9pJztcbmltcG9ydCB7IHZhbGlkYXRlQWRtaW4sIHZhbGlkYXRlVG9rZW4gfSBmcm9tICdzcmMvbWlkZGxld2FyZS92YWxpZGF0ZSc7XG5pbXBvcnQgeyBQYXJhbXNTY2hlbWEsIFN1YnNjcmlwdGlvblNjaGVtYSB9IGZyb20gJ3NyYy9taWRkbGV3YXJlL3ZhbGlkYXRpb25TY2hlbWFzJztcblxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9hbGwnLCB2YWxpZGF0ZVRva2VuLCB2YWxpZGF0ZUFkbWluLCBzdWJzY3JpcHRpb25Db250cm9sbGVyLmdldFN1YnNjcmlwdGlvbnMpO1xuXG5yb3V0ZXIuZ2V0KCcvZ2V0LzppZCcsIHZhbGlkYXRlVG9rZW4sIHZhbGlkYXRlQWRtaW4sIHN1YnNjcmlwdGlvbkNvbnRyb2xsZXIuZ2V0U3Vic2NyaXB0aW9uKTtcblxucm91dGVyLnBvc3QoXG4gICcvdXBkYXRlLzppZCcsXG4gIHZhbGlkYXRlVG9rZW4sXG4gIHZhbGlkYXRlQWRtaW4sXG4gIFZhbGlkYXRlSm9pUGFyYW0oUGFyYW1zU2NoZW1hLmNvbW1vbiksXG4gIFZhbGlkYXRlSm9pKFN1YnNjcmlwdGlvblNjaGVtYS51cGRhdGUpLFxuICBzdWJzY3JpcHRpb25Db250cm9sbGVyLnVwZGF0ZVN1YnNjcmlwdGlvblxuKTtcblxucm91dGVyLnBvc3QoXG4gICcvc3Vic2NyaWJlJyxcbiAgVmFsaWRhdGVKb2koU3Vic2NyaXB0aW9uU2NoZW1hLnN1YnNjcmliZSksXG4gIHN1YnNjcmlwdGlvbkNvbnRyb2xsZXIuc3Vic2NyaWJlXG4pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFFBQUEsR0FBQUMsT0FBQTtBQUNBLElBQUFDLFdBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLElBQUEsR0FBQUYsT0FBQTtBQUNBLElBQUFHLFNBQUEsR0FBQUgsT0FBQTtBQUNBLElBQUFJLGtCQUFBLEdBQUFKLE9BQUE7QUFFQSxJQUFNSyxNQUFNLEdBQUcsSUFBQUMsZUFBTSxFQUFDLENBQUM7QUFFdkJELE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLE1BQU0sRUFBRUMsdUJBQWEsRUFBRUMsdUJBQWEsRUFBRUMsa0NBQXNCLENBQUNDLGdCQUFnQixDQUFDO0FBRXpGTixNQUFNLENBQUNFLEdBQUcsQ0FBQyxVQUFVLEVBQUVDLHVCQUFhLEVBQUVDLHVCQUFhLEVBQUVDLGtDQUFzQixDQUFDRSxlQUFlLENBQUM7QUFFNUZQLE1BQU0sQ0FBQ1EsSUFBSSxDQUNULGFBQWEsRUFDYkwsdUJBQWEsRUFDYkMsdUJBQWEsRUFDYixJQUFBSyxxQkFBZ0IsRUFBQ0MsK0JBQVksQ0FBQ0MsTUFBTSxDQUFDLEVBQ3JDLElBQUFDLGdCQUFXLEVBQUNDLHFDQUFrQixDQUFDQyxNQUFNLENBQUMsRUFDdENULGtDQUFzQixDQUFDVSxrQkFDekIsQ0FBQztBQUVEZixNQUFNLENBQUNRLElBQUksQ0FDVCxZQUFZLEVBQ1osSUFBQUksZ0JBQVcsRUFBQ0MscUNBQWtCLENBQUNHLFNBQVMsQ0FBQyxFQUN6Q1gsa0NBQXNCLENBQUNXLFNBQ3pCLENBQUM7QUFBQyxJQUFBQyxRQUFBLEdBRWFqQixNQUFNO0FBQUFrQixPQUFBLGNBQUFELFFBQUEifQ==