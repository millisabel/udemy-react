import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data, onDelete}) => {
    const items = data.map((item) => {
        const {id, ...itemProps} = item;
        return(
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete ={() => onDelete(id)}
            />
    )
    })

    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    );
};

export default EmployersList;