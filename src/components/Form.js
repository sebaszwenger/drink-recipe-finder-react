const Form = () => {
  return (
    <form className="col-12">
      <fildset className="text-center">
        <legend>Search Drinks by Category or by Ingredient</legend>
      </fildset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Search by Ingredient"
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            placeholder="Category"
          >
            <option value="">-- Select Category --</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Find Drink"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
