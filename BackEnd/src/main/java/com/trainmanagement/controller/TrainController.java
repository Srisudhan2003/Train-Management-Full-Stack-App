package com.trainmanagement.controller;

import java.util.List;  
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.trainmanagement.model.TrainInfo;
import com.trainmanagement.service.TrainService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class TrainController {
	@Autowired
	TrainService trainService;
	@GetMapping("/trains")
	public List<TrainInfo> getTrain()
	{
		return trainService.getTrain();
	}
	
	
	
	@Operation(summary="Create a new train details")
//	@ApiResponses(value= {@ApiResponse(responseCode="201",description="train created successfully"),
//			@ApiResponse(responseCode="400",description="train is invalid")})/
    @ResponseStatus(HttpStatus.CREATED)
//	@PostMapping()
	@PostMapping(value="/trains",produces ="application/json")
	public ResponseEntity<TrainInfo>createTrain(final @RequestBody TrainInfo trainInfo)
	{
		TrainInfo createtrain=trainService.createTrain(trainInfo);
				return ResponseEntity.ok(createtrain);
	}
	
	
	
	  @Operation(summary = "Get an train details with given id")
	  @ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "getting train successful"),
	               @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
	               @ApiResponse(responseCode = "404" , description = "train not  found")
	  })
	  
	  @GetMapping(value = "/{id}" , produces = "application/json")
	  public ResponseEntity<Optional<TrainInfo>> getTrainById (final @PathVariable Long id){
	    Optional<TrainInfo> createdtrain   = trainService.getTrainById(id);
	    return ResponseEntity.ok(createdtrain);
	  }
	  
	  
	  //update
//	  @Operation(summary = "update train details by given id")
//	  @ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "train updated  successful"),
//	         @ApiResponse(responseCode = "401" , description = "train is Invalid "),
//	         @ApiResponse(responseCode = "404" , description = "train not  found")
//	})
//	  @PutMapping(value = "/{id}" , produces = "application/json" , consumes="application/json")
//	  public ResponseEntity<TrainInfo> updateTrain (final  @RequestBody TrainInfo trainInfo)
//	     throws JsonProcessingException
//	     {
//	      final TrainInfo updatedtrain = trainService.updateTrain(trainInfo);
//	      return ResponseEntity.ok(updatedtrain);
//	     }
	  @Operation(summary = "Updates Train Details for given id")
	    @ApiResponses(value = {
	        @ApiResponse(responseCode = "201", description = "Record was updated successfully!"),
	        @ApiResponse(responseCode = "400", description = "Could not update bus record")
	    })
	    @ResponseStatus(HttpStatus.OK)
	    @PutMapping(value = "/trains/{id}", produces = "application/json")
	    public void updateTrain(final @RequestBody TrainInfo new_record, @PathVariable("id") Long id) {
	      
	      trainService.updateTrain(new_record, id);
	    }
	  
	  //delete
	  @Operation(summary = "Deletes a  train details by given id")
	  @ApiResponses(value = {@ApiResponse(responseCode = "201",description = "train deleted successfully"),
	       @ApiResponse(responseCode = "401" , description = "Invalid credentials"),
	         @ApiResponse(responseCode = "404" , description = "train not  found")
	  })
	  @ResponseStatus(HttpStatus.OK)
	  @DeleteMapping("/trains/{id}")
	  public void  deleteTrain (final @PathVariable("id") Long id)
	  {
	    trainService.deleteTrain(id);
	  }
//	@DeleteMapping("/delete/{id}")
//	public String deleteDetails(@PathVariable("id") Long id) {
//		return trainService.deleteDetails(id);
//	}
//
//	@PostMapping("/post")
//	public TrainInfo postDetails(@RequestBody TrainInfo x)
//	{
//		return trainService.postDetails(x);
//	}
//	
//	@PutMapping("/put/{id}")
//	public TrainInfo updateTrainDetails(@RequestBody TrainInfo x)
//	{
//		return trainService.updateTrainDetails(x);
//	}
//	@GetMapping(value = "/sorttrain/{field}")
//	Iterable<TrainInfo> trainSort(@PathVariable ("field") String field) {
//		return trainService.sortTrain(field);
//	}
//	@GetMapping(value = "/pagingtrain/{pageNo}/{pageSize}")
//	Page<TrainInfo> trainPaging(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize) {
//		return trainService.pagingTrain(pageno, pageSize);
//	}
//	@GetMapping(value = "/pagingSortingtrain/{pageNo}/{pageSize}/{field}")
//	Page<TrainInfo> trainPagingAndSorting(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize,@PathVariable ("field")String field) {
//		return trainService.pagingAndSortingTrain(pageno, pageSize,field);
//	}
}
