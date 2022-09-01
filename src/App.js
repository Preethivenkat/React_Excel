import logo from './logo.svg';
import './App.css';
import MergeExcel from './MergeExcel/MergeExcel';
import MergeExcelHtml from './MergeExcel/MergeExcelHtml';


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
