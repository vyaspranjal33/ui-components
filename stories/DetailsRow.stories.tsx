import { storiesOf } from '@storybook/react';
import React from 'react';

import { DetailsRow } from '../src/details-row';

import '../src/styles/global/main.scss';

const stories = storiesOf('Details Row', module);

stories.add('Available Details Row', () => (
    <div className="row">
        <div className="col-4" style={{ width: '300px' }}>
            <DetailsRow
                available
                title={"Title with Tooltip"}
                tooltipContent={"tooltip"}
            />
        </div>
        <div className="col-4" style={{ width: '300px' }}>
            <DetailsRow
                available
                title={"Title without Tooltip"}
            />
        </div>
    </div>
));

stories.add('Unavailable Details Row', () => (
    <div className="row">
        <div className="col-4" style={{ width: '300px' }}>
            <DetailsRow
                title={"Title with Tooltip"}
                tooltipContent={"tooltip"}
            />
        </div>
        <div className="col-4" style={{ width: '300px' }}>
            <DetailsRow
                title={"Title without Tooltip"}
            />
        </div>
    </div>
));



stories.add('Details Row Example', () => {
    const planDetails = [
        {
            title: "Core Email API Features",
            available: true,
        },
        {
            title: "Core Marketing Campaigns Features",
            available: true,
            toolTip: "Something ┌( ಠ‿ಠ)┘",
        },
        {
            title: "Data-rich email activity feed",
            available: true,
            toolTip: "Something else (o˘◡˘o)",
        },
        {
            title: "Dedicated IP 🎉",
            available: true,
            toolTip: "Something or other",
        },
        {
            title: "Subuser management",
            available: true,
            toolTip: "Another one",
        },
        {
            title: "Customer success manager",
            available: false,
        },
        {
            title: "Prioritized support",
            available: false,
        },
    ];

    return (
        planDetails.map(p => (
            <DetailsRow
                available={p.available}
                title={p.title}
                tooltipContent={p.toolTip}
            />

        ))
    )
});
