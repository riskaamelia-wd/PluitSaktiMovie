export const Select = ({onSelect, classNameLabel, label,  name,  options, className}) => {
    return (
        <div className="d-flex flex-row col-4 col-md-2 col-lg-3">    
            {label && <h3 htmlFor={name} className={classNameLabel}>
                {label}
            </h3>}     
            <select 
                id={name}  
                className={className}
                name={name} 
                onChange={onSelect}
            >
                {
                    options?.map(option => (
                        <option 
                            key={option.value}
                            value={option.value}
                            >
                                {option.text}
                            </option>
                    ))
                }
            </select>

        </div>
    )
}