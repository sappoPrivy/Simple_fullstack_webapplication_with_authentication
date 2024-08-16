package com.example.demo.user;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;



@Entity
@Table(name = "users")
public class User {

    @Id
    @SequenceGenerator(
        name = "user_sequence",
        sequenceName = "user_sequence",
        allocationSize = 1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE, 
        generator = "user_sequence"
    )
    private Integer user_id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    private boolean is_admin;

    // @OneToMany(mappedBy = "user")
    // private Set<Planned> planned_lists;

    // Constructors

    public User() {
    }
    

    public User(Integer user_id, String username, String password, Boolean is_admin) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.is_admin = is_admin;
    }

    public User(String username, String password, Boolean is_admin) {
        this.username = username;
        this.password = password;
        this.is_admin = is_admin;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.is_admin = false;
    }

    // Getters
    public Boolean getIs_admin() {
        return is_admin;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public String getPassword() {
        return password;
    }

    public String getUsername() {
        return username;
    }

    // Setters
    public void setIs_admin(Boolean is_admin) {
        this.is_admin = is_admin;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        User users = (User) object;
        return Objects.equals(user_id, users.user_id) && Objects.equals(username, users.username) && Objects.equals(password, users.password);
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), user_id, username, password, is_admin);
    }

    @Override
    public String toString() {
        return "User{" +
                "user_id=" + user_id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", is_admin=" + is_admin +
                '}';
    }
}
