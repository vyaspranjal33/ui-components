import React from "react";

import { storiesOf } from "@storybook/react";
import { Divider } from '../src/divider';
import { PlanCard } from '../src/plan-card';
import '../src/styles/global/main.scss';

const PACKAGES = {
    FREE_PLAN_DETAILS: [
        {
            title: "Core Email API Features",
            available: true,
        },
        {
            title: "Core Marketing Campaigns Features",
            available: true,
            toolTip: "Something or other ٩(◕‿◕)۶",
        },
        {
            title: "Data-rich email activity feed",
            available: true,
            toolTip: "Something over here (〃＾▽＾〃)",
        },
        {
            title: "Dedicated IP",
            available: false,
        },
        {
            title: "Subuser management",
            available: false,
        },
        {
            title: "Customer success manager",
            available: false,
        },
        {
            title: "Prioritized support",
            available: false,
        },
    ],

    ESSENTIALS_PLAN_DETAILS: [
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
            title: "Dedicated IP",
            available: false,
        },
        {
            title: "Subuser management",
            available: false,
        },
        {
            title: "Customer success manager",
            available: false,
        },
        {
            title: "Prioritized support",
            available: false,
        },
    ],
    PRO_PLAN_DETAILS: [
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
    ],
    PRO_PACKAGES: [
        {
            name: "Pro 100K",
            packageSummary: "100,000 emails/mo + $0.00085 per extra email",
            price: "79.95",
        },
        {
            name: "Pro 300K",
            packageSummary: "300,000 emails/mo + $0.00050 per extra email",
            price: "199.95",
        },
        {
            name: "Pro 700K",
            packageSummary: "700,000 emails/mo + $0.00045 per extra email",
            price: "399.95",
        },
        {
            name: "Pro 1.5M",
            packageSummary: "1.5 million emails/mo + $0.00045 per extra email",
            price: "699.95",
        },
        {
            name: "Pro 2.5M",
            packageSummary: "2.5 million emails/mo + $0.00045 per extra email",
            price: "949.95",
        },
    ],

    ESSENTIALS_PACKAGES: [
        {
            name: "Essentials 40k",
            packageSummary: "40,000 emails/mo + $0.001 per extra email",
            price: "9.95",
        },
        {
            name: "Essentials 100k",
            packageSummary: "100,000 emails/mo + $0.00075 per extra email",
            price: "19.95",
        },
    ],

    FREE_PACKAGES: [
        {
            name: "Free 100",
            packageSummary: "100 emails/day",
            price: "0.00",
        },
    ],
};


const stories = storiesOf("Plan Card", module);
stories.add("Plan Card", () => (
    <div style={{ backgroundColor: "#FCFCFC", height: "75vh", padding: 20 }}>
        <PlanCard
            planTitle="Free"
            selectedPackage="Free 100"
            packageDetails={PACKAGES.FREE_PACKAGES}
            planDetails={PACKAGES.FREE_PLAN_DETAILS}
        />
    </div>
));
stories.add("Multiple Plan Cards", () => (
    <div style={{ backgroundColor: "#FCFCFC", height: "100%", padding: 20 }}>
        <PlanCard
            planTitle="Free"
            selectedPackage="Free 100"
            packageDetails={PACKAGES.FREE_PACKAGES}
            planDetails={PACKAGES.FREE_PLAN_DETAILS}
        />
        {/* sorry for this, we can update the spacing better in a page style? */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Divider />
        <PlanCard
            planTitle="Essentials"
            selectedPackage="Free 100"
            packageDetails={PACKAGES.ESSENTIALS_PACKAGES}
            planDetails={PACKAGES.ESSENTIALS_PLAN_DETAILS}
        />
        {/* sorry for this, we can update the spacing better in a page style? */}
        <br />

        <Divider />
        <PlanCard
            planTitle="Pro"
            recommended
            selectedPackage="Free 100"
            packageDetails={PACKAGES.PRO_PACKAGES}
            planDetails={PACKAGES.PRO_PLAN_DETAILS}
        />
    </div>
));
