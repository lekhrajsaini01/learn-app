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
    renderDishComment(dish){
        if(dish !=null){
            return(
            <div>
                <h3>Comments</h3>
                    {dish.comments.map((comment)=>{
                        return (
                            <ul key={comment.id} style={{listStyle:"none"}}>
                                <li>
                                    {comment.comment}
                                </li>
                                <li>
                                    --{comment.author} {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </li>
                            </ul>
                            );
                        })
                    }
            </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }
    

    render(){
        
        return(
            <div className="row">
                <div className="col-8 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}  
                </div>
                <div className="col-8 col-md-5 m-1">
                {this.renderDishComment(this.props.dish)}
                </div>   
            </div>
            

        );
    }
}

export default Dishdetail;
