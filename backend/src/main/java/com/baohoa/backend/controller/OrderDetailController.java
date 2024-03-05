package com.baohoa.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.baohoa.backend.entity.OrderDetail;
import com.baohoa.backend.service.OrderDetailService;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/orderdetail")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, exposedHeaders = "Content-Range")

public class OrderDetailController {

    private OrderDetailService orderdetailService;
    @PostMapping
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail OrderDetail){
        OrderDetail saveOrderDetail = orderdetailService.createOrderDetail(OrderDetail);
        return new ResponseEntity<> (saveOrderDetail, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id") Long OrderDetailId){
        OrderDetail OrderDetail = orderdetailService.getOrderDetailById(OrderDetailId);
        return new ResponseEntity<>(OrderDetail, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetails(){
        List<OrderDetail> OrderDetails = orderdetailService.getAllOrderDetails();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + OrderDetails.size() + "/" + OrderDetails.size());
        
        return ResponseEntity.ok().headers(headers).body(OrderDetails);
    }

    @PutMapping("{id}")
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable("id") Long OrderDetailId, @RequestBody OrderDetail OrderDetail) {
        OrderDetail.setId(OrderDetailId);
        OrderDetail updateOrderDetail = orderdetailService.updateOrderDetail(OrderDetail);
        return new ResponseEntity<>(updateOrderDetail, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrderDetail(@PathVariable("id") Long OrderDetailId){
        orderdetailService.deleteOrderDetail(OrderDetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted!", HttpStatus.OK);
    }
    
}