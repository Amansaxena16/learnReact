function Form() {
  return (
    <div>
      <hr />
      {/* Form start from here */}
      <div className="bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-md">
          <h2 className="text-xl font-bold mb-4">Project Details Form</h2>

          {/* Form */}
          <form className="space-y-4">
            {/* Project Name */}
            <div>
              <label
                htmlFor="projectName"
                className="block text-gray-700 font-semibold"
              >
                Project Name:
              </label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Enter project name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <button
              type="button"
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
      {/* end here */}
    </div>
  );
}

export default Form;
