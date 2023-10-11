package com.trainmanagement.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.trainmanagement.model.UserInfo;
@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long>{
	public Optional findByEmail(String email);
}