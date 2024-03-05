package com.baohoa.backend.service;

import java.util.List;

import com.baohoa.backend.entity.OrderDetail;

public interface OrderDetailService {
    OrderDetail createOrderDetail(OrderDetail orderdetail);
    OrderDetail getOrderDetailById(Long orderdetailId);
    List<OrderDetail> getAllOrderDetails();
    OrderDetail updateOrderDetail(OrderDetail orderdetail);
    void deleteOrderDetail(Long orderdetailId);
}
