import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={i: 0, countImage: this.props.images?.length || 0}
    }
    visibleComponent = (image,i) => {
        const className = cn("carousel-item",{
            "active": this.state.i == i ? true : false
        })
        return (
            <div className={className} key={i}>
                <img alt="" className="d-block w-100" src={image} />
            </div>
        )
    };
    handleClickNext = () =>{
        if (this.state.countImage != 0){
            if (this.state.i + 1 >= this.state.countImage){
                this.setState((state)=>({i: 0}));
            }else{
                this.setState((state)=>({i: state.i + 1}));
            }
        }
    }
    handleClickPrev = () =>{
        if (this.state.countImage != 0){
            if (this.state.i <= 0){
                this.setState((state)=>({i: this.state.countImage - 1}));
            }else{
                this.setState((state)=>({i: state.i - 1}));
            }
        }
    }
    render(){
        const {images} = this.props
        return(
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image,i)=>(
                    this.visibleComponent(image, i)
                ))}
            </div>
            <button
                className="carousel-control-prev"
                data-bs-target="#carousel"
                type="button"
                data-bs-slide="prev"
                onClick={this.handleClickPrev}
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                data-bs-target="#carousel"
                type="button"
                data-bs-slide="next"
                onClick={this.handleClickNext}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        )
    }
}
export default Carousel;
// END
