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
                {name: 'Vanya', salary: 389, increase: false, rise: true, id: 1},
                {name: 'Petr', salary: 453, increase: false, rise: false, id: 2},
                {name: 'Rita', salary: 124, increase: false, rise: false, id: 3},
                {name: 'Lena', salary: 10000, increase: true, rise: true, id: 4},
            ],
            term: '',
            filter: '',
        }
        this.maxId = 5;
    }

    onChangeValue = (newSalary, name) => {
        this.setState(({data}) => {
            return {
                data: data.map((item) => {
                    if (item.name === name) {
                        return {...item, salary: newSalary}
                    } else {
                        return item
                    }})
            }
        });
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

    searchEmp = (items, term) => {
        if(term.length === 0){
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            case 'prize':
                return items.filter(item => item.increase)
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data,term, filter} = this.state;
        const employees = this.state.data.length;
        const increase = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees = {employees}
                    increase = {increase}
                />
                <div className="search-panel">
                    <SearchPanel onUpdateSerch = {this.onUpdateSearch}/>
                    <AppFilter
                        filter={filter}
                        onFilterSelect = {this.onFilterSelect}
                    />
                </div>
                <EmployersList
                    data = {visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                    onChangeValue = {this.onChangeValue}
                />
                <EmployersAddForm
                    onAdd = {this.addItem}
                    checkValid = {this.checkValid}
                />
            </div>
        );
    }
}

export default App;
