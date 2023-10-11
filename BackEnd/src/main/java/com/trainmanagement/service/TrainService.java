package com.trainmanagement.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.trainmanagement.dao.TrainRepository;
import com.trainmanagement.model.TrainInfo;
@Service
public class TrainService {
	@Autowired
	TrainRepository trainRepository;
//	public List<TrainInfo> getTrain()
//	{
//		return trainRepository.findAll();
//	}
//	public String deleteDetails(Long id)
//	{
//		trainRepository.deleteById(id);
//		return "Id : "+id+" is deleted";
//	}
//	public TrainInfo postDetails(TrainInfo z)
//	{
//		return trainRepository.save(z);
//	}
//	public TrainInfo updateTrainDetails(TrainInfo x)
//	{
//		return trainRepository.save(x);
//	}
//	public Iterable<TrainInfo> sortTrain(String field) {
//		return trainRepository.findAll(Sort.by(Direction.ASC,field));
//	}
//	public Page<TrainInfo> pagingTrain(int page,int pageSize) {
//		Pageable paging=PageRequest.of(page,pageSize);
//		return trainRepository.findAll(paging);
//	}
//	public Page<TrainInfo> pagingAndSortingTrain(int offset,int pageSize,String field) {
//		Pageable paging = PageRequest.of(offset, pageSize).withSort(Sort.by(field));
//		return trainRepository.findAll(paging);
//	}
	public TrainInfo createTrain(TrainInfo trainInfo)
	{
		return trainRepository.save(trainInfo);
	}
	 public Optional<TrainInfo> getTrainById(Long id)
	  {
	    return trainRepository.findById(id);
	  }
	  
	  public String deleteTrain(Long id)
	  {
	    trainRepository.deleteById((long) id);
	    return id+" is deleted";
	     
	  }
	  
	  public List<TrainInfo> getTrain()
	  {
	    return trainRepository.findAll();
	  }
	  
//	  public TrainInfo updateTrain(TrainInfo trainInfo)
//	  {
//	    return trainRepository.save(trainInfo);
//	  }
	  public TrainInfo updateTrain(TrainInfo new_record, Long id) {
	      
	      TrainInfo updateTrain = trainRepository.findById(id).get();
	      
	      if(updateTrain == null)
	      {
	        return updateTrain;
	      }
	      else
	      {
	        updateTrain.setCapacity(new_record.getCapacity());
	        updateTrain.setEnginenumber(new_record.getEnginenumber());
	        updateTrain.setModel(new_record.getModel());
	        updateTrain.setTraindestination(new_record.getTraindestination());
	        updateTrain.setTrainname(new_record.getTrainname());
	        updateTrain.setTrainsource(new_record.getTrainsource());
	        updateTrain.setType(new_record.getType());
	        
	      }
	      
	      return trainRepository.save(updateTrain);
	    }
}
