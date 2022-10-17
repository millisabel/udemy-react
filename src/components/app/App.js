import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";

import './app.css';
import EmployersAddForm from "../employers-add-form/employers-add-form";

function App() {
    const data = [
        {name: 'Vanya', salary: 389, increase: false},
        {name: 'Petr', salary: 453, increase: true},
        {name: 'Rita', salary: 124, increase: false},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data = {data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;
