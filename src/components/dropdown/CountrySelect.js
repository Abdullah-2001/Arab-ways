import React, { useState } from 'react';
import Select from 'react-select';
import "./CountrySelect.css"


const customOptionRenderer = ({ value, label, flag }) => (
    <div>
        <span className={`flag-icon flag-icon-${flag}`} />
        <span>{label}</span>
    </div>
);

function CountrySelect() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        console.log(selectedOption);
    };
    const countryOptions = [
        {
            value: 'us', label: (
                <div className='list'>
                    <div className={`flag-icon list-icon flag-icon-us`} />
                    <p>United States</p>
                </div>
            ), flag: 'us'
        },
        {
            value: 'ca', label: (
                <div className='list'>
                    <div className={`flag-icon list-icon flag-icon-ca`} />
                    <p>Canada</p>
                </div>
            ), flag: 'ca'
        },
        {
            value: 'gb', label: (
                <div className='list'>
                    <div className={`flag-icon list-icon flag-icon-gb`} />
                    <p>United Kingdom</p>
                </div>
            ), flag: 'gb'
        },
        // Add more countries as needed
    ];

    return (
        <div className='country-select-container'>
            <Select
                value={selectedCountry}
                onChange={handleCountryChange}
                options={countryOptions}
                clearable={false}
                placeholder="Select a country..."
                className="country-select"
                optionRenderer={customOptionRenderer}
                isSearchable={false}
            />
        </div>
    );
}

export default CountrySelect;


