import ButtonCreate from '../ButtonCreate'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const times = [
            'Programmer',
            'Front-End',
            'Data Science',
            'Ux Design',
            'DevOps',
            'Mobile',
            'innovation and management'
    ]
    
    return (
        <section className="Form">
            <form>
                <h2>Fill in the details to create the employee card</h2>
                <TextField label="Name" placeholder="Enter your name" />
                <TextField label="Position" placeholder="Enter your job title" />
                <TextField label="Image" placeholder="Enter the image address" />
                <DropdownList label="Teams" item ={times}/>
                <ButtonCreate>
                    Creat Card
                </ButtonCreate>
            </form>
        </section>
    )
}

export default Form