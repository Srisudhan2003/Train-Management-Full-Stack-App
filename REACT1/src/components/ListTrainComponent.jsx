import React, { Component } from 'react'
import TrainService from '../services/TrainService'
import './project.css'
class ListTrainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                Trains: []
        }
        this.addTrain = this.addTrain.bind(this);
        this.editTrain = this.editTrain.bind(this);
        this.deleteTrain = this.deleteTrain.bind(this);
    }

    deleteTrain(id){
        TrainService.deleteTrain(id).then( res => {
            this.setState({Trains: this.state.Trains.filter(Train => Train.id !== id)});
        });
    }
    viewTrain(id){
        this.props.history.push(`/view-Train/${id}`);
    }
    editTrain(id){
        this.props.history.push(`/add-Train/${id}`);
    }

    componentDidMount(){
        TrainService.getTrains().then((res) => {
            this.setState({ Trains: res.data});
        });
    }

    addTrain(){
        this.props.history.push('/add-Train/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Trains List</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addTrain}> Add Train</button> */}
                    <button onClick={this.addTrain}class="cssbuttons-io-button"> ADD TRAINS
  <div class="icon">
    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
  </div>
</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Train Name</th>
                                    <th> Train Model</th>
                                    <th> Train Destination</th>
                                    <th> Train Source</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Trains.map(
                                        Train => 
                                        <tr key = {Train.id}>
                                             <td> { Train.trainname} </td>   
                                             <td> {Train.model}</td>
                                             <td> {Train.traindestination}</td>
                                             <td> {Train.trainsource}</td>
                                             <td>
                                                 {/* <button  className="btn btn-info">Update </button> */}
                                                 <button onClick={ () => this.editTrain(Train.id)} className='ubutton'>
    <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="15" width="15" viewBox="0 0 24 24">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
    Update
</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTrain(Train.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewTrain(Train.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListTrainComponent


