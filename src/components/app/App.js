import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Vanya', salary: 389, increase: false, like: true, id: 1},
                {name: 'Petr', salary: 453, increase: true, like: false, id: 2},
                {name: 'Rita', salary: 124, increase: false, like: false, id: 3},
            ],
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if(!name || !salary){
            return;
        }
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    // onToggleIncrease = (id) => {

        // 1 вариант

        // this.setState(({data}) => {
        //     // const index = data.findIndex(elem => elem.id === id)
        //     //
        //     // const old = data[index];
        //     // const newItem = {...old, increase: !old.increase};
        //     // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     //
        //     // return{
        //     //     data: newArr,
        //     // }
        // })

        // 2 вариант

        // this.setState(({data}) => ({
        //     data: data.map(item => {
        //         if(item.id === id){
        //             return {...item, increase: !item.increase}
        //         }
        //         return item;
        //     })
        // }))
    // }

    onToggleIRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, like: !item.like}
                }
                return item;
            })
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                    employees = {employees}
                    increase = {increase}
                />
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployersList
                    data = {this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                />
                <EmployersAddForm
                    onAdd = {this.addItem}
                />
            </div>
        );
    }
}

export default App;
