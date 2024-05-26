import {useState} from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();     /*ta conectando o formulario a uma funcao*/
        console.log("Enviou form!");


    };
      
 
  return (
    <div className='todo-form'>
    <h2>Criar Tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder= "Digite o titulo" />
        <select>
            <option value="">Selecione uma categoria </option>
            <option value="Trabalho">Trabalho  </option>
            <option value="Pessoal">Pessoal </option>
            <option value="Estudos">Estudos </option>
        </select>
        <button type='submit'>Criar tarefa</button>
    </form>
</div>

); 
};

export default TodoForm