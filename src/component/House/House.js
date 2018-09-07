import React from 'react';
// const props = {stuff: "akhdfk"}
import './House.css'

function House() {
    return (
        <section>
            <div>
                <p>
                  House
                </p>
                <div className = "little">
                <p>Name</p>
                <p>Address:</p>
                <p>City:</p>
                <p>State:</p>
                </div>

                <button className="button1">Delete</button>
            </div>
            
        </section>
    )
}

export default House