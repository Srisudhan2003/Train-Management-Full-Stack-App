import React, { Component } from 'react'
import TrainService from '../services/TrainService';

class UpdateTrainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            capacity: '',
            enginenumber: '',
            model:'',
            traindestination:'',
            trainname:'',
            trainsource:'',
            type:''
        }
        this.changecapacityHandler = this.changecapacityHandler.bind(this);
        this.changeenginenumberHandler = this.changeenginenumberHandler.bind(this);
        this.changemodelHandler = this.changemodelHandler.bind(this);
        this.changetraindestinationHandler = this.changetraindestinationHandler.bind(this);
        this.changetrainnameHandler = this.changetrainnameHandler.bind(this);
        this.changetrainsourceHandler = this.changetrainsourceHandler.bind(this);
        this.changetypeHandler = this.changetypeHandler.bind(this);
        this.saveOrUpdateTrain = this.saveOrUpdateTrain.bind(this);
    }

    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            TrainService.getTrainById(this.state.id).then( (res) =>{
                let train = res.data;
                this.setState({capacity: train.capacity,
                    enginenumber: train.enginenumber,
                    model : train.model,
                    traindestination : train.traindestination,
                    trainname : train.trainname,
                    trainsource : train.trainsource,
                    type : train.type,
                   
                    
                });
            });
        }
    }
    saveOrUpdateTrain = (e) => {
        e.preventDefault();
        let train = {capacity: this.state.capacity, enginenumber: this.state.enginenumber,model: this.state.model ,traindestination: this.state.traindestination,trainname: this.state.trainname,trainsource: this.state.trainsource,type: this.state.type,} ;
        console.log('train => ' + JSON.stringify(train));

        // step 5
        if(this.state.id === '_add'){
            TrainService.createTrain(train).then(res =>{
                this.props.history.push('/trains');
            });
        }else{
            TrainService.updateTrain(train, this.state.id).then( res => {
                this.props.history.push('/trains');
            });
        }
    }
    
    changecapacityHandler= (event) => {
        this.setState({capacity: event.target.value});
    }

    changeenginenumberHandler= (event) => {
        this.setState({enginenumber: event.target.value});
    }

    changemodelHandler= (event) => {
        this.setState({model: event.target.value});
    }
    changetraindestinationHandler= (event) => {
        this.setState({traindestination: event.target.value});
    }
    changetrainnameHandler= (event) => {
        this.setState({trainname: event.target.value});
    }
    changetrainsourceHandler= (event) => {
        this.setState({trainsource: event.target.value});
    }
    changetypeHandler= (event) => {
        this.setState({type: event.target.value});
    }

    cancel(){
        this.props.history.push('/trains');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Train</h3>
        //     return <h3 className="text-center"><button>
        //     <span>
        //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg> Create
        //     </span>
        //   </button></h3>

        }else{
            return <h3 className="text-center">Update Train</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Capacity: </label>
                                            <input placeholder="capacity" name="capacity" className="form-control" 
                                                value={this.state.capacity} onChange={this.changecapacityHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Engine Number: </label>
                                            <input placeholder="enginenumber" name="enginenumber" className="form-control" 
                                                value={this.state.enginenumber} onChange={this.changeenginenumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>  Model: </label>
                                            <input placeholder="model" name="model" className="form-control" 
                                                value={this.state.model} onChange={this.changemodelHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Train Destination: </label>
                                            <input placeholder="train destination" name="traindestination" className="form-control" 
                                                value={this.state.traindestination} onChange={this.changetraindestinationHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Train Name: </label>
                                            <input placeholder="train name" name="trainname" className="form-control" 
                                                value={this.state.trainname} onChange={this.changetrainnameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Train Source: </label>
                                            <input placeholder="train source" name="trainsource" className="form-control" 
                                                value={this.state.trainsource} onChange={this.changetrainsourceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Type: </label>
                                            <input placeholder="type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changetypeHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateTrain}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateTrainComponent

