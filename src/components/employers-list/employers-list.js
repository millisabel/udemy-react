import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data}) => {

    const items = data.map(item => {
        return(
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem {...item}/>
    )
    })

    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    );
};

export default EmployersList;