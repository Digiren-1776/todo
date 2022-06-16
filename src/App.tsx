import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import "./index"


const App = () => {
  return (
    <div title='global container' className="bg-slate-700 h-screen overflow-y-auto w-screen">
      <Header />
      <div title='' className='md:max-w-xl w-4/5 mx-auto'>
        <ToDoForm />
      </div>
    </div>
  );
}

export default App;
