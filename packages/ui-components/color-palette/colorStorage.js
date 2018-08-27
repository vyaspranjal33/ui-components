import toPairs from 'lodash/toPairs';
import React, { Component } from 'react';
import SavedColorList from './savedColorList';
// TODO: Replace this with a Redux container when the time comes.
const localStorage = window.localStorage;
const storageKey = 'savedColors';
const currentVersion = 1;
const keysAndValuesToColorObjects = (colors) => toPairs(colors).map(([key, color]) => ({ key, color }));
const upgradeSavedColorStorage = () => {
    // In case we ever need to change the way we need to store data,
    // this will give us a place to safely perform the migration. Get
    // the version of the "database" that was last stored by the user
    // to determine if a migration is needed.
    localStorage.setItem(`${storageKey}Version`, currentVersion.toString());
};
const getColorsFromLocalStorage = () => {
    if (localStorage && localStorage.getItem(storageKey)) {
        return JSON.parse(localStorage.getItem(storageKey));
    }
    return {};
};
const storeColorsInLocalStorage = (colors) => {
    localStorage.setItem(storageKey, JSON.stringify(colors));
};
class ColorStorage extends Component {
    constructor(props) {
        super(props);
        // tslint:disable-next-line:no-unused-expression
        localStorage && upgradeSavedColorStorage();
        this.state = {
            colors: getColorsFromLocalStorage(),
        };
        this.addColor = this.addColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }
    addColor(event) {
        const { color } = this.props;
        const colors = Object.assign({}, this.state.colors, { [Date.now().toString()]: color });
        this.setState({ colors }, this.saveState);
    }
    removeColor(event, id) {
        const colors = Object.assign({}, this.state.colors);
        delete colors[id];
        this.setState({ colors }, this.saveState);
    }
    saveState() {
        storeColorsInLocalStorage(this.state.colors);
    }
    render() {
        const { onChange } = this.props;
        const { colors } = this.state;
        return (React.createElement(SavedColorList, { colors: keysAndValuesToColorObjects(colors), addColor: this.addColor, removeColor: this.removeColor, onChange: onChange }));
    }
}
export default ColorStorage;
//# sourceMappingURL=colorStorage.js.map