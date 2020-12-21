
import React, { Component } from 'react';
import './BudgetBottom.css';
import Expense from './Expense';
import Income from './Income';

class BudgetBottom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            value: 0,
            type: '',
            operator: '+',
            data: []
        }
        this.expense = Expense
        this.income = Income
    }

    updateOperator = (e) => {
        const newOperator = e.target.value;
        this.setState({
            operator: newOperator
        });
    };

    updateDes = (e) => {
        const newDescription = e.target.value;
        this.setState({
            description: newDescription
        })
    }

    updateValue = (e) => {
        const newValue = e.target.value;
        this.setState({
            value: newValue
        })
    }

    clickFunction = () => {
        if (this.state.operator === "+") {
            const dataInc = new Income(this.state.description, this.state.value);
            
            this.setState({
                ...this.state,
                data: [...this.state.data, dataInc]
            })
        } else if (this.state.operator === "-") {
            const dataExp = new Expense(this.state.description, this.state.value);

            this.setState({
                ...this.state,
                data: [...this.state.data, dataExp]
            })
        }
    }


    render() {
        const data = this.state.data;
        return (

            <div className="bottom">
                <div className="add">
                    <div className="add__container">
                        <select className="add__type"
                            value={this.state.operator} onChange={this.updateOperator}>
                            <option >+</option>
                            <option >-</option>
                        </select>
                        <input type="text" className="add__description"
                            placeholder="Add description" onChange={this.updateDes}
                            value={this.state.description} />
                        <input type="number" className="add__value"
                            placeholder="Value" onChange={this.updateValue}
                            value={this.state.value} />
                        <button className="add__btn" onClick={this.clickFunction}
                        >Add</button>
                    </div>
                </div>
                <div className="container clearfix">
                    <div className="income">
                        <h2 className="icome__title">Income</h2>

                        <div className="income__list">
                            {
                                data.filter(movement => movement instanceof Income).map(income => {
                                    return (
                                        <div key={income.des + Math.random()} className="item clearfix" id="income-0">
                                            <div className="item__description">{income.des}</div>
                                            <div className="right clearfix">
                                                <div className="item__value">{income.val}</div>
                                                <div className="item__delete">
                                                    <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>



                    <div className="expenses">
                        <h2 className="expenses__title">Expenses</h2>

                        <div className="expenses__list">
                            {
                                data.filter(movement => movement instanceof Expense).map(expense => {
                                    return (<div key={expense.des + Math.random()} className="item clearfix" id="expense-0">
                                        <div className="item__description">{expense.des}</div>
                                        <div className="right clearfix">
                                            <div className="item__value">{expense.val}</div>
                                            <div className="item__percentage"></div>
                                            <div className="item__delete">
                                                <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default BudgetBottom; 