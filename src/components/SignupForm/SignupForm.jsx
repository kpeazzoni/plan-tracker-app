<div>
    <p>
        Add a New Client
    </p>
    <div className = 'container col-4'>
        <form className="row justify-content-center">
            <input value={firstName} name="firstName" onChange={handleInputChange} type="text"
                placeholder="First Name" />
            <input value={lastName} name="lastName" onChange={handleInputChange} type="text" placeholder="Last Name" />
            <input value={dob} name="dob" onChange={handleInputChange} type="Date" placeholder="DOB" />
            <input value={height} name="height" onChange={handleInputChange} type="text" placeholder="Height" />
            <input value={weight} name="weight" onChange={handleInputChange} type="text" placeholder="Weight" />
            <input value={goals} name="goals" onChange={handleInputChange} type="text" placeholder="Goals" />
            <input value={notes} name="notes" onChange={handleInputChange} type="text"
                placeholder="Notes: (injury history, lifestyle, fun facts, etc.)" />
            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>
    </div>
</div>