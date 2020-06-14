import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
  cat: 'img/gato.jpg',
  dolphin: 'img/delfin.jpg',
  panda: 'img/panda.jpg'
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component {
    state = {src: ANIMAL_IMAGES[this.props.animal]}
    
    // *componentWillReceiveProps
    // It executes only when the component will receive new props 
    // It's useful when is used to build the state of the component
    // You could use setState and it sometimes does not cause another render
    componentWillReceiveProps (nextProps) {
        console.log('1. componentWillReceiveProps');
        console.log(nextProps);
        this.setState({ src: ANIMAL_IMAGES[nextProps.animal]})
    }

    // *shouldComponentUpdate
    // It's executed before update the component
    // Determines if the behavior should be updated
    // Should return a boolean (default: true)
    // !setState shouldn't be called
    // @param nextProps
    // @param nextState 
    shouldComponentUpdate(nextProps) {
        console.log('2. shouldComponentUpdate');
        console.log('before: ', this.props.animal);
        console.log('new: ', this.props.animal)
        return this.props.animal !== nextProps.animal;
    }

    // *componentWIllUpdate
    // It runs before the update of the component
    // Don't run if shouldComponentUpdate returns false
    // Only animations could be a possible use
    // !setState couldn't be called, this will cause an infinite loop
    componentWillUpdate(nextProps, nextState) {
        console.log('3. componentWillUpdate');
        const img = document.querySelector('img');
        console.log('from img element', {alt: img.alt});

        //web animations api
        img.animate([{
            filter: 'blur(0px)'
        },{
            filter: 'blur(2px)'
        }], {
            duration: 500,
            easing: 'ease'
        })
    }

    // *componentDidUpdate
    // It runs after the component updated
    // Execute extern library functions as use new DOM or make extern calls
    // !setState shouldn't be called, it will cause an infinite loop
    // @param prevProps
    // @param prevState
    componentDidUpdate() {
        console.log('4. componentDidUpdate');
        const img = document.querySelector('img');
        img.animate([
            {
                filter: 'blur(2px)'
            },{
                filter: 'blur(0px)'
            }
        ], {
            duration: 1500,
            ease: 'ease'
        })
        console.log('from img element', { alt: img.alt })
    }

    // *componentWillUnmount
    // It runs before unmount the component
    // Allows delete subscriptions to events, cancel request,  clean intervals and frees up resources
    // !setState shouldn't be called


    // *render
    // Reflects new props and the state of the component
    // It doesnt't run if shouldComponentUpdate returns false
    // Diffing DOM mount/unmount of components
    // !setState couldn't be called, it cause an infinite loop
    render(){
        console.log('-> 1. when mount/3. when update')
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        );
    }
}

AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

class UpdateCycle extends Component {
    state = {animal: 'panda'}
    _renderAnimalButton = (animal) => {
        return (
            <button
                //disabled = {animal === this.state.animal} 
                key={animal} 
                onClick={() => this.setState({ animal })}
            >
                {animal}
            </button>
        );
    }
    render() {
        return(
        <div>
            <h4>Update Cycle</h4>
            {ANIMALS.map(this._renderAnimalButton)}
            <AnimalImage animal={this.state.animal} />
        </div>
        );
    }
}

export default UpdateCycle;