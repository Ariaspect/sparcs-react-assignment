import React, {Component} from 'react';
import './TodoForm.css';

const data = (title, content, priority, due) => {
    return {
        title,
        content,
        priority,
        due
    };
}

const attrArr = ['title', 'content', 'priority', 'due'];

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.submit = props.submit;
        this.setSubmit = props.setSubmit;
        this.data = data('','','','');
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        for (const attr in attrArr) {
            this.data[attrArr[attr]] = event.target[attrArr[attr]].value;
        }
        console.log(this.data);
        this.setSubmit(this.data);
        this.data = data('','','','');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <section className="input-form">
                    <div>
                        <label className="input-field-name">Priority</label>
                        <select name="priority" id="priority" className="input-field" required>
                            <option value="high">🔴High</option>
                            <option value="medium">🟡Medium</option>
                            <option value="low">🟢Low</option>
                        </select>
    
                        <label className="input-field-name">Title</label>
                        <input type="text" name="title" id="title" className="input-field" required></input>
    
                        <label className="input-field-name">Due</label>
                        <input type="date" name="due" id="due" required></input>
                    </div>
                    <div className="content">
                        <label className="input-field-name">content</label>
                        <textarea id="content" name="content" rows="5" cols="33" className="content-box"></textarea>
                    </div>
                    <div>
                        <input className="submit-button" type="submit" value="Apply"></input>
                    </div>
                </section>
            </form>
        );
    }
}

export default TodoForm;