import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import PercentInput from '../src/percent-input';


const stories = storiesOf('Percent Input', module);


export class Wrapper extends React.Component<any, {value: number}> {
  public state = {
    value: 0
  }
  public onChange = (e: any) => {
    let inputVal = parseFloat(e.target.value);
    inputVal =  inputVal > 100 ? 100
              : inputVal < 0 ? 0
              : inputVal;
    this.setState({
      value: inputVal
    });
  }
  public render() {
   return(<PercentInput step="0.01" onChange={this.onChange} value={this.state.value}/>);
  }
};


stories.add('Blank', () => (<Wrapper />));
