import './App.css';
import Counter from './features/counter/Counter';
import UserList from './features/users/UserList';
import Todo from './features/todo/Todo'
import ContactList from "./features/contact/ContactList";
import AddContactForm from "./features/contact/AddContactForm";
import ClearAllBtn from "./features/contact/ClearAllBtn";
import './index.css'

function App() {

  return (
      <div className="App">
        <h1>React + ReduxToolkit</h1>
        <Counter/>
        <UserList/>
        <Todo/>
         <ContactList/>
         <AddContactForm/>
         <ClearAllBtn />
      </div>
  );
}

export default App;
