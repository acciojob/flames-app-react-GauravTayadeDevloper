import { useState } from "react";
export default function RelationCalculator() {

    let [fname, setFname] = useState("");
    let [sname, setSname] = useState("");
    let [relation, setRealation] = useState("")
    function calculateRelation() {
        if (fname.trim() === "" || sname.trim() === "") {
            setRealation("please enter valid input");
            return;
        }


        let name1 = fname.trim().split("");
        let name2 = sname.trim().split("");

        // name1.includes(name2[j])
        for (let i = 0; i < name1.length; i++) {
            let index = name2.indexOf(name1[i]);
            if (index !== -1) {
                name1.splice(i, 1);
                name2.splice(index, 1);
                i--;
            }

        }
        let sum = name1.length + name2.length;
        const relations = {
            1: "Friends",
            2: "Love",
            3: "Affection",
            4: "Marriage",
            5: "Enemy",
            0: "Siblings"
        };
        setRealation(relations[sum % 6]);

    }
    function clearAll() {
        setFname("");
        setSname("");
    }
    return (
        <div>
            {/* Do not remove the main div */}
            <input placeholder="Enter the first name"

                data-testid="input1"
                name="name1"
                value={fname} onChange={(e) => (setFname(e.target.value))} ></input>
            <input placeholder="Enter the second name" data-testid="input2"
                name="name2 " value={sname} onChange={(e) => (setSname(e.target.value))}></input>
            <button  data-testid="calculate_relationship"
        name="calculate_relationship" onClick={calculateRelation} >
                Calculate Realationship Future
            </button>
            <button   data-testid="clear"
        name="clear" onClick={clearAll}>
                Clear
            </button>
            {relation ? <h3 data-testid="answer">{relation}</h3> : ""}
        </div>
    )

}