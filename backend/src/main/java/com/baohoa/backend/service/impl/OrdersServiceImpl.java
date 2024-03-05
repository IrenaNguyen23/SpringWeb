package com.baohoa.backend.service.impl;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.baohoa.backend.entity.OrderDetail;
import com.baohoa.backend.entity.Orders;
import com.baohoa.backend.repository.OrderDetailRepository;
import com.baohoa.backend.repository.OrdersRepository;
import com.baohoa.backend.service.OrdersService;

@Service
@AllArgsConstructor

public class OrdersServiceImpl implements OrdersService {
    private OrdersRepository orderRepository;

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Transactional
    public Orders createOrder(Orders order) {
        // Lưu thông tin đơn hàng (Orders)
        Orders savedOrder = orderRepository.save(order);

        // Lưu thông tin chi tiết đơn hàng (OrderDetail)
        List<OrderDetail> orderDetails = order.getOrderdetail();
        if (orderDetails != null) {
            for (OrderDetail orderDetail : orderDetails) {
                orderDetail.setOrders(savedOrder);
                orderDetailRepository.save(orderDetail);
            }
        }

        return savedOrder;
    }

    @Override
    public Orders getOrderById(Long orderId) {
        Optional<Orders> optionalOrder = orderRepository.findById(orderId);
        return optionalOrder.get();
    }

    @Override
    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Orders updateOrder(Orders order) {
        Orders existingOrder = orderRepository.findById(order.getId()).get();
        existingOrder.setAddress(order.getAddress());
        existingOrder.setEmail(order.getEmail());
        existingOrder.setFullname(order.getFullname());
        existingOrder.setNote(order.getNote());
        existingOrder.setOrder_date(order.getOrder_date());
        existingOrder.setStatus(order.getStatus());
        existingOrder.setNote(order.getNote());
        existingOrder.setPhone_number(order.getPhone_number());
        existingOrder.setTotal_money(order.getTotal_money());
        existingOrder.setUser(order.getUser());
        Orders updateOrder = orderRepository.save(existingOrder);
        return updateOrder;
    }

    @Override
    public void deleteOrder(Long orderId) {
        orderRepository.deleteById(orderId);
    }
}
