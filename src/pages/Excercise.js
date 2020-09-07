import React, { Component } from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'


class Exercises extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [{
				"id": 1,
				"title": "Technique",
				"description": "Learn amazing",
				"leftColor": "#A74CF2",
				"rigthColor": "#617BFB",
				"img": "../components/images/exercise.png"
			}, {
				"id": 2,
				"title": "Guide",
				"description": "Learn calisthenics",
				"leftColor": "#A74CF2",
				"rigthColor": "#617BFB",
				"img": "../components/images/exercise.png"
			}, {
				"id": 3,
				"title": "Technique Guide",
				"description": "Learn workout",
				"leftColor": "#A74CF2",
				"rigthColor": "#617BFB",
				"img": "../components/images/exercise.png"
			}

			]
		}
	}
	render() {
		return (
			<div>
				<Welcome
					username="Martin"
				/>
				{this.state.data.map((exercise) => {
					return (
						< Card
							title={exercise.title}
							description={exercise.description}
							leftColor={exercise.leftColor}
							rigthColor={exercise.rigthColor}
							image={exercise.img}
						/>
					)
				})
				}
			</div >
		)
	}
}

export default Exercises