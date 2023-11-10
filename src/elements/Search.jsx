const Search = ({value,onChange}) => {
    return(
        <div>
            <div className="d-flex flex-row">
                <i className="bi bi-search m-2"></i>
                <input
                    placeholder="Cari Film..."
                    type="text"
                    name="search"
                    id="search"
                    value={value}
                    onChange={onChange}
                    className="form-control-plaintext ms-1"
                />
            </div>
            <hr className="border border-white m-0"/>
        </div>
    )
}
export default Search