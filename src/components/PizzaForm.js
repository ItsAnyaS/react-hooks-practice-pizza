function PizzaForm({pizza, handleOnChange, setReload}) {
const {topping, size, vegitarian} = pizza
const onInputChange = (e) => {
  handleOnChange(e.target.name, e.target.value)
}
const onRadioChange = (e) => {
  handleOnChange(e.target.name, e.target.value === "Vegitarian")
}

const handleSubmit = (e) => {
e.preventDefault()
setReload(prev => !prev)
fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
  method: "PATCH",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify(pizza)
});

}
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={onInputChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={onInputChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegitarian}
              onChange={onRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegitarian}
              onChange={onRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
