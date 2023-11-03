import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PreviousSearchDiet({ onSearch }) {
    const searches = [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan",
        "paleolithic",
        "primal",
        "whole 30",
        "ketogenic",
        "fodmap friendly",
    ];

    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        onSearch(searchText);
    };
    return (
        <div>
            <div className="previous-search">
                <h3> Searches type of diets</h3>
                <div className="previous-searching-container">
                    {searches.map((search, index) => (
                        <div
                            className="search-item"
                            key={index}
                            style={{ animationDelay: index * 0.2 + "s" }}
                        >
                            {search}
                        </div>
                    ))}
                </div>
                <div className="find-box">
                    <input
                        type="text"
                        placeholder="search diet..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    );
}



