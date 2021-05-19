import React from 'react';
import './App.css';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
    return (
        <div className="App">
            <h1 className="error">Error</h1>
            <h1 className={styles.success}>Success</h1>
            {/* <NameList></NameList> */}
            {/* <ParentComponent></ParentComponent>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Counter></Counter>
      <Message></Message>
      <Greet name="Sabbir" heroName="Peter Parker" />
      <EventBind></EventBind>
      <Greet name="Zannat" heroName="Raja Ait Ochen">
        <p>This is children props</p>
      </Greet>
      <Greet name="Apu" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="BatMan" />
      <Welcome name="Zannat" />
      <Welcome></Welcome>
      <Hello /> */}
        </div>
    );
}

export default App;
