import './App.css';
import './style.css'
import CrochetBox from './CrochetBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Anna's Crochet Closet</h1>

      </header>

      <div className="content">
            <CrochetBox title= "Double Crochet (DC)" vid= "https://www.youtube.com/embed/5xKssKskNzo?clip=Ugkxg2wQVLzC4MUzrcKSsd3u1FkzfGvUKM1W&amp;clipt=EOmMBRijqgc" />
            <CrochetBox title= "Half Double Crochet (HDC)" vid="https://www.youtube.com/embed/ajIZThzJ36Q?clip=UgkxlktsgQrklBw-gp1I-Qf8o393I8ZIFeRi&amp;clipt=EN2ECxi7_ww"/>
            <CrochetBox title="Magic Ring/Circle" vid="https://www.youtube.com/embed/p298HxgsO1s?clip=UgkxgjnVrC9g1qNGALg2pnNri2GV4zJPguxv&amp;clipt=EMGaARinvQM" />
            <CrochetBox title="dc2tog" />
            <CrochetBox />
        </div>
    </div>
  );
}

export default App;

