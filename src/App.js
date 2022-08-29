import logo from './logo.svg';
import './App.css';
import MergeExcel from './MergeExcel';
import MergeExcelHtml from './MergeExcelHtml';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* <MergeExcel></MergeExcel> */}
          <MergeExcelHtml></MergeExcelHtml>
      </header>
    </div>
  );
}

export default App;
