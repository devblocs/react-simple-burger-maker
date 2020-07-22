import React, {Component, Fragment} from 'react'
import './burger.css'

class Burger extends Component{
    constructor(props){
        super(props)

        this.state = {
            lettuce: 0,
            tomato: 0,
            cheese: 0,
            meat: 0
        }
    }

    addRemoveIngredient(action, ingredient){
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;

        switch(ingredient){
            case 'lettuce':{
                stateValue = lettuce;
                break;
            }
            case 'tomato':{
                stateValue = tomato;
                break;
            }
            case 'cheese':{
                stateValue = cheese;
                break;
            }
            case 'meat':{
                stateValue = meat;
                break;
            }
            default: break;
        }

        if(action === 'add'){
            stateValue = stateValue + 1;
        }else{
            stateValue = stateValue - 1;
        }

        this.setState({
            [ingredient] : stateValue > 0 ? stateValue : 0
        })
    }

    makeBurger(){
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let burger = [];

        for(let index = 0; index < lettuce; index++){
            burger.push(<div key={burger.length} className="lettuce-side"></div>)
        }

        for(let index = 0; index < tomato; index++){
            burger.push(<div key={burger.length} className="tomato-side"></div>)
        }

        for(let index = 0; index < cheese; index++){
            burger.push(<div key={burger.length} className="cheese-side"></div>)
        }

        for(let index = 0; index < meat; index++){
            burger.push(<div key={burger.length} className="meat-side"></div>)
        }


        return burger;
    }

    render(){
        return (
            <Fragment>
                <div className="burger-view">
                    <div className="top-side"></div>
                        {this.makeBurger()}
                    <div className="bottom-side"></div>
                </div>
                <div className="burger-ingredients-block">
                    <p>Lettuce</p>
                    <div className="ingredients-btn-group">
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'add', 'lettuce')}>ADD</button>
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'remove', 'lettuce')}>REMOVE</button>
                    </div>
                    <p>Tomato</p>
                    <div className="ingredients-btn-group">
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'add', 'tomato')}>ADD</button>
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'remove', 'tomato')}>REMOVE</button>
                    </div>
                    <p>Cheese</p>
                    <div className="ingredients-btn-group">
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'add', 'cheese')}>ADD</button>
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'remove', 'cheese')}>REMOVE</button>
                    </div>
                    <p>Meat</p>
                    <div className="ingredients-btn-group">
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'add', 'meat')}>ADD</button>
                        <button className="ingredient-btn" onClick={this.addRemoveIngredient.bind(this, 'remove', 'meat')}>REMOVE</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Burger