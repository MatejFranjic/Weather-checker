import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){
	console.log('Ovo je data average',data);
	let suma = 0;
	for (var i = 0; i < data.length; i++) {
		suma += data[i];
	};

	return Math.round(suma/data.length);
}

export default (props) => {
	console.log('Ovo je props.data koji šaljem u sparklines chart',props.data);
	console.log('Ovo je za boju',props.color);
	console.log('Ovo je za units',props.units);

	return(
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(props.data)} {props.units}
			</div>
		</div>
	);
}