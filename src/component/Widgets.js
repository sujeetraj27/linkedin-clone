import React from 'react';
import InfoIcon from '@material-ui/icons/Info'
import  FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
            
        </div>


    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Linked in News</h2>
                <InfoIcon />
            </div>
            {newArticle("sujeet", "top news")}
        </div>
    );
}

export default Widgets;
