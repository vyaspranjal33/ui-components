import cn from 'classnames';
import React from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { Card } from './card';
import { DetailsRow } from './details-row';
import { Icon } from './icon';
import Styles from './styles/plan-card.module.scss';
function renderPackageDetails(packageDetails, selectedPackage) {
    return packageDetails.map(p => (React.createElement("div", { className: Styles['packages-container'] },
        React.createElement(Card, { className: Styles['card-padding'], inline: true, thin: true, title: "" },
            React.createElement("div", { className: cn(Styles.col1, Styles.small) },
                React.createElement("h3", { className: Styles['package-name'] }, p.name),
                React.createElement("p", null, p.packageSummary)),
            React.createElement("div", { className: cn(Styles.small, Styles['plan-status']) },
                p.name === selectedPackage ? (React.createElement(Icon, { className: cn(Styles['small-icon'], Styles.mantis), type: "check" })) : null,
                p.name === selectedPackage ? ('Your Current Plan') : (React.createElement("p", { className: Styles.price },
                    "$",
                    p.price,
                    "/mo*",
                    React.createElement(Button, { className: Styles['select-btn'], type: "secondary", onClick: null, small: true }, "Select"))))))));
}
function renderPlanDetails(planDetails) {
    return planDetails.map(p => (React.createElement(DetailsRow, { available: p.available, title: p.title, tooltipContent: p.toolTip })));
}
export const PlanCard = ({ planTitle, recommended, selectedPackage, packageDetails, planDetails, }) => (React.createElement("div", { className: Styles['plan-card'] },
    React.createElement("div", { className: Styles.col1 },
        React.createElement("h2", null,
            planTitle,
            "\u00A0\u00A0\u00A0",
            recommended ? (React.createElement(Badge, { className: Styles['plan-card'], gradient: true }, "RECOMMENDED")) : null),
        renderPlanDetails(planDetails),
        React.createElement("a", { className: cn(Styles.small, Styles.link), href: "#" }, "See Full Plan Comparison")),
    renderPackageDetails(packageDetails, selectedPackage),
    planTitle === 'Free' ? null : (React.createElement("p", { className: cn(Styles['plan-card'], Styles.small, Styles['taxes-footnote']) },
        ' ',
        "* Taxes may apply"))));
export default PlanCard;
//# sourceMappingURL=plan-card.js.map