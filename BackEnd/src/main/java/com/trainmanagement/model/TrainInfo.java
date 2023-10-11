package com.trainmanagement.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "traindetails")
public class TrainInfo {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int capacity;
	private int enginenumber;
	private String model;
	private String traindestination;
	private String trainname;
	public TrainInfo(int id, int capacity, int enginenumber, String model, String traindestination, String trainname,
			String trainsource, String type) {
		this.id = id;
		this.capacity = capacity;
		this.enginenumber = enginenumber;
		this.model = model;
		this.traindestination = traindestination;
		this.trainname = trainname;
		this.trainsource = trainsource;
		this.type = type;
	}
	private String trainsource;
	private String type;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public int getEnginenumber() {
		return enginenumber;
	}
	public void setEnginenumber(int enginenumber) {
		this.enginenumber = enginenumber;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getTraindestination() {
		return traindestination;
	}
	public void setTraindestination(String traindestination) {
		this.traindestination = traindestination;
	}
	public String getTrainname() {
		return trainname;
	}
	public void setTrainname(String trainname) {
		this.trainname = trainname;
	}
	public String getTrainsource() {
		return trainsource;
	}
	public void setTrainsource(String trainsource) {
		this.trainsource = trainsource;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
		}
	@Override
	public String toString() {
		return "TrainInfo [id=" + id + ", capacity=" + capacity + ", enginenumber=" + enginenumber + ", model=" + model
				+ ", traindestination=" + traindestination + ", trainname=" + trainname + ", trainsource=" + trainsource
				+ ", type=" + type + "]";
	}
	public TrainInfo(){
		
	}
}
	


