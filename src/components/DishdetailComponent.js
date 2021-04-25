
import React from 'react';
import{Card, CardImg, CardImgOverlay,CardText, CardBody, CardTitle} from 'reactstrap';



    function RenderDish({dish}){
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

    function RenderDishComment({dish}){
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
                                    --{comment.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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
    

    const Dishdetail = (props) =>{
        
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-8 col-md-5 m-1">
                        <RenderDish dish={props.dish}/>  
                    </div>
                    <div className="col-8 col-md-5 m-1">
                        <RenderDishComment dish={props.dish}/>
                    </div>   
                </div>
            </div>
            

        );
    }

export default Dishdetail;
