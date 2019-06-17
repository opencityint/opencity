import React, { Component } from 'react';

class JForm extends Component {
	onChange = (e) => {
		let ob = {};
		ob[e.target.name] = e.target.value;
		this.setState(ob);	
	}
	setSkill = (s) => {
		this.props.setSkill(s.target.value);
	}
	onSubmit = (f) => {
		f.preventDefault();
		this.props.onSubmit(this.state);
	}
	returnInputType(ar) {
		if(ar === undefined) { return }
		let val = '';
		if(ar.length > 2) {
			val = ar[2];
		}
		switch(ar[1]) {
			case "textfield" :
				return (<input type='text' className='fvalue' autoComplete="nope" defaultValue={val} onChange={this.onChange} name={ar[0]} />)
			case "textarea" :
				return (<textarea name={ar[0]} className='fvalue' defaultValue={val} onChange={this.onChange}></textarea>)
			case "date" :
				return (<input type='date' className='fvalue' name={ar[0]} defaultValue={val} onChange={this.onChange} />)
			case "checkbox" :
				return (<input type='checkbox' className='fvalue' name={ar[0]} id={ar[0]} defaultChecked={val} onChange={this.onChange} />)
			case "hidden" :
				return (<input type='hidden' name={ar[0]} defaultValue={val} onChange={this.onChange} />)
			default :
				return null
		}
	}
	render() {
		let def;
		if(this.props.skill.length < 1) { 
			def = (<option key='default'>select skill if any</option>);
		}
		return (
			<>
			<form onSubmit={this.onSubmit}>
				<input type='submit' />
				{ this.props.fieldar.map((fld, id) => (
					 <span key={id}><div className='label'>{fld[0]}</div> {this.returnInputType(fld)}<br /></span>
				))}
			</form>
			<select value={this.props.skill} onChange={this.setSkill}>
			{def}
			{ this.props.skills.map((skill, sid) => (
				<option key={sid} value={skill}>{skill}</option>
			))}
			</select>
			</>
		)
	}
}
export default JForm;