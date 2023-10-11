import axios from 'axios';
//old
const TRAIN_API_BASE_URL= "http://localhost:8080/api/v1/trains";
 

class TrainService {
  
    

    getTrains(){
        return axios.get(TRAIN_API_BASE_URL);
    }

    createTrain(Train){
        return axios.post(TRAIN_API_BASE_URL ,Train);
    }

    getTrainById(TrainId){
        return axios.get(TRAIN_API_BASE_URL + '/' + TrainId);
    }

    updateTrain(Train, TrainId){
        return axios.put(TRAIN_API_BASE_URL + '/' + TrainId, Train);
    }

    deleteTrain(TrainId){
        return axios.delete(TRAIN_API_BASE_URL + '/' + TrainId);
    }
}

export default new TrainService()


