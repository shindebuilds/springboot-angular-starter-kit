package com.starter.fullstack_starter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.starter.fullstack_starter.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	User findByEmail(String email);
}
