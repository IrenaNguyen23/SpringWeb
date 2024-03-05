package com.baohoa.backend.service;

import java.util.List;

import com.baohoa.backend.entity.Orders;

public interface OrdersService {
    Orders createOrder(Orders order);
    Orders getOrderById(Long orderId);
    List<Orders> getAllOrders();
    Orders updateOrder(Orders order);
    void deleteOrder(Long orderId);
}
