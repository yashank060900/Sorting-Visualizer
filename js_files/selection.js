async function selection() {
  console.log("In selection()");
  const ele = document.querySelectorAll(".bar");

  for (let i = 0; i < ele.length; i++) {
    let min_idx = i;
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      ele[j].style.background = "red";

      await waitforme(delay);
      if (parseInt(ele[j].style.height) < parseInt(ele[min_idx].style.height)) {
        if (min_idx !== i) {
          ele[min_idx].style.background = "brown";
        }
        min_idx = j;
      } else {
        // if the currnent comparision is more than min_index change is back to normal
        ele[j].style.background = "brown";
      }
    }
    await waitforme(delay);
    swap(ele[min_idx], ele[i]);
    // change the min element index back to normal as it is swapped
    ele[min_idx].style.background = "brown";
    // change the sorted elements color to green
    ele[i].style.background = "green";
  }
}

const selectionSortBtn = document.querySelector(".selectionSort");

selectionSortBtn.addEventListener("click", async function () {
  console.log("Selection()");
  disableNewArrayBtn();
  disableSizeSlider();
  disableSortingBtn();
  await selection();
  enableNewArrayBtn();
  enableSizeSlider();
  enableSortingBtn();
});
