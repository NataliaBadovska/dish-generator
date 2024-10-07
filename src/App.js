import PageHeader from './components/Page-heder/PageHeader';
import Section from './components/Section';
import Basic from './components/Basic';
import Dish from './components/Dish/Dish';

function App() {
  return (
    <>
      <PageHeader />    
      <Section>
        <Basic/>
      </Section>
      <Section>
        <Dish/>
      </Section>
    </>
  );
}

export default App;
