const Form = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/82c06703-a887-46ed-8d0c-0fa0d2e93fdb" // sends submission to getform which emails me.
          method="POST"
          className="flex flex-col p-2 w-96 font-caSpotnik"
        >
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="p-3 border border-primary-400 my-1 px-4 py-2 bg-primary-500 hover:bg-primary-400 focus:bg-alt-700 text-alt-100 rounded-lg transition-all duration-300 ease-out"
          ></input>
          <input
            type="email"
            name="email"
            placeholder="hello@example.com"
            className="p-3 border border-primary-400  my-1 px-4 py-2 bg-primary-500 hover:bg-primary-400 focus:bg-alt-700 text-alt-100 invalid:bg-secondary-800 invalid:text-secondary-100 invalid:border-secondary-400 rounded-lg transition-all duration-300 ease-out"
          ></input>
          <textarea
            name="message"
            placeholder="Type your message here."
            className="p-3 border border-primary-400  my-1 px-4 py-2 bg-primary-500 hover:bg-primary-400 focus:bg-alt-700 text-alt-100 rounded-lg transition-all duration-300 ease-out"
          ></textarea>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-secondary-500 hover:bg-secondary-400 text-secondary-100 font-medium rounded-lg hover:bg-navy-600 transition-all duration-300 ease-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
