import './App.css';
import ClassCounter from './components/state-hook/ClassCounter';
import ClassCounterTwo from './components/state-hook/ClassCounterTwo';
import HookCounter from './components/state-hook/HookCounter';
import HookCounterFour from './components/state-hook/HookCounterFour';
import HookCounterThree from './components/state-hook/HookCounterThree';
import HookCounterTwo from './components/state-hook/HookCounterTwo';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import ClassCounterOne from './components/effect-hook/ClassCounterOne';
import HookCounterOne from './components/effect-hook/HookCounterOne';
import ClassMouse from './components/effect-hook/ClassMouse';
import HookMouse from './components/effect-hook/HookMouse';
import MouseContainer from './components/effect-hook/MouseContainer';
import IntervalClassCounter from './components/effect-hook/IntervalClassCounter';
import IntervalHookCounter from './components/effect-hook/IntervalHookCounter';
import DataFetching from './components/effect-hook/DataFetching';

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <IntervalHookCounter /> */}
      {/* <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <ClassCounterTwo /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
