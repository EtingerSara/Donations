import { useState } from "react";
import DonationItem from "./DonationItem";

const List = ({ arr }) => {


    const [searchName, setSearchName] = useState("");
    const [searchSum, setSearchSum] = useState(0);

    let filtered = arr.filter((item) => item.name.includes(searchName) || (item.sum <= searchSum) || searchName === "");

    return (
        <>
            <input type='text' className="sort" placeholder="סינון לפי שם התורם" onChange={(e) => { setSearchName(e.target.value) }} />;
            <ul>
                {filtered.map(item => <DonationItem key={item.id} c={item} />)}
            </ul>
        </>);
}

export default List;