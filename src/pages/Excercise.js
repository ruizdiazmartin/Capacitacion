import React, { Component } from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Exercises extends React.Component {
	render() {
		return (
			<div>
				<Welcome
					username="Martin"
				/>
				< Card
					title="Technique Guide"
					description="Learn amazing street workout and calisthenics"
					leftColor="#A74CF2"
					rigthColor="#617BFB"
				/>

			</div >
		)
	}

}

export default Exercises