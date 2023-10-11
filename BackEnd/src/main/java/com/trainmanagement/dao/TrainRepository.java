package com.trainmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository;

import com.trainmanagement.model.TrainInfo;
@Repository
public interface TrainRepository extends JpaRepository<TrainInfo, Long>{

}
