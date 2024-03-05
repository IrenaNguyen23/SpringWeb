package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.baohoa.backend.entity.Orders;
import com.baohoa.backend.service.OrdersService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/orders")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")

public class OrdersController {

    private OrdersService orderService;
    @PostMapping
    public ResponseEntity<Orders> createOrder(@RequestBody Orders Orders){
        Orders saveOrders = orderService.createOrder(Orders);
        return new ResponseEntity<> (saveOrders, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<Orders> getOrderById(@PathVariable("id") Long OrdersId){
        Orders Orders = orderService.getOrderById(OrdersId);
        return new ResponseEntity<>(Orders, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Orders>> getAllOrders(){
        List<Orders> Orders = orderService.getAllOrders();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + Orders.size() + "/" + Orders.size());
        
        return ResponseEntity.ok().headers(headers).body(Orders);
    }

    @PutMapping("{id}")
    public ResponseEntity<Orders> updateOrder(@PathVariable("id") Long OrdersId, @RequestBody Orders Orders) {
        Orders.setId(OrdersId);
        Orders updateOrders = orderService.updateOrder(Orders);
        return new ResponseEntity<>(updateOrders, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Long OrdersId){
        orderService.deleteOrder(OrdersId);
        return new ResponseEntity<>("Orders successfully deleted!", HttpStatus.OK);
    }
    
}