import React from 'react'


class SearchBar extends React.Component {

    state = { term: '' }

    onInput = (event) => {
        this.setState({ term: event.target.value })
    };

    onForm = (event) => {
        event.preventDefault();
        this.props.onFormSub(this.state.term)
    };


    render() {

        return (
            <div className="ui segment" style={{marginTop:'20px'}}>
                <form className="ui form" onSubmit={this.onForm}>
                    <div className="field">
                        <label>Search Bar</label>
                        <input type='text' value={this.state.term}
                            onChange={this.onInput} />
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar