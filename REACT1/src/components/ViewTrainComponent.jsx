import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TrainService from '../services/TrainService'

class ViewTrainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Train: {}
        }
    }

    componentDidMount(){
        TrainService.getTrainById(this.state.id).then( res => {
            this.setState({Train: res.data});
        })
    }

    render() {
        return (
            <><div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Train Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Train Capacity:&nbsp;&nbsp;</label>
                            <div> {this.state.Train.capacity}</div>
                        </div>
                        <div className="row">
                            <label> Train Engine Number:&nbsp;&nbsp;</label>
                            <div> {this.state.Train.enginenumber}</div>
                        </div>
                        <div className="row">
                            <label> Train Model:&nbsp;&nbsp;</label>
                            <div> {this.state.Train.model}</div>
                        </div>
                        <div className="row">
                            <label> Train Destination:&nbsp;&nbsp;&nbsp;</label>
                            <div> {this.state.Train.traindestination}</div>
                        </div>
                    <div className="row">
                        <label> Train Name:&nbsp;&nbsp;&nbsp;</label>
                        <div> {this.state.Train.trainname}</div>
                    </div>
                <div className="row">
                    <label> Train Source:&nbsp;&nbsp;&nbsp;</label>
                    <div> {this.state.Train.trainsource}</div>
                </div>
                <div className="row">
                    <label> Train Type:&nbsp;&nbsp;&nbsp;</label>
                    <div> {this.state.Train.type}</div>
                </div><div className='backbutton'> <Link to="/view-Train/Trains"><button>BACK</button></Link>
                </div>
                </div></div>
                </div></>
        )
    }
}

export default ViewTrainComponent


