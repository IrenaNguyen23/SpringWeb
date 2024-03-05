package com.baohoa.backend.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // @Column(nullable = false)
    private String address;

    // @Column(nullable = false)
    private Date created_at;

    // @Column(nullable = false)
    private Integer deleted;

    // @Column(nullable = false)
    private String email;

    // @Column(nullable = false)
    private String fullname;

    // @Column(nullable = false)
    private String password;

    // @Column(nullable = false)
    private String phone_number;

    // @Column(nullable = false)
    private Date updated_at;

    // //@Column(nullable = false)
    // private Integer role_id;

    @ManyToOne
    // @JoinColumn(name = "role_id" ,nullable = false)
    private Role role;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Token> token;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Orders> orders;

}
