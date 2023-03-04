<div>
    <p>
        Add your account information:
    </p>
    <div className = 'container col-4'>
        <form className="row justify-content-center">
            <p>Name:
            <input 
            value="{firstName}"
            name="firstName" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Last Name" 
            />
            <input 
            value={lastName} 
            name="lastName" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Last Name" 
            /> </p>
            <p>Username:
            <input 
            value={username} 
            name="username" 
            onChange={handleInputChange} 
            type="text" 
            placeholder="Username" 
            /></p>
            <p>Password:
            <input 
            value={password} 
            name="password" 
            onChange={handleInputChange} 
            type="text"
            placeholder="Password" 
            /></p>
            <button type="button" onClick={handleFormSubmit}>
                Submit
            </button>
        </form>
    </div>
</div>