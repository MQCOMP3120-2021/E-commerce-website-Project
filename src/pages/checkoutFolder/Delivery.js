import React, {useState} from "react";
const Delivery = ({updateFn, personInfo, shipInfo}) => {
    let initialState = personInfo;
    if (!initialState) {
        initialState = { FirstN: "", LastN: "", StreetN: "", SuburbN: "", DeliverO: [] }
    }

    const [formInfo, setFormInfo] = useState(initialState);

    const updateField = (event) => {
    // which input element is this
        const name = event.target.attributes.name.value;
        console.log(name, event.target.value);
        if (name === "FirstN") {
            setFormInfo({ ...formInfo, FirstN: event.target.value })
        } else if (name === "LastN") {
            setFormInfo({ ...formInfo, LastN: event.target.value })
        } else if (name === "StreetN") {
            setFormInfo({ ...formInfo, StreetN: event.target.value })
        } else if (name === "SuburbN") {
            setFormInfo({ ...formInfo, SuburbN: event.target.value })
        }else if (name === "DeliverO") {
            setFormInfo({ ...formInfo, DeliverO: event.target.value })
        }
    };

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Form submitted: ", formInfo)
        updateFn(formInfo)
        setFormInfo(initialState)
    };

    return (
        <>
        <div class="PersonInfoContainer">
            <form onSubmit={formHandler}>
                <h3>Address Details</h3>
                <label htmlFor="FirstN">FirstName</label>
                <input name="FirstN" onChange={updateField} value={formInfo.FirstN}></input>
                <label htmlFor="LastN">LastName</label>
                <input name="LastN" onChange={updateField} value={formInfo.LastN}></input>
                <label htmlFor="StreetN">Street Name</label>
                <input name="StreetN" onChange={updateField} value={formInfo.title}></input>
                <label htmlFor="SuburbN">Suburb</label>
                <input name="SuburbN" onChange={updateField} value={formInfo.title}></input>
                <label htmlFor="ZipCode">Zip Code</label>
                <input name="ZipCode" onChange={updateField} value={formInfo.title}></input>
                <label htmlFor="DeliverO">Delivery Options</label>
                None{" "}
                <input
                    type="radio"
                    onChange={updateField}
                    name="DeliverO"
                    value="0"
                ></input>
                $2{" "}
                <input
                    type="radio"
                    onChange={updateField}
                    name="DeliverO"
                    value="2"
                ></input>
                $5{" "}
                <input
                    type="radio"
                    onChange={updateField}
                    name="DeliverO"
                    value="5"
                ></input>
        
                <input type="submit"></input>
            </form>
        </div>
        </>
    )
}

export default Delivery

// else if (name === "DeliverO") {
//     // The checkbox, look at the checked property to see if it
//     // is checked or not, then add or remove as necessary
//     let offs = formInfo.DeliverO;
//     console.log(event.target.checked, offs);
//     if (event.target.checked) {
//         // add it to the list if not present
//         if (!offs.includes(event.target.value)) {
//         console.log("added to the list of offerings");
//         offs = [...formInfo.DeliverO, event.target.value];
//         }
//     } else {
//     // remove it from the list if present
//         if (offs.includes(event.target.value)) {
//         console.log("removed from the list of offerings");
//         offs = offs.filter((o) => o !== event.target.value);
//         }
//     }
//     console.log("Offerings now", offs);
//     setFormInfo({ ...formInfo, offering: offs });
//     }