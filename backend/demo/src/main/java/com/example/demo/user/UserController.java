package com.example.demo.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/user")
@CrossOrigin("http://127.0.0.1:5173/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
	public List<User> getUsers(){
		return userService.getUsers();
	}

    // CRUD operations

    @PostMapping
    public void registerUser(@RequestBody User user){
        userService.registerUser(user);
    }

    @DeleteMapping(path = "{user_id}")
    public void deleteUser(@PathVariable("user_id") Integer user_id){
        userService.deleteUser(user_id);
    }

    @PutMapping(path = "{user_id}")
    public void updateUser(@PathVariable("user_id") Integer user_id, @RequestParam(required = false) String username,@RequestParam(required = false) String password, @RequestParam(required = false) Boolean is_admin ){
        userService.updateUser(user_id, username, password, is_admin);
    }

    // @GetMapping
    // public void getUser(){
        
    // }
}
