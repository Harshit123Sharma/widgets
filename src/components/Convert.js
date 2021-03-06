import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {

    const [debouncedText, setDebouncedTExt] = useState(text);

    const [translated, setTranslated] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTExt(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {

        const doTranslation = async () => {
            const { data } = await axios.post(
            "https://translation.googleapis.com/language/translate/v2",
            {},
            {
                params: {
                q: debouncedText,
                target: language.value,
                key: process.env.REACT_APP_API_KEY,
                },
            }
            );

            setTranslated(data.data.translations[0].translatedText);
        };
        
        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui center aligned inverted header">{translated}</h1>
        </div>
    );
}

export default Convert;