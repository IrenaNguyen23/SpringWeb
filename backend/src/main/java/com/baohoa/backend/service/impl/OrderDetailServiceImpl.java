package com.baohoa.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.baohoa.backend.entity.OrderDetail;
import com.baohoa.backend.repository.OrderDetailRepository;
import com.baohoa.backend.service.OrderDetailService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService{
    private OrderDetailRepository orderdetailRepository;

    @Override
    public OrderDetail createOrderDetail(OrderDetail orderdetail){
        return orderdetailRepository.save(orderdetail);
    }

    @Override
    public OrderDetail getOrderDetailById(Long orderdetailId){
        Optional<OrderDetail> optionalOrderDetail = orderdetailRepository.findById(orderdetailId);
        return optionalOrderDetail.get();
    }
    @Override
    public List<OrderDetail> getAllOrderDetails() {
        return orderdetailRepository.findAll();
    }

    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderdetail){
        OrderDetail existingOrderDetail = orderdetailRepository.findById(orderdetail.getId()).get();
        existingOrderDetail.setProduct(orderdetail.getProduct());
        existingOrderDetail.setNum(orderdetail.getNum());
        existingOrderDetail.setPrice(orderdetail.getPrice());
        existingOrderDetail.setTotal_money(orderdetail.getTotal_money());
        existingOrderDetail.setOrders(orderdetail.getOrders());
        existingOrderDetail.setProduct(orderdetail.getProduct());
        OrderDetail updateOrderDetail = orderdetailRepository.save(existingOrderDetail);
        return updateOrderDetail;
    }
    @Override
    public void deleteOrderDetail(Long orderdetailId){
        orderdetailRepository.deleteById(orderdetailId);
    }
}
