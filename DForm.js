import React, { Component } from 'react';
import './dform.css';
import JForm from './JForm.js';

class DForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			skill: '',
			dataob: {
				"name" : "your name here",
				"email" : "hello@world.org",
				"date" : "2019-10-31"
			}
		}
	}
	setSkill = (s) => {
		this.setState({skill:s});
	}
	onSubmit = (ob) => {
		if(ob !== null) {
			if(this.state.skill.length > 0) {
				ob.skill = this.state.skill;
			}
			if(Object.keys(this.state.dataob).length > 0) {
				for(let f in this.state.dataob) {
					if(! this.state.dataob[f] !== ob[f]) {
						ob[f] = this.state.dataob[f];
					}
				}
			}
			// remove procrastinated checkboxes
			for(let c in ob) {
				if(ob[c] === false) {
					delete ob[c];
				}
			}	
		} else {
			if(Object.keys(this.state.dataob).length > 0) {
				ob = {};
				for(let d in this.state.dataob) {
					ob[d] = this.state.dataob[d];
				}
				if(this.state.skill.length > 0) {
					ob.skill = this.state.skill;
				}
			}
		}
		console.log(ob);
	}
	render() {
		let fieldar = [];
		let skills = [];
		for(let s in dform.skills) {
			skills.push(s);
		}
		for(let b in dform.basic) {
			let far = [b, dform.basic[b]];
			if(this.state.dataob.hasOwnProperty(b)) {
				far.push(this.state.dataob[b]);
			}
			fieldar.push(far);
		}
		if(this.state.skill.length > 0) {
			for(let s in dform.skills[this.state.skill]) {
				fieldar.push([s, dform.skills[this.state.skill][s]]);
			}
		}
		return (
			<div className="dform">
				<h3>dynamic form</h3>
				<JForm onSubmit={this.onSubmit} setSkill={this.setSkill} fieldar={fieldar} skills={skills} skill={this.state.skill} key={this.state.skill} />
			</div>			
		);
	}
}

const dform = {
	"basic" : {
		"name":"textfield",
		"phone":"textfield",
		"city":"textfield",
		"email":"textfield",
		"bio":"textarea",
		"date":"date"
	},
	"skills" : {
		"audio" : {
			"mics":"textfield",
			"desk":"textfield",
			"compressors":"textfield",
			"ponytail":"checkbox"
		},
		"video" : {
			"camera":"textfield",
			"lenses":"textfield",
			"lights":"textfield",
			"baseball hat":"checkbox"
		},
		"developer" : {
			"laptop":"textfield",
			"languages":"textfield",
			"frameworks":"textfield",
			"t-shirt":"checkbox"
		}
	} 
}
export default DForm;
