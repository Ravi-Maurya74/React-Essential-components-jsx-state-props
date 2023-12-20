import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS,EXAMPLES } from './data';
import { useState } from 'react';


function App() {
  const [tabContent, setTabContent] = useState();
  function handleClick(selectedTab) {
    setTabContent(selectedTab);
    console.log('You clicked on ' + tabContent + ' tab'); // This will always be one click behind
  }

  return (
    <div>
      <Header />
      <main>
      <h2>Time to get started!</h2>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                title={concept.title}
                description={concept.description}
                image={concept.image}
                key={concept.title}
              />
            ))}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                {...concept}
                key={concept.title}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent==='components'} onClick={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={tabContent==='jsx'} onClick={()=>handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={tabContent==='props'} onClick={()=>handleClick('props')}>Props</TabButton>
            <TabButton isSelected={tabContent==='state'} onClick={()=>handleClick('state')}>State</TabButton>
          </menu>
          {/* <div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
          </div> */}
          {
          tabContent?(
            <div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
          </div>
          ):(
            <div id='tab-content'>
            <h3>Click on a tab to view its content</h3>
          </div>
          )  
          }
        </section>
      </main>
    </div>
  );
}

export default App;
