import { render } from '@testing-library/react';
import React,{Component} from 'react';
import{Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';



class Dishdetail extends Component {

    constructor(props){
        super(props);
        this.state = {
          
        }
    
    }
    
    
    renderDish(dish){
        if(dish !=null) {
            return(
                <Card>
                    <CardImg width="100%" src = {dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText> 
                    </CardBody>
                </Card> 
                
            );
            
        }
        else{
            return(
                <div></div>
            );
        }
    }
    // renderDishDetail(comment){
    //      if(comment !=null){

    //      }
    // }

    render(){
        // const comment = this.props.dish.comments.map((comment)=>{
        //     console.log(comment);
        // });
        // const menu = this.props.dishes.map((dish) =>{
        //     return(
        //         <div key={dish.id} className="col-12 col-md-5 m-1">
        //             <Card onClick={()=>this.props.onClick(dish.id)}>
        //                 <CardImg src = {dish.image} alt={dish.name}/>
        //                 <CardImgOverlay>
        //                     <CardTitle>{dish.name}</CardTitle>
        //                 </CardImgOverlay>
        //             </Card>
        //         </div>
        //     );
        // });
        const name = console.log()
        
       

        return(

                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {/* {this.renderDishDetail(this.props.dish.comments)} */}
                    </div>
                </div>

        );
    }
}

export default Dishdetail;
