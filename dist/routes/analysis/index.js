"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../../controller");
var _validate = require("../../middleware/validate");
var router = (0, _express.Router)();
router.get('/months_revenue', _validate.validateToken, _validate.validateAdmin, _controller.analysisController.getRevenuePerMonth);
router.get('/products_purchase', _validate.validateToken, _validate.validateAdmin, _controller.analysisController.getBoughtProduct);
router.get('/top_10_users', _validate.validateToken, _validate.validateAdmin, _controller.analysisController.getTop10Users);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXhwcmVzcyIsInJlcXVpcmUiLCJfY29udHJvbGxlciIsIl92YWxpZGF0ZSIsInJvdXRlciIsIlJvdXRlciIsImdldCIsInZhbGlkYXRlVG9rZW4iLCJ2YWxpZGF0ZUFkbWluIiwiYW5hbHlzaXNDb250cm9sbGVyIiwiZ2V0UmV2ZW51ZVBlck1vbnRoIiwiZ2V0Qm91Z2h0UHJvZHVjdCIsImdldFRvcDEwVXNlcnMiLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2FuYWx5c2lzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgYW5hbHlzaXNDb250cm9sbGVyIH0gZnJvbSAnc3JjL2NvbnRyb2xsZXInO1xuXG5pbXBvcnQgeyB2YWxpZGF0ZUFkbWluLCB2YWxpZGF0ZVRva2VuIH0gZnJvbSAnc3JjL21pZGRsZXdhcmUvdmFsaWRhdGUnO1xuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy9tb250aHNfcmV2ZW51ZScsIHZhbGlkYXRlVG9rZW4sIHZhbGlkYXRlQWRtaW4sIGFuYWx5c2lzQ29udHJvbGxlci5nZXRSZXZlbnVlUGVyTW9udGgpO1xuXG5yb3V0ZXIuZ2V0KCcvcHJvZHVjdHNfcHVyY2hhc2UnLCB2YWxpZGF0ZVRva2VuLCB2YWxpZGF0ZUFkbWluLCBhbmFseXNpc0NvbnRyb2xsZXIuZ2V0Qm91Z2h0UHJvZHVjdCk7XG5cbnJvdXRlci5nZXQoJy90b3BfMTBfdXNlcnMnLCB2YWxpZGF0ZVRva2VuLCB2YWxpZGF0ZUFkbWluLCBhbmFseXNpc0NvbnRyb2xsZXIuZ2V0VG9wMTBVc2Vycyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsUUFBQSxHQUFBQyxPQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBRCxPQUFBO0FBRUEsSUFBQUUsU0FBQSxHQUFBRixPQUFBO0FBQ0EsSUFBTUcsTUFBTSxHQUFHLElBQUFDLGVBQU0sRUFBQyxDQUFDO0FBRXZCRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRUMsdUJBQWEsRUFBRUMsdUJBQWEsRUFBRUMsOEJBQWtCLENBQUNDLGtCQUFrQixDQUFDO0FBRWxHTixNQUFNLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRUMsdUJBQWEsRUFBRUMsdUJBQWEsRUFBRUMsOEJBQWtCLENBQUNFLGdCQUFnQixDQUFDO0FBRW5HUCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxlQUFlLEVBQUVDLHVCQUFhLEVBQUVDLHVCQUFhLEVBQUVDLDhCQUFrQixDQUFDRyxhQUFhLENBQUM7QUFBQyxJQUFBQyxRQUFBLEdBRTdFVCxNQUFNO0FBQUFVLE9BQUEsY0FBQUQsUUFBQSJ9