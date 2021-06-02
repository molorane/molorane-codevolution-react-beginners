import logo from './logo.svg';
import './App.css';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import ParentComponent from './components/ParentComponent';
import LifeCycleA from './components/UpdatingLifeCycle/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import MyPureComponent from './components/MyPureComponent';
import MyParentComponent from './components/MyParentComponent';
import RefsOldDemo from './components/Refs/RefsDemoOld';
import FocusInput from './components/Refs/FocusInput';
import ParentInput from './components/Refs/Forwardref/ParentInput';
import PortalDemo from './components/Refs/PortalDemo';
import Parent from './components/Refs/Portals/Parent';
import Hero from './components/Refs/ErrorHandling/Hero';
import ParentBoundary from './components/Refs/ErrorHandling/ParentBoundary';

function App() {
  return (
    <div className="App">

      <ParentBoundary />
   
   
    {/*

       <MyPureComponent />
      <Table />
       <FragmentDemo />

      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>

      <Inline />

      <Stylesheet primary="true" />

      <List />

       <UserGreeting />

      <ParentComponent />
      
      <EventBind />

      <ClassClick />

      <FunctionClick />

      <Counter />

      <Message />

      <Greet name="Nomfundo">
        <p>Children tag</p>
        <button value="Submit">Submit</button>
      </Greet>
      <Greet name="Millicent" />
      <Greet name="Love" />
      <Welcome name="Welcome" />
      <Hello />
    */}
    </div>
  );
}

export default App;
