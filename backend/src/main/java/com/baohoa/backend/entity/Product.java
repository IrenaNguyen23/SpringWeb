package com.baohoa.backend.entity;
import java.sql.Date;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @Column(nullable = false)
    private Date  created_at;

    private Date updated_at;

    // @Column(nullable = false)
    private int deleted;

    // @Column(nullable = false)
    private String description;

    private String title;

    private String brand;

    // @Column(nullable = false)
    private Integer discount;

    private Integer sale;

    // @Column(nullable = false)
    private String price;

    // @Column(nullable = false)
    private String thumbnail;

    @ManyToOne
    private Category category;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<Gallery> gallery;

    @JsonIgnore
    @OneToMany(mappedBy = "product")
    private List<OrderDetail> orderdetail;
}
