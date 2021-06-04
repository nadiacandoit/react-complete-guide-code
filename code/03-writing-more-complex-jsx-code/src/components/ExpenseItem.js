/* Rule - you must only return one root element-or js snippet
 than side-by-side element
  - Why? 
  - Workaround - cover it by another div
  - For readability - you cover it by bracket & format
*/

function ExpenseItem() {
  return (
    <div>
      <div>March 28th 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

//
export default ExpenseItem;
