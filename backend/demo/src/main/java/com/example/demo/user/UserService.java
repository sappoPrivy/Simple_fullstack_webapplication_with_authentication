package com.example.demo.user;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public void registerUser(User user) {
		// Find user by username
		Optional <User> userOptional = userRepository
				.findUserByUsername(user.getUsername());

		// Username is already present
		if(userOptional.isPresent()) {
			throw new IllegalStateException("Username is not available");
		}

		// Username is available
        userRepository.save(user);
    }

    public void deleteUser(Integer user_id) {
		// Determine if user exists
        boolean exist = userRepository.existsById(user_id);

		// The user does not exist
		if(!exist) {
			throw new IllegalStateException("User (id:" + user_id + ") does not exist");
		}

		// The user exists
		userRepository.deleteById(user_id);
    }

	@Transactional
    public void updateUser(Integer user_id, String username, String password, Boolean is_admin ) {
        // Get the user
        User user = userRepository.findById(user_id).orElseThrow(() -> new IllegalStateException("User  (id:" + user_id + ") does not exist"));
		if(username != null && username.length() > 0 && !Objects.equals(user.getUsername(), username)){

			// Find user by username
			Optional <User> userOptional = userRepository
			.findUserByUsername(user.getUsername());

			// Username is already present
			if(userOptional.isPresent()) {
				throw new IllegalStateException("Username not available");
			}

			// Username is available
			user.setUsername(username);

		}

		if( password != null && password.length() > 0 && !Objects.equals(user.getPassword(), password)){
			user.setPassword(password);
		}

		if(is_admin != null && !Objects.equals(user.getIs_admin(), is_admin)){
			user.setIs_admin(is_admin);
		}
		
    }

    public Optional<User> getUser(String username){
		return userRepository.findUserByUsername(username);   
    }
		
}
