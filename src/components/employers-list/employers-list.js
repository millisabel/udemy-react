import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp}) => {
    const items = data.map((item) => {
        const {id, ...itemProps} = item;
        return(
            // <EmployersListItem name={item.name} salary={item.salary}/>
            <EmployersListItem
                key={id}
                {...itemProps}
                onDelete ={() => onDelete(id)}
                onToggleProp ={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
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