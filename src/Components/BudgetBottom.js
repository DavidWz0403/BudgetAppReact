
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
            operator: '',
            data: []
        }
        this.expense = Expense
        this.income = Income

    }



    updateOperator = (e) => {
        const newOperator = e.target.value;
        this.setState({
            ...this.state,
            operator: newOperator
        });
        // if (this.state.operator == '+') {
        //     this.setState({
        //         ...this.state,
        //         type: 'inc'
        //     })
        // } else if (this.state.operator == "-") {
        //     this.setState({
        //         ...this.state,
        //         type: 'exp'
        //     })
        // }
        // console.log(this.state.type)
    };

    updateDes = (e) => {
        const newDescription = e.target.value;
        this.setState({
            ...this.state,
            description: newDescription
        })

        // console.log(this.state.description)
    }

    updateValue = (e) => {
        const newValue = e.target.value;
        this.setState({
            ...this.state,
            value: newValue
        })
        // console.log(this.state.value);
    }

    clickFunction = () => {
        if (this.state.operator == "+") {
            const dataInc = new Income(this.state.des = this.state.description,
                this.state.val = this.state.value);
            this.setState({
                ...this.state,
                data: [...this.state.data, dataInc]
            })
        } else if (this.state.operator == "-") {
            const dataExp = new Expense(this.state.des = this.state.description,
                this.state.val = this.state.value);
            this.setState({
                ...this.state,
                data: [...this.state.data, dataExp]
            })

            // myArray: [...this.state.myArray, 'new value'] 
        }
        // const test = new Expense(this.state.des = this.state.description, this.state.val = this.state.value);
        console.log(this.state.data);
        // console.log(test);
        // console.log(this.state.type);
        // console.log(this.state.operator);
        // console.log(this.state.value);
        // console.log(this.state.description);

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

                                data.map(Income => {
                                    return (
                                        <div class="item clearfix" id="income-0">
                                            <div class="item__description">{Income.des}</div>
                                            <div class="right clearfix">
                                                <div class="item__value">{Income.val}</div>
                                                <div class="item__delete">
                                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
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
                                data.map(Expense => {
                                    <div class="item clearfix" id="expense-0">
                                        <div class="item__description">{Expense.des}</div>
                                        <div class="right clearfix">
                                            <div class="item__value">{Expense.val}</div>
                                            <div class="item__percentage"></div>
                                            <div class="item__delete">
                                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            {/* <!--
                        <div class="item clearfix" id="expense-0">
                            <div class="item__description">Apartment rent</div>
                            <div class="right clearfix">
                                <div class="item__value">- 900.00</div>
                                <div class="item__percentage">21%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>

                        <div class="item clearfix" id="expense-1">
                            <div class="item__description">Grocery shopping</div>
                            <div class="right clearfix">
                                <div class="item__value">- 435.28</div>
                                <div class="item__percentage">10%</div>
                                <div class="item__delete">
                                    <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>
                        -->
                         */}
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default BudgetBottom; 